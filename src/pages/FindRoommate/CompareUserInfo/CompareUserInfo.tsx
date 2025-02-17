import { useState, useEffect, useMemo } from "react";
import API from "../../../axios/BaseUrl";
import { useParams, useNavigate } from "react-router-dom";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import styled from "styled-components";
import * as S from "./style";
import * as SC from "../../../components/Common/CommonStyle";
import Br from "../../../components/Common/Br";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import LifeStyle from "../../../components/Roommate/LifeStyle";
import ApplyCancelBottomSheet from "../../../components/Common/ApplyCancleBottomSheet";
import BottomSheet from "../../../components/Common/BottomSheet";
import FinishRoommate from "../FinishRoommate";
import Popup from "../../../components/Common/Popup";
import BasicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import ChatImg from "../../../assets/img/Roommate/chat.svg";
import Info from "../../assets/img/Roommate/info.svg";
import Save from "../../../assets/img/MyPage/save.svg";
import FillSave from "../../../assets/img/MyPage/Menu/fillSave.svg";
import Dots from "../../assets/img/Community/dots.svg";
import ApplyRoommateIcon from "../../../assets/img/Roommate/applyRoommate.svg";
import Loading from "../../Loading";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import { useQuery } from "@tanstack/react-query";
import { UserProfileType } from "../../../types/userProfileType";
import Column from "../../../components/Common/Layouts/Column";
import CompareLifeStyle from "../../../components/Roommate/CompareLifeStyle/CompareLifeStyle";

