"use client";

import { useState } from "react";

export const State = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid blue",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <div>{isEnabled ? "true" : "false"}</div>
      <button onClick={() => setIsEnabled(!isEnabled)}>toggleEnable</button>
    </div>
  );
};
