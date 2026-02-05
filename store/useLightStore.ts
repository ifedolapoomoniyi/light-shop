import { create } from "zustand";

interface LightStore {
	isMasterOn: boolean;
	toggleMaster: () => void;
}

export const useLightStore = create<LightStore>((set) => ({
	isMasterOn: false,
	toggleMaster: () => set((state) => ({ isMasterOn: !state.isMasterOn })),
}));
