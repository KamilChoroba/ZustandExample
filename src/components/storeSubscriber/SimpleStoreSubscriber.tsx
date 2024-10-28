"use client";

import { useSimpleStore } from "@/state/simpleStore";
import { useEffect, useState } from "react";

export const SimpleStoreSubscriber = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [componentUpdatedAt, setComponentUpdatedAt] = useState(new Date());

  useEffect(() => {
    useSimpleStore.subscribe(() => {
      setIsFetching(true);
      setTimeout(() => {
        setComponentUpdatedAt(new Date());
        setIsFetching(false);
      }, 5000);
    });
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid pink",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Listen to bear changes</h1>
      <h2>
        {isFetching ? (
          <div>
            <p>Amount of bears increased.</p>
            <p>Running component update</p>
          </div>
        ) : (
          <div>
            Last bear increase: {componentUpdatedAt.toLocaleTimeString("de-DE")}
          </div>
        )}
      </h2>
    </div>
  );
};
