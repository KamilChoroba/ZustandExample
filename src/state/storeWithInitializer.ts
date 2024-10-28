import { createContext, useContext } from "react";
import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type StoreWithInitializerProps = {
  cats: number;
};

type IncreaseCount = () => void;

type StoreWithInitializer = StoreWithInitializerProps & {
  increaseCats: IncreaseCount;
};

const defaultProps: StoreWithInitializerProps = {
  cats: 0,
};

export const createStoreWithInitializer = (
  initProps?: StoreWithInitializerProps
) =>
  createStore<StoreWithInitializer>()(
    subscribeWithSelector((set) => ({
      ...defaultProps,
      ...initProps,
      increaseCats: () => set((state) => ({ cats: state.cats + 1 })),
    }))
  );

type StoreWithInitializerState = ReturnType<typeof createStoreWithInitializer>;

export const StoreWithInitializerContext =
  createContext<StoreWithInitializerState | null>(null);

export const useStoreWithInitializer = () => {
  const store = useContext(StoreWithInitializerContext);
  if (!store)
    throw new Error("Missing StoreWithInitializerContext.Provider in the tree");
  return useStore(store);
};
