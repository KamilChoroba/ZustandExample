"use client";

import {
  createStoreWithInitializer,
  StoreWithInitializerContext,
} from "@/state/storeWithInitializer";
import { FC, PropsWithChildren, useRef } from "react";

export const ParentWithStorageInitializers: FC<PropsWithChildren> = ({
  children,
}) => {
  const storeWithInitializer = useRef(
    createStoreWithInitializer({ cats: 1 })
  ).current;

  return (
    <StoreWithInitializerContext.Provider value={storeWithInitializer}>
      {children}
    </StoreWithInitializerContext.Provider>
  );
};
