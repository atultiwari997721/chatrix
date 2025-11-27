import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";

import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";

// Always use REACT_APP_ENDPOINT in production, fallback to localhost for dev
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:3005";

let socket;

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectionError, setConnectionError] = useState("");

  useEffect(() => {
    // Set CSS variable --vh to handle mobile browser UI (keyboard/show/hide)
    const setVh = () => {
      try {
        const vh =
          (window.visualViewport && window.visualViewport.height) ||
          window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
      } catch (e) {
        document.documentElement.style.setProperty("--vh", `1vh`);
      }
    };

    setVh();
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVh);
    }
    window.addEventListener("resize", setVh);

    // cleanup
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVh);
      }
      window.removeEventListener("resize", setVh);
    };
    // only run once on mount
  }, []);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // Validate that name and room are provided
    if (!name || !room) {
      setConnectionError(
        "Name and room are required. Redirecting to join page..."
      );
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    setName(name);
    setRoom(room);

    // Log the endpoint being used for debugging
    console.log("📍 Connecting to endpoint:", ENDPOINT);
    console.log("🌐 Current hostname:", window.location.hostname);
    console.log("🔗 Full origin:", window.location.origin);

    // Create socket connection with error handling
    socket = io(ENDPOINT, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ["websocket", "polling"],
      secure: true,
      rejectUnauthorized: false,
    });

    socket.on("connect", () => {
      console.log("✓ Connected to server");
      setConnectionError("");
      socket.emit("join", { name, room }, (error) => {
        if (error) {
          console.error("Join error:", error);
          setConnectionError(error);
          alert(error);
        }
      });
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
      const errorMsg =
        error?.message || String(error) || "Unknown connection error";
      setConnectionError(`Connection failed: ${errorMsg}`);
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
      if (reason === "io server disconnect") {
        setConnectionError("Server disconnected you.");
      }
    });

    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("connect_error");
        socket.off("disconnect");
        socket.disconnect();
      }
    };
  }, [location.search, navigate]);

  useEffect(() => {
    if (!socket) return;

    const messageHandler = (message) => {
      setMessages((messages) => [...messages, message]);
    };

    const roomDataHandler = ({ users }) => {
      setUsers(users);
    };

    socket.on("message", messageHandler);
    socket.on("roomData", roomDataHandler);

    return () => {
      if (socket) {
        socket.off("message", messageHandler);
        socket.off("roomData", roomDataHandler);
      }
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message && socket) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  if (connectionError) {
    return (
      <div className="outerContainer">
        <div className="container">
          <div
            style={{
              padding: "20px",
              color: "red",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <h2>⚠️ Connection Error</h2>
            <p>
              <strong>{connectionError}</strong>
            </p>
            <hr />
            <p
              style={{
                marginTop: "20px",
                textAlign: "left",
                lineHeight: "1.8",
              }}
            >
              <strong>The backend server is not running.</strong>
            </p>
            <p style={{ textAlign: "left", marginTop: "15px" }}>
              <strong>To fix this:</strong>
            </p>
            <ol style={{ textAlign: "left", marginLeft: "20px" }}>
              <li>
                Deploy the backend server to <strong>Render.com</strong>
              </li>
              <li>
                Get your backend URL (e.g.,{" "}
                <code>https://chatrix-backend-xxxxx.onrender.com</code>)
              </li>
              <li>
                Add environment variable in Vercel Dashboard:
                <ul>
                  <li>
                    Name: <code>REACT_APP_ENDPOINT</code>
                  </li>
                  <li>Value: Your backend URL</li>
                </ul>
              </li>
              <li>
                Push a new commit to redeploy or trigger a redeploy in Vercel
              </li>
            </ol>
            <p style={{ marginTop: "20px", textAlign: "left" }}>
              📖{" "}
              <a href="/BACKEND_DEPLOYMENT.md" style={{ color: "blue" }}>
                See deployment instructions
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} users={users} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
