const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Backend OK" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(port, () => console.log("Backend running on port " + port));
