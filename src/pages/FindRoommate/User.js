import React, { useState, useEffect } from "react";
import API from "../../axios/BaseUrl";
import { useParams, useNavigate } from "react-router-dom";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Br from "../../components/Common/Br";
import HeaderMenu from "../../components/Common/HeaderMenu";
import LifeStyle from "../../components/Roommate/LifeStyle";
import ApplyCancelBottomSheet from "../../components/Common/ApplyCancleBottomSheet";
import BottomSheet from "../../components/Common/BottomSheet";
import FinishRoommate from "./FinishRoommate";
import Popup from "../../components/Common/Popup";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import ChatImg from "../../assets/img/Roommate/chat.svg";
import Info from "../../assets/img/Roommate/info.svg";
import Save from "../../assets/img/MyPage/save.svg";
// import FillSave from "../../assets/img/MyPage/fillSave.svg";
import Dots from "../../assets/img/Community/dots.svg";
import ApplyRoommateIcon from "../../assets/img/Roommate/applyRoommate.svg";
import Loading from "../Loading";

const MenuBox = styled.div`
	padding: 20px 0;
	color: ${(props) => (props.Report ? "#CB3D0B" : "#525252")};
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;
const CloseBtn = styled.div`
	padding: 16px 0;
	border-radius: 12px;
	border: 1px solid #e2e2e2;
	background: #fff;
	text-align: center;
	color: #333;
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 24px;
	margin-top: 20px;
	margin-bottom: 94px;
`;
const MyRoommateNoti = styled.div`
	background-color: #fff4cd;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	padding: 12px 8px;
	color: #865800;
	text-align: center;
`;
const MyRoommateNotiTxt = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
	margin-bottom: 2px;
`;
const EndRoommate = styled(MyRoommateNotiTxt)`
	border-bottom: 1px solid #865800;
	width: max-content;
	margin: 0 auto;
`;
const TopProfile = styled.div`
	margin-top: 20px;
`;
const Profile = styled.img`
	width: 72px;
	height: 72px;
`;
const NickName = styled.div`
	color: #1a1a1a;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 28px;
	margin-top: 10px;
	margin-bottom: 2px;
`;
const Major = styled.div`
	color: #707070;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	margin-top: 10px;
	margin-bottom: 4px;
`;
const Chat = styled.div`
	display: flex;
	width: 120px;
	height: 52px;
	padding: 14px 16px;
	border-radius: 12px;
	border: 1px solid #e2e2e2;
	background: #fff;
	&:active {
		background: #f7f7f7;
	}
`;
const ChatImage = styled.img`
	width: 24px;
	height: 24px;
`;
const ChatText = styled.div`
	color: #333;
	text-align: center;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	margin-left: 2.05vw;
	white-space: nowrap;
`;
const UserMessageBox = styled.div`
	position: relative;
	width: 100%;
	height: max-content;
	border-radius: 12px;
	background: #faf6f1;
	padding: 14px;
	margin-top: 10px;
	margin-bottom: 2.84vh;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 12px;
		border: 23px solid transparent;
		border-bottom-color: #faf6f1;
		border-top: 0;
		margin-top: -10px;
	}
`;
const InfoImg = styled.img`
	width: 16px;
	height: 16px;
	margin-top: 2px;
`;
const InfoMessage = styled.div`
	margin-left: 1.53vw;
	color: #665d4f;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
`;
const MatchText = styled.div`
	margin-top: 4.72vh;
	margin-bottom: 3.31vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #525252;
	text-align: center;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
`;
const MatchColorText = styled.div`
	color: ${(props) =>
		props.isFit >= 70 ? "#2B75CB" : props.isFit <= 60 && props.isFit >= 40 ? "#D68D00" : "#7B7161"};
	text-align: center;
	margin-left: 7px;
`;
const BottomEnroll = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 20.17px;
	padding-right: 5.12vw;
	padding-left: 5.12vw;
	padding-bottom: calc(11.84vh - 56px - 20.17px + 12px);
	border-top: 1px solid #efefef;
	position: fixed;
	bottom: 0px;
	width: 100%;
	background-color: #fff;
