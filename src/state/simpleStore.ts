import { create } from "zustand";

type SimpleStore = {
  bears: number;
  increaseBeaers: () => void;
  removeAllBears: () => void;
};

export const useSimpleStore = create<SimpleStore>((set) => ({
  bears: 0,
  increaseBeaers: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
