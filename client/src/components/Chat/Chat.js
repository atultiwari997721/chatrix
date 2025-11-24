import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";

// Detect environment and set appropriate endpoint
const getEndpoint = () => {
  // If in production (Vercel domain)
  if (
    typeof window !== "undefined" &&
    window.location.hostname.includes("vercel.app")
  ) {
    // Try to use the same domain with /api path for Socket.IO
    return window.location.origin;
  }

  // Otherwise use environment variable or localhost
  return process.env.REACT_APP_ENDPOINT || "http://localhost:3005";
};

const ENDPOINT = getEndpoint();

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

    // Create socket connection with error handling
    socket = io(ENDPOINT, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ["websocket", "polling"],
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
      setConnectionError(`Connection failed: ${error.message || error}`);
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
          <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
            <h2>Connection Error</h2>
            <p>{connectionError}</p>
            <p>Make sure the server is running on {ENDPOINT}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
