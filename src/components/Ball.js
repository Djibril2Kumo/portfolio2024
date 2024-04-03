import React from "react";

export default function Ball({ techno }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="ball">
        <img src={techno.icon} alt="icon" />
      </div>
      <p style={{ color: "black" }}>{techno.name}</p>
    </div>
  );
}
