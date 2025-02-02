import { create } from "zustand";

interface UserInfoState {
	email: string;
	password: string;
	nickname: string;
	major: string;
	studentNum: number;
	dormitory: string;
	gender: "MALE" | "FEMALE" | "";
	department: string;
	setDepartment: (newDepartment: string) => void;
	setEmail: (newEmail: string) => void;
	setPassword: (newPassword: string) => void;
	setNickname: (newNickname: string) => void;
	setMajor: (newMajor: string) => void;
	setStudentNum: (newStudentNum: number) => void;
	setDormitory: (newDormitory: string) => void;
	setGender: (newGender: "MALE" | "FEMALE") => void;
}

export const useUserInfo = create<UserInfoState>((set) => ({
	email: "",
	password: "",
	nickname: "",
	major: "",
	studentNum: 0,
	dormitory: "",
	gender: "",
	department: "",
	setDepartment: (newDepartment) => set(() => ({ department: newDepartment })),
	setEmail: (newEmail) => set(() => ({ email: newEmail })),
	setPassword: (newPassword) => set(() => ({ password: newPassword })),
	setNickname: (newNickname) => set(() => ({ nickname: newNickname })),
	setMajor: (newMajor) => set(() => ({ major: newMajor })),
	setStudentNum: (newStudentNum) => set(() => ({ studentNum: newStudentNum })),
	setDormitory: (newDormitory) => set(() => ({ dormitory: newDormitory })),
	setGender: (newGender) => set(() => ({ gender: newGender }))
}));
