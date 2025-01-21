import { create } from "zustand";

type genderType = "girl" | "boy" | "";
interface UserNickNameState {
	gender: genderType;
	setUseGender: (gender: genderType) => void;
}

export const useGender = create<UserNickNameState>((set) => ({
	gender: "",
	setUseGender: (gender) => set(() => ({ gender }))
}));
