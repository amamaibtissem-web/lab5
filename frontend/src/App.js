import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

  useEffect(() => {
    fetch(backendURL)
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMsg("❌ Backend unreachable");
        setLoading(false);
      });
  }, [backendURL]);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        width: "350px",
        padding: "25px",
        borderRadius: "10px",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "15px" }}>🌐 Frontend - Lab 5 ( Ibtissem AMAMA & Chedly Wiem</h2>

        {loading ? (
          <p style={{ color: "#666" }}>⏳ Contacting backend...</p>
        ) : (
          <p style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: msg.includes("unreachable") ? "red" : "green"
          }}>
            {msg}
          </p>
        )}

        <p style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
          Backend URL:<br />
          <code>{backendURL}</code>
        </p>
      </div>
    </div>
  );
}

export default App;
