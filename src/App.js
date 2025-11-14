import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9fafc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#2c1897ff", marginBottom: "10px" }}>
        Blue/Green CI-CD Simulation
      </h1>

      <h3 style={{ color: "#16a34a", marginBottom: "30px" }}>
        Frontend + Backend Connected ✅
      </h3>

      <div
        style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "inline-block",
          textAlign: "left",
          padding: "20px 40px",
        }}
      >
        <p>
          <strong>Version:</strong> 1.0.0
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {loading ? (
            <span style={{ color: "#eab308" }}>Loading...</span>
          ) : (
            <span style={{ color: "#16a34a" }}>Live</span>
          )}
        </p>

        <h2 style={{ marginTop: "30px", color: "#374151" }}>Fetched Data:</h2>
        {loading ? (
          <p>Fetching data from backend...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "10px",
                  background: "#eff6ff",
                  padding: "10px 15px",
                  borderRadius: "8px",
                }}
              >
                {item.msg}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