interface RoommateApplyType {
	roommateStatus: "NONE" | "PENDING" | "ACCEPT";
}
export default function CompareUserInfo() {
	const { matchingId, opponentId } = useParams();

	const [isSave, setIsSave] = useState(false);
	const [applyRoommate, setApplyRommate] = useState(false);
	const [roommateState, setRoommateState] = useState<RoommateApplyType["roommateStatus"]>();
	const [acceptRoommate, setAcceptRoommate] = useState(false);
	const [roommateApplyState, setRoommateApplyState] = useState();
	const [showPopup, setShowPopup] = useState(false);
	const [opponentUser, setOpponentUser] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const lifeStyleList = [
		{ name: "흡연", key: "smoke", SMOKER: "흡연자", NONSMOKER: "비흡연자" },
		{ name: "잠버릇", key: "habit", HABIT: "잠버릇 있어요", NONHABIT: "잠버릇 없어요" },
		{ name: "잠귀", key: "ear", BRIGHT: "귀 밝아요", DARK: "귀 어두워요" },
		{ name: "활동시간", key: "activityTime", MORNING: "일찍 자요", DAWN: "늦게 자요" },
		{ name: "외출", key: "outing", INSIDE: "집순이에요", OUTSIDE: "밖순이에요" },
		{
			name: "청소",
			key: "cleaning",
			CLEAN: "주기적으로 청소해요",
			DIRTY: "더러워지면 청소해요"
		},
		{
			name: "성향",
			key: "tendency",
			ALONE: "혼자 조용히 지내요",
			TOGETHER: "함께 놀고 싶어요"
		}
	];
	const [opponentInfo, setOpponentInfo] = useState<UserProfileType>();
	const [opponentLifeStyle, setOpponentLifeStyle] = useState<UserProfileType>();
	const [myListStyle, setMyLifeStyle] = useState<UserProfileType>();
	const navigate = useNavigate();

	const { data, isLoading } = useQuery({
		queryKey: ["opponent", opponentId],
		queryFn: async () => {
			const response = await API.get(`/api/v1/matching/detail/${matchingId}/${opponentId}`);
			return response.data.data;
		}
	});

	useMemo(() => {
		if (!data) return;
		setOpponentInfo(data.opponent);
		setOpponentLifeStyle(data.opponentDetail);
		setRoommateState(data.roommateStatus);
		setMyLifeStyle(data.myDetail);
	}, [data]);

	const { refetch: applyRoommateFetch } = useQuery({
		queryKey: ["applyRoommate"],
		queryFn: async () => {
			const res = await API.post(`/api/v1/roommate/send/${matchingId}/${opponentId}`);
			return res.data;
		},
		enabled: false
	});

	const ApplyRoommate = () => {
		applyRoommateFetch().then((res) => {
			res.data.data === "success" && navigate("/roommatesendtext", { state: opponentInfo?.nickname });
		});
	};
	// const startChat = () => {
	// 	async function fetchChatRoom() {
	// 		try {
	// 			const res = await API.get("/chat/room?yournickname=" + opponentUser.nickname);
	// 			navigate(`/chat/chatroom/${res.data}`);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}
	// 	fetchChatRoom();
	// };

	// const startChatForFinish = () => {
	// 	async function fetchChatRoom() {
	// 		try {
	// 			const res = await API.get("/chat/room?yournickname=" + opponentUser.nickname);
	// 			navigate(`/chat/chatroom/${res.data}`, {
	// 				state: {
	// 					status: "deleteRommate"
	// 				}
	// 			});
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}
	// 	fetchChatRoom();
	// };

	const { data: saveRoommateData, refetch: refetchSaveRooommate } = useQuery({
		queryKey: ["saveRoommate", opponentId],
		queryFn: async () => {
			const response = await API.post(`/api/v1/roommate/bookmark/${matchingId}/${opponentId}`);
			return response.data.data;
		},
		enabled: false
	});

	const { refetch: refetchCancelSaveRoommate } = useQuery({
		queryKey: ["cancelSaveRoommate", opponentId],
		queryFn: async () => {
			const response = await API.delete(`/api/v1/roommate/bookmark/cancel`, {
				// bookmarkID나오면 수정하기
				data: { bookmarkIds: [4] }
			});
			return response.data.data;
		},
		enabled: false
	});

	const saveRoommate = () => {
		setIsSave(!isSave);
		if (isSave) {
			refetchCancelSaveRoommate();
		} else {
			setShowPopup(true);
			refetchSaveRooommate();
		}
	};

	const { refetch: refetchCancelRoommate } = useQuery({
		queryKey: ["cancelSaveRoommate", opponentId],
		queryFn: async () => {
			const response = await API.delete(`/api/v1/roommate/sever`);
			return response.data.data;
		},
		enabled: false
	});

	const handleRemoveRoommate = () => {
		refetchCancelRoommate().then((val) => val.status === "success" && navigate("/roommate"));
	};
	const [cancelRoommate, setCancelRoommate] = useState(false);

	if (!opponentInfo) return;

	return isLoading ? (
		<Loading />
	) : (
		<SC.Totalframe>
			<SC.ScreenComponent>
				{/* header */}
				<SC.Header backgroundColor="White">
					<HeaderMenu />
				</SC.Header>
				{roommateState === "ACCEPT" && (
					<S.MyRoommateNoti>
						<S.MyRoommateNotiTxt>{`현재 나의 룸메이트에요`}</S.MyRoommateNotiTxt>
						<S.EndRoommate onClick={() => setCancelRoommate(true)}>{`룸메이트 끊기`}</S.EndRoommate>
					</S.MyRoommateNoti>
				)}
				{cancelRoommate && (
					<FinishRoommate
						opponenNickname={opponentInfo.nickname}
						onClick={() => handleRemoveRoommate()}
						description={true}
						choiceMent={"네, 그만둘래요"}
						noOnClick={() => setCancelRoommate(false)}
						ment={opponentInfo.nickname + ` 님과\n룸메이트를 그만둘까요?`}
					/>
				)}
				{roommateState === "PENDING" && (
					<S.MyRoommateNoti>
						<S.MyRoommateNotiTxt>{`현재d 나의 룸메이트에요`}</S.MyRoommateNotiTxt>
						<S.EndRoommate onClick={() => handleRemoveRoommate()}>{`룸메이트 끊기`}</S.EndRoommate>
					</S.MyRoommateNoti>
				)}
				{/* user Profile */}
				<Column gap={16}>
					<Row horizonAlign="distribute" width="w-full">
						<S.UserProfileImage
							src={
								opponentInfo?.image
									? process.env.REACT_APP_BUCKET_BASEURL + opponentInfo.image
									: BasicProfile
							}
						/>
						<S.Chat gap={8}>
							{/* onClick={() => startChat()} */}
							<img src={ChatImg} />
							<Typography typoSize="T4_semibold" color="Gray700" style={{ whiteSpace: "nowrap" }}>
								{"대화하기"}
							</Typography>
						</S.Chat>
					</Row>
					<div>
						<Row>
							<Typography typoSize="T2_bold" color="Gray800">
								{opponentInfo?.nickname}
							</Typography>
							{opponentInfo?.smoke === "SMOKER" && <S.Smoke>{`흡연자`}</S.Smoke>}
						</Row>
						<Typography typoSize="T4_medium" color="Gray600">
							{opponentInfo?.major} · {opponentInfo?.studentNum}
						</Typography>
					</div>
					{opponentInfo?.introduction && (
						<S.Introduce>
							<Typography typoSize="B2_medium" color="Gray700">
								{opponentInfo?.introduction}
							</Typography>
						</S.Introduce>
					)}
				</Column>
				<Br style={{ marginTop: "20px" }} />

				{/* match score */}
				<S.MatchText horizonAlign="center" verticalAlign="center">
					<div>{opponentInfo.point >= 40 && opponentInfo.point <= 60 ? "서로" : "나와"}</div>
					<Typography
						typoSize="H2"
						color={
							opponentInfo.point >= 70
								? "Blue600"
								: opponentInfo?.point >= 40 && opponentInfo?.point <= 60
								? "Yellow700"
								: "YellowGray600"
						}
						style={{ marginLeft: "7px" }}
					>
						{opponentInfo.point >= 70
							? "잘 맞아요!"
							: opponentInfo?.point >= 40 && opponentInfo?.point <= 60
							? "맞춰가면 좋아요!"
							: "잘 맞지 않아요"}
					</Typography>
				</S.MatchText>
				<div style={{ width: "140px", height: "140px", margin: "0 auto" }}>
					<Chart
						type="doughnut"
						data={{
							datasets: [
								{
									data: [opponentInfo?.point ?? 0, 100 - (opponentInfo?.point ?? 0)],
									borderColor: [
										opponentInfo?.point >= 70
											? "#2B75CB"
											: opponentInfo?.point >= 40
											? "#FFD540"
											: "#B5AA99",
										"#EFEFEF"
									],
									backgroundColor: [
										opponentInfo?.point >= 70
											? "#2B75CB"
											: opponentInfo?.point >= 40
											? "#FFD540"
											: "#B5AA99",
										"#EFEFEF"
									],
									borderWidth: 0
								}
							]
						}}
						options={{
							responsive: true,
							cutout: "80%",
							plugins: {
								legend: {
									display: false
								},
								tooltip: {
									enabled: false
								}
							}
						}}
						plugins={[
							{
								id: "textCenter",
								afterDatasetsDraw(chart) {
									const { ctx } = chart;
									const datasetMeta = chart.getDatasetMeta(0);

									if (!datasetMeta || datasetMeta.data.length === 0) return;

									const { x, y } = datasetMeta.data[0];

									ctx.save();
									ctx.font = "700 1.75rem Pretendard";
									ctx.fillStyle =
										opponentInfo.point >= 70
											? "#2B75CB"
											: opponentInfo.point >= 40
											? "#D68D00"
											: "#B5AA99";
									ctx.textAlign = "center";
									ctx.textBaseline = "middle";
									ctx.fillText(`${opponentInfo.point}점`, x, y);
									ctx.restore();
								}
							}
						]}
					/>
				</div>

				{/* Compare Section */}
				<Row style={{ marginTop: "56.75px" }}>
					<Typography
						typoSize="T4_semibold"
						color="Gray600"
						style={{ marginLeft: "28.46vw", marginRight: "32.45vw" }}
					>
						{"상대방"}
					</Typography>
					<Typography typoSize="T4_semibold" color="Gray600">
						{"나"}
					</Typography>
				</Row>
				{lifeStyleList?.map((list) => (
					<CompareLifeStyle
						lifeStyle={list.name}
						isSame={opponentLifeStyle?.[list.key] === myListStyle?.[list.key]}
						opponentLifeStyle={
							lifeStyleList.find((item) => item.key === list.key)?.[opponentLifeStyle?.[list.key]]
						}
						myLifeStyle={lifeStyleList.find((item) => item.key === list.key)?.[myListStyle?.[list.key]]}
					/>
				))}
				<S.BottomEnroll horizonAlign="distribute" verticalAlign="center">
					<Column horizonAlign="center" verticalAlign="center">
						<img
							src={isSave ? FillSave : Save}
							style={{ width: "28px", height: "28px" }}
							onClick={() => saveRoommate()}
						/>
						<Typography typoSize="B2_medium" color="Gray500">
							{"저장"}
						</Typography>
					</Column>
					<S.EnrollBtn
						horizonAlign="center"
						verticalAlign="center"
						state={roommateApplyState || roommateState !== "NONE" || acceptRoommate}
						onClick={() => setApplyRommate(true)}
					>
						<Typography
							typoSize="T3_semibold"
							color={
								roommateApplyState || roommateState !== "NONE" || acceptRoommate ? "Gray400" : "Black"
							}
						>
							{"룸메이트 신청하기"}
						</Typography>
					</S.EnrollBtn>
				</S.BottomEnroll>
			</SC.ScreenComponent>

			{/* TODO 해당 컴포넌트 tsx로 변경 */}
			<ApplyCancelBottomSheet
				height={`393px`}
				padding={`24px 20px 85px 20px`}
				Icon={ApplyRoommateIcon}
				message={opponentInfo.nickname + `님께\n룸메이트를 신청할까요?`}
				subMessage={`상대방이 수락하기 전까지는\n언제든지 취소 가능해요`}
				btnName={`신청하기`}
				isOpen={applyRoommate && !roommateApplyState && !roommateState}
				onClick={() => ApplyRoommate()}
				applyRoommate={() => setApplyRommate(false)}
			/>
			<Popup
				bottom={`13.95`}
				isShowPopup={showPopup}
				setShowPopup={setShowPopup}
				message={`룸메이트가 저장되었어요!`}
			/>
		</SC.Totalframe>
	);
}
