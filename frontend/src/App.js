import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

  useEffect(() => {
    fetch(backendURL)
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("❌ Backend unreachable"));
  }, [backendURL]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>🌐 Frontend - Lab5</h2>

        <p
          style={{
            fontSize: "18px",
            color: msg.includes("unreachable") ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {msg}
        </p>

        <p style={{ marginTop: "20px", fontSize: "12px", color: "#777" }}>
          Backend URL:
          <br />
          <code>{backendURL}</code>
        </p>
      </div>
    </div>
  );
}

export default App;
