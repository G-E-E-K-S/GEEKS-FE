export type UserProfileType = {
	introduction?: string;
	major: string;
	matchingId?: number;
	nickname: string;
	opponentId?: number;
	point?: number;
	smoke: "NONSMOKER" | "SMOKER";
	studentNum: number;
	image: string | null;
};
