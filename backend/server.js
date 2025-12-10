const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "✅ Backend is running" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
