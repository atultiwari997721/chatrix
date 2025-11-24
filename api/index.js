const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("../server/users");
const router = require("../server/router");

const app = express();

app.use(
  cors({
    origin: process.env.VERCEL_URL
      ? [
          `https://${process.env.VERCEL_URL}`,
          `http://${process.env.VERCEL_URL}`,
        ]
      : [
          "http://localhost:3000",
          "http://localhost:3001",
          "http://localhost:3002",
          "http://localhost:3005",
        ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(router);

app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
