import React, { useState } from "react";
import API from "../../../axios/BaseUrl";
import * as S from "./style";
import fillSave from "../../../assets/img/MyPage/fillSave.svg";
import save from "../../../assets/img/MyPage/save.svg";
import BasicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import Column from "../../Common/Layouts/Column";
import Row from "../../Common/Layouts/Row";
import Typography from "../../Common/Layouts/Typography";

interface UserProfileProps {
	activeCheck?: boolean;
	nickName: string;
	smoke: "NONSMOKER" | "SMOKER";
	major: string;
	score?: number;
	ID: number;
	intro?: string;
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
	onClick
}: UserProfileProps) {
	const [fill, isFill] = useState(false);

	const handleFill = (e, yournickname) => {
		isFill(!fill);
		e.stopPropagation();
		async function fetchSaveUser() {
			try {
				const res = await API.get("/roommate/save?yournickname=" + yournickname);
			} catch (e) {
				console.log(e);
			}
		}
		fetchSaveUser();
	};
	return (
		<S.TotalProfile activeCheck={activeCheck} onClick={onClick}>
			<Row horizonAlign="distribute">
				<Row>
					{/* <UserProfile src={props.userprofile.length == 0 ? BasicProfile : process.env.REACT_APP_BUCKET_BASEURL + props.userprofile} /> */}
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
