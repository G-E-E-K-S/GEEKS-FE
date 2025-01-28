import React, { useState } from "react";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import fillSave from "../../assets/img/MyPage/fillSave.svg";
import save from "../../assets/img/MyPage/save.svg";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import Row from "../Common/Layouts/Row";
import Typography from "../Common/Layouts/Typography";
import Column from "../Common/Layouts/Column";

const TotalProfile = styled.div<{ activeCheck: boolean }>`
	width: 100%;
	border-radius: 12px;
	background: ${({ activeCheck }) => (activeCheck ? "#FFFBEE" : "#fff")};
	border: 1px solid ${({ activeCheck }) => (activeCheck ? "#ECAA00" : "#EFEFEF")};
	padding: 14px 5.12vw;
	margin-bottom: 16px;
	overflow-x: auto;
`;
const UserProfile = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-right: 14px;
`;
const NickName = styled.div`
	margin-bottom: 4px;
	color: #333;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 18px; /* 128.571% */
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Smoking = styled(Column)`
	width: 53px;
	height: 24px;
	border-radius: 6px;
	background: #efefef;
	padding: 4px, 8px, 4px, 8px;
	margin-left: 8px;
	margin-bottom: 2px;
`;
const Intro = styled.div`
	color: #333;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
	border-radius: 8px;
	background: #f7f7f7;
	padding: 8px 3.07vw;
	width: 100%;
`;
const SaveImg = styled.img`
	height: 24px;
	width: 24px;
	cursor: pointer;
`;
export default function OtherProfile({ activeCheck, nickName, isSmoke, major, score, ID, intro, onClick }: any) {
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
		<TotalProfile activeCheck={activeCheck} onClick={onClick}>
			<Row horizonAlign="distribute">
				<Row>
					{/* <UserProfile src={props.userprofile.length == 0 ? BasicProfile : process.env.REACT_APP_BUCKET_BASEURL + props.userprofile} /> */}
					<Column gap={6}>
						<Row horizonAlign="center" verticalAlign="center">
							<Typography color="Gray800" typoSize="T3_semibold">
								{nickName}
							</Typography>
							{isSmoke && (
								<Smoking horizonAlign="center" verticalAlign="center">
									<Typography typoSize="B3_medium" color="Gray700">
										{"흡연자"}
									</Typography>
								</Smoking>
							)}
						</Row>
						<Typography typoSize="B2_medium" color="Gray600">
							{major} · {ID}학번
						</Typography>
					</Column>
				</Row>
				<Row horizonAlign="center" verticalAlign="center">
					<Typography
						typoSize="H3"
						color={score >= "70" ? "Blue600" : score >= "40" ? "Yellow700" : "YellowGray600"}
					>
						{score}
					</Typography>
					<Typography
						style={{ marginLeft: "2px" }}
						typoSize="B1_semibold"
						color={score >= "70" ? "Blue600" : score >= "40" ? "Yellow700" : "YellowGray600"}
					>
						{"점"}
					</Typography>
				</Row>
			</Row>
			{intro.length && (
				<Column horizonAlign="distribute" verticalAlign="center" style={{ marginTop: "12px" }}>
					<Intro>{intro}</Intro>
					{/* <SaveImg src={fill? fillSave : save} onClick={(e)=>handleFill(e,props.nickName)}/> */}
				</Column>
			)}
		</TotalProfile>
	);
}
