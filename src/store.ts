import { create } from "zustand";

interface UserState {
  login: boolean;
  onLogin: () => void;
}
const useStore = create<UserState>((set) => ({
  login: false,
  onLogin: () => set({ login: true }),
}));
export default useStore;
