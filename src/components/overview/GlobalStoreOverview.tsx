"use client";

import { useSimpleStore } from "@/state/simpleStore";
import { useStoreWithInitializer } from "@/state/storeWithInitializer";

export const GlobalStoreOverview = () => {
  const simpleStoreCount = useSimpleStore().bears;
  const storeWithInitializerCount = useStoreWithInitializer().cats;

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid red",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>GlobalStoreOverview</h1>
      <div>SimpleStore: count={simpleStoreCount}</div>
      <div>StoreWithInitializer: count={storeWithInitializerCount}</div>
    </div>
  );
};
