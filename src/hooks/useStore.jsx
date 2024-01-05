import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  user: {},
  setUser: (e) => set({ user: e }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
