import { create } from "zustand";

interface LightStore {
	isMasterOn: boolean;
	toggleMaster: () => void
	isLampOn: boolean;
	toggleLamp: () => void
}

export const useLightStore = create<LightStore>((set) => ({
	isMasterOn: false,
	toggleMaster: () => set((state) => ({ isMasterOn: !state.isMasterOn })),
	isLampOn: false,
	toggleLamp: () => set((state) => ({ isLampOn: !state.isLampOn })),
}));
