import { create } from "zustand";

interface UserNickNameState {
	userNickName: string;
	setUserNickName: (newNickName: string) => void;
}

export const useUserNickName = create<UserNickNameState>((set) => ({
	userNickName: "",
	setUserNickName: (newNickName) => set(() => ({ userNickName: newNickName }))
}));
