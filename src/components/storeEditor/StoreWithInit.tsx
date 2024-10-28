"use client";

import { useStoreWithInitializer } from "@/state/storeWithInitializer";

export const StoreWithInit = () => {
  const { cats } = useStoreWithInitializer();
  const increaseCats = useStoreWithInitializer().increaseCats;

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid orange",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>StoreWithInitializer</h1>
      <h2>Cats: {cats}</h2>
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
        onClick={increaseCats}
      >
        Increase cats
      </button>
    </div>
  );
};
