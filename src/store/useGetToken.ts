import { create } from "zustand";

interface TokenState {
	token: string | null;
	setToken: (newToken: string) => void;
	resetToken: () => void;
}

export const useGetToken = create<TokenState>((set) => ({
	token: null,
	setToken: (newToken) => set({ token: newToken }),
	resetToken: () => set({ token: null })
}));
