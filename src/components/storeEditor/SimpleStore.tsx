"use client";

import { useSimpleStore } from "@/state/simpleStore";

export const SimpleStore = () => {
  const bears = useSimpleStore().bears;
  const increaseBears = useSimpleStore().increaseBeaers;

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
      <h1 style={{ fontWeight: "bold" }}>SimpleStore</h1>
      <h2>Bears: {bears}</h2>
      <button
        style={{
          width: "150px",
          height: "30px",
          display: "flex",
          border: "1px solid black",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "darkgrey",
        }}
        onClick={increaseBears}
      >
        Increase bears
      </button>
    </div>
  );
};
