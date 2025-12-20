const express = require("express");
const cors = require("cors");
const client = require("prom-client"); // nouveau pour Prometheus

const app = express();
app.use(cors());

// Logger simple
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Metrics setup
const register = client.register;
const counter = new client.Counter({
  name: 'api_requests_total',
  help: 'Total number of API requests'
});

// Endpoint pour Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Endpoints existants
app.get("/api", (req, res) => {
  counter.inc(); // incrémente à chaque appel
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
