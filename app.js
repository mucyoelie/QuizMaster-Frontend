const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

// Middleware
app.use(express.json());
 

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

// Routes
app.use("/api/auth", authRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to QuizMaster API!");
});

module.exports = app; // Export the app to be used in server.js
