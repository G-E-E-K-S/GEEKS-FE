import React, { useState } from "react";
import API from "../../../axios/BaseUrl";
import * as S from "./style";
import fillSave from "../../../assets/img/MyPage/fillSave.svg";
import save from "../../../assets/img/MyPage/save.svg";
import BasicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import Column from "../../Common/Layouts/Column";
import Row from "../../Common/Layouts/Row";
import Typography from "../../Common/Layouts/Typography";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
	activeCheck?: boolean;
	nickName: string;
	smoke: "NONSMOKER" | "SMOKER";
	major: string;
	score?: number;
	ID: number;
	intro?: string;
	isMe?: boolean;
	image: string | null;
	hasPadding?: boolean;
	hasBackground?: boolean;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export default function UserProfile({
	activeCheck,
	nickName,
	smoke,
	major,
	score,
	ID,
	intro,
	isMe,
	hasBackground = false,
	hasPadding = false,
	image,
	onClick
}: UserProfileProps) {
	const [fill, isFill] = useState(false);
	const navigate = useNavigate();
	// const handleFill = (e, yournickname) => {
	// 	isFill(!fill);
	// 	e.stopPropagation();
	// 	async function fetchSaveUser() {
	// 		try {
	// 			const res = await API.get("/roommate/save?yournickname=" + yournickname);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}
	// 	fetchSaveUser();
	// };
	return (
		<S.TotalProfile
			activeCheck={activeCheck}
			onClick={onClick}
			isMe={isMe}
			hasPadding={hasPadding}
			hasBackground={hasBackground}
		>
			<Row horizonAlign="distribute">
				<Row gap={14}>
					<S.UserProfile src={image ? process.env.REACT_APP_BUCKET_BASEURL + image : BasicProfile} />
					<Column gap={6}>
						<Row horizonAlign="center" verticalAlign="center">
							<Typography color="Gray800" typoSize="T3_semibold">
								{nickName}
							</Typography>
							{smoke === "SMOKER" && (
								<S.Smoking horizonAlign="center" verticalAlign="center">
									<Typography typoSize="B3_medium" color="Gray700">
										{"흡연자"}
									</Typography>
								</S.Smoking>
							)}
						</Row>
						<Typography typoSize="B2_medium" color="Gray600">
							{major} · {ID}학번
						</Typography>
					</Column>
				</Row>
				{score && (
					<Row horizonAlign="center" verticalAlign="center">
						<Typography
							typoSize="H3"
							color={score >= 70 ? "Blue600" : score >= 40 ? "Yellow700" : "YellowGray600"}
						>
							{score}
						</Typography>
						<Typography
							style={{ marginLeft: "2px" }}
							typoSize="B1_semibold"
							color={score >= 70 ? "Blue600" : score >= 40 ? "Yellow700" : "YellowGray600"}
						>
							{"점"}
						</Typography>
					</Row>
				)}
				{isMe && (
					<S.Edit onClick={() => navigate("/editprofile")}>
						<Typography typoSize="T4_semibold" color="Gray700">
							{"내 프로필"}
						</Typography>
					</S.Edit>
				)}
			</Row>
			{intro && (
				<Column horizonAlign="distribute" verticalAlign="center" style={{ marginTop: "12px" }}>
					<S.Intro>{intro}</S.Intro>
					{/* <SaveImg src={fill? fillSave : save} onClick={(e)=>handleFill(e,props.nickName)}/> */}
				</Column>
			)}
		</S.TotalProfile>
	);
}