`;
const SaveImg = styled.img`
	margin-top: 4px;
	width: 28px;
	height: 28px;
`;
const SaveTxt = styled.div`
	color: #b7b7b7;
	text-align: center;
	font-size: 12px;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 0.5px;
`;
const EnrollBtn = styled.div`
	width: 57.42vw;
	height: 56px;
	padding: 18px 12.17vw;
	border-radius: 12px;
	background: ${(props) => (props.state == true ? "#F7F7F7" : "#ffc700")};
	position: relative;
	z-index: 20;
	&:active {
		background: ${(props) => props.state !== true && "#ECAA00"};
	}
`;
const EnrollTxt = styled.div`
	color: ${(props) => (props.state == true ? "#B7B7B7" : "#333")};
	text-align: center;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
	white-space: nowrap;
	cursor: pointer;
`;
const MatchBox = styled.div`
	width: 100%;
	border-radius: 16px;
	background: #fafafa;
	height: max-content;
	padding: 2.36vh 5.12vw;
`;
const CharContainer = styled.div`
	width: 140px;
	height: 140px;
	margin: 0 auto;
`;
const OtherAndMeTxt = styled.div`
	display: flex;
	width: 100%;
	color: #707070;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	margin-top: 56.75px;
`;
const Other = styled.div`
	margin-left: 28.46vw;
	margin-right: 32.45vw;
`;
const Me = styled.div``;
const Smoke = styled.div`
	width: 53px;
	height: 24px;
	border-radius: 6px;
	background: #efefef;
	padding: 4px 8px 4px 8px;
	color: #707070;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
	margin-left: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 13px;
