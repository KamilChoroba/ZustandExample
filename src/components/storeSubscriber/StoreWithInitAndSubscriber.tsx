"use client";

import { StoreWithInitializerContext } from "@/state/storeWithInitializer";
import { useContext, useEffect, useState } from "react";

export const InitStoreSubscriber = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [componentUpdatedAt, setComponentUpdatedAt] = useState(new Date());

  const store = useContext(StoreWithInitializerContext);
  if (!store)
    throw new Error("Missing StoreWithInitializerContext.Provider in the tree");

  useEffect(() => {
    const unsubscribe = store.subscribe(
      (state) => state.cats,
      () => {
        console.log("change detected");
        setIsFetching(true);
        setTimeout(() => {
          setComponentUpdatedAt(new Date());
          setIsFetching(false);
        }, 5000);
      }
    );
    return () => unsubscribe();
  }, [store]);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid yellow",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Listen to cat changes</h1>
      <h2>
        {isFetching ? (
          <div>
            <p>Amount of cats increased.</p>
            <p>Running component update</p>
          </div>
        ) : (
          <div>
            Last cat increase: {componentUpdatedAt.toLocaleTimeString()}
          </div>
        )}
      </h2>
    </div>
  );
};