`;

const User = () => {
	const [isSave, setIsSave] = useState(false);
	const [applyRoommate, setApplyRommate] = useState(false);
	const [roommateState, setRoommateState] = useState(false);
	const [acceptRoommate, setAcceptRoommate] = useState(false);
	const [roommateApplyState, setRoommateApplyState] = useState(false);
	const [opponentUser, setOpponentUser] = useState(null);
	const [isBtsOpen, setIsBtsOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [lifeStyles, setLifeStyles] = useState([]);
	const [lifeStyleList, setLifeStyleList] = useState([
		{ name: "흡연", key: "smoking", true: "흡연자", false: "비흡연자" },
		{ name: "잠버릇", key: "habit", true: "잠버릇 있어요", false: "잠버릇 없어요" },
		{ name: "잠귀", key: "ear", BRIGHT: "귀 밝아요", DARK: "귀 어두워요" },
		{ name: "취침", key: "sleep", EARLY: "일찍 자요", LATE: "늦게 자요", RANDOM: "때마다 달라요" },
		{ name: "기상", key: "wakeup", EARLY: "일찍 일어나요", LATE: "늦게 일어나요", RANDOM: "때마다 달라요" },
		{ name: "외출", key: "out", HOME: "집순이에요", OUT: "밖순이에요", PROMISE: "약속이 있으면 나가요" },
		{
			name: "청소",
			key: "cleaning",
			CLEAN: "주기적으로 청소해요",
			DIRTY: "더러워지면 청소해요",
			OPPONENT: "상대에게 맞춰요"
		},
		{
			name: "성향",
			key: "tendency",
			ALONE: "혼자 조용히 지내요",
			TOGETHER: "함께 놀고 싶어요",
			OPPONENT: "상대에게 맞춰요"
		}
	]);

	const [textCenter, setTextCenter] = useState(null);
	const [data, setData] = useState(null);
	const [finishState, setFinishState] = useState(false);
	const [loading, setLoading] = useState(true);
	const [showPopup, setShowPopup] = useState(false);
	let { userId } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const res = await API.get("/detail/details?id=" + userId);
				setOpponentUser(res.data);
				setIsSave(res.data.details[0].saved);
				setLifeStyles(res.data.details);
				setRoommateState(res.data.roommateState);
				setAcceptRoommate(res.data.acceptRoommate);
				setRoommateApplyState(res.data.roommateApply);
				console.log(res.data.details);
				setLoading(false);
				setData({
					datasets: [
						{
							data: [res.data.point, 100 - res.data.point],
							borderColor: [
								res.data.point >= 70
									? "#2B75CB"
									: res.data.point <= 60 && res.data.point >= 40
									? "#FFD540"
									: "#B5AA99",
								"#EFEFEF"
							],
							backgroundColor: [
								res.data.point >= 70
									? "#2B75CB"
									: res.data.point <= 60 && res.data.point >= 40
									? "#FFD540"
									: "#B5AA99",
								"#EFEFEF"
							],
							cutout: "80%",
							borderWidth: 0,
							options: {
								responsive: false,
								plugins: {
									legend: {
										display: false,
										tooltip: {
											enabled: false
										}
									}
								},
								hover: { mode: null }
							}
						}
					]
				});
				setTextCenter({
					id: "textCenter",
					afterDatasetsDraw(chart) {
						const { ctx } = chart;

						ctx.save();
						ctx.font = "700 1.75rem Pretendard";
						ctx.fontWeight = "700";
						ctx.fillStyle =
							res.data.point >= 70
								? "#2B75CB"
								: res.data.point <= 60 && res.data.point >= 40
								? "#D68D00"
								: "#B5AA99";
						ctx.textAlign = "center";
						ctx.textBaseline = "middle";
						ctx.fillText(
							res.data.point + "점",
							chart.getDatasetMeta(0).data[0].x,
							chart.getDatasetMeta(0).data[0].y
						);
					}
				});
			} catch (e) {
				console.log(e);
			}
		}
		fetchUserData();
	}, []);

	const startChat = () => {
		async function fetchChatRoom() {
			try {
				const res = await API.get("/chat/room?yournickname=" + opponentUser.nickname);
				navigate(`/chat/chatroom/${res.data}`);
			} catch (e) {
				console.log(e);
			}
		}
		fetchChatRoom();
	};

	const startChatForFinish = () => {
		async function fetchChatRoom() {
			try {
				const res = await API.get("/chat/room?yournickname=" + opponentUser.nickname);
				navigate(`/chat/chatroom/${res.data}`, {
					state: {
						status: "deleteRommate"
					}
				});
			} catch (e) {
				console.log(e);
			}
		}
		fetchChatRoom();
	};

	const saveOther = () => {
		setIsSave(!isSave);
		async function fetchSave() {
			try {
				const res = await API.get("/roommate/save?yourNickname=" + opponentUser.nickname);
				console.log(res);
			} catch (e) {
				console.log(e);
			}
		}
		fetchSave();
	};

	const ApplyRoommate = () => {
		if (roommateApplyState || roommateState) {
			return;
		}

		async function fetchApplyRoommate() {
			try {
				const res = await API.get("/roommate/request?yourNickname=" + opponentUser.nickname);
				console.log(res);
				setApplyRommate(false);
				if (res.status === 200) {
					navigate("/roommatesendtxt", {
						state: {
							OpponentUser: opponentUser?.nickname,
							userId: userId
						},
						replace: true
					});
				}
			} catch (e) {
				console.log(e);
			}
		}

		fetchApplyRoommate();
	};

	const handleDeclaration = () => {
		setShowPopup(true);
		setIsBtsOpen(false);
	};

	return loading ? (
		<Loading />
	) : (
		<c.Totalframe>
			<c.ScreenComponent navigation={true}>
				<c.SubScreen>
					<c.SpaceBetween>
						<HeaderMenu>
							<img src={Dots} onClick={() => setIsBtsOpen(true)} />
						</HeaderMenu>
					</c.SpaceBetween>
					<BottomSheet
						height={`max-content`}
						padding={`12px 20px 0 20px`}
						isOpen={isBtsOpen}
						interaction={true}
					>
						<MenuBox Report={true} onClick={() => handleDeclaration()}>{`신고하기`}</MenuBox>
						<CloseBtn onClick={() => setIsBtsOpen(false)}>{`닫기`}</CloseBtn>
					</BottomSheet>
					{finishState && (
						<FinishRoommate
							opponenNickname={opponentUser?.nickname}
							onClick={() => startChatForFinish()}
							description={true}
							choiceMent={"네, 그만둘래요"}
							noOnClick={() => setFinishState(false)}
							ment={opponentUser.nickname + ` 님과\n룸메이트를 그만둘까요?`}
						/>
					)}

					{roommateState && (
						<MyRoommateNoti>
							<MyRoommateNotiTxt>{`현재 나의 룸메이트에요`}</MyRoommateNotiTxt>
							<EndRoommate onClick={() => setFinishState(true)}>{`룸메이트 끊기`}</EndRoommate>
						</MyRoommateNoti>
					)}
					<TopProfile>
						<c.SpaceBetween>
							<div>
								<Profile
									src={
										opponentUser?.photoName.length === 0
											? BasicProfile
											: process.env.REACT_APP_BUCKET_BASEURL + opponentUser?.photoName
									}
								/>
								<c.Flex>
									<NickName>{opponentUser?.nickname}</NickName>
									{lifeStyles[1].smoking && <Smoke>{`흡연자`}</Smoke>}
								</c.Flex>
								<Major>
									{opponentUser?.major} · {opponentUser?.studentID}
								</Major>
							</div>
							<Chat>
								<ChatImage src={ChatImg} />
								<ChatText onClick={() => startChat()}>대화하기</ChatText>
							</Chat>
						</c.SpaceBetween>
						<UserMessageBox>
							<c.Flex>
								<InfoImg src={Info} />
								<InfoMessage>{opponentUser?.introduction}</InfoMessage>
							</c.Flex>
						</UserMessageBox>
						<Br />
						{/* match score */}
						<MatchText>
							<div>{opponentUser?.point >= 40 && opponentUser?.point <= 60 ? "서로" : "나와"}</div>
							<MatchColorText isFit={opponentUser?.point}>
								{opponentUser?.point >= 70
									? "잘 맞아요!"
									: opponentUser?.point >= 40 && opponentUser?.point <= 60
									? "맞춰가면 좋아요!"
									: "잘 맞지 않아요"}
							</MatchColorText>
						</MatchText>
						{/* Match Text */}
						<CharContainer>
							{data !== null && textCenter !== null && (
								<Chart type="doughnut" data={data} plugins={[textCenter]} />
							)}
						</CharContainer>
						<OtherAndMeTxt>
							<Other>{`상대방`}</Other>
							<Me>{`나`}</Me>
						</OtherAndMeTxt>
						{lifeStyles.length !== 0 &&
							lifeStyleList?.map((list) => (
								<LifeStyle
									lifeStyle={list.name}
									isSame={lifeStyles[0][`${list.key}`] === lifeStyles[1][`${list.key}`]}
									opponentLifeStyle={list[`${lifeStyles[1][`${list.key}`]}`]}
									myLifeStyle={list[`${lifeStyles[0][`${list.key}`]}`]}
								/>
							))}
					</TopProfile>
				</c.SubScreen>
			</c.ScreenComponent>
			<BottomEnroll>
				<div onClick={() => saveOther()}>
					{/* <SaveImg src={isSave ? FillSave : Save} /> */}
					<SaveTxt>저장</SaveTxt>
				</div>
				<EnrollBtn
					state={roommateApplyState || roommateState || acceptRoommate}
					onClick={() => setApplyRommate(true)}
				>
					<EnrollTxt state={roommateApplyState || roommateState || acceptRoommate}>
						룸메이트 신청하기
					</EnrollTxt>
				</EnrollBtn>
			</BottomEnroll>
			<Popup
				message={`신고가 정상적으로 접수되었어요`}
				setShowPopup={setShowPopup}
				isShowPopup={showPopup}
				bottom={`19.5`}
			/>
			<ApplyCancelBottomSheet
				height={`393px`}
				padding={`24px 20px 85px 20px`}
				Icon={ApplyRoommateIcon}
				message={opponentUser?.nickname + `님께\n룸메이트를 신청할까요?`}
				subMessage={`상대방이 수락하기 전까지는\n언제든지 취소 가능해요`}
				btnName={`신청하기`}
				isOpen={applyRoommate && !roommateApplyState && !roommateState}
				onClick={() => ApplyRoommate()}
				applyRoommate={() => setApplyRommate(false)}
			/>
		</c.Totalframe>
	);
};
export default User;
