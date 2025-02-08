import React, { useEffect, useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import Header from "../../../components/Main/Header/Header";
import NavigationBar from "../../../components/Main/NavigationBar/NavigationBar";
import MainOtherProfile from "../../../components/Main/MainOtherProfile";
import HomeBox from "../../../components/Main/HomeBox";
import Popup from "../../../components/Common/Popup";
import MainPost from "../../../components/Main/MainPost";
import checklist from "../../../assets/img/Home/checkList.svg";
import rule from "../../../assets/img/Home/Rule.svg";
import stayOut from "../../../assets/img/Home/stayOut.svg";
import dormiNoti from "../../../assets/img/Home/dormiNoti.svg";
import Close from "../../../assets/img/Home/close.svg";
import Find from "../../../assets/gif/find.gif";
import BasicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import ForwardArrow from "../../../assets/img/Home/forwardArrow.svg";
import SendAlarm from "../../../assets/img/Home/alarm.svg";
import BoldClose from "../../../assets/img/Home/boldClose.svg";
import Loading from "../../Loading";
import Row from "../../../components/Common/Layouts/Row";
import Column from "../../../components/Common/Layouts/Column";
import Typography from "../../../components/Common/Layouts/Typography";
import ButtonBox from "../../../components/DesignStuff/ButtonBox/ButtonBox";
import * as S from "./style";
import Tooltip from "../../../components/DesignStuff/ToolTip/ToolTip";
import { useUserInfo } from "../../../store/useUserInfo";

// const System = styled.div`
// 	width: 100%;
// 	display: flex;
// 	margin: 4.26vh 1.28vw 0 1.28vw;
// 	& > :last-child {
// 		margin-right: 0; /* 마지막 이미지에는 간격을 적용하지 않음 */
// 	}
// `;
// const Icons = styled.div`
// 	width: 16.41vw;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-direction: column;
// 	margin-right: 7.17vw;
// 	cursor: pointer;
// `;
// const Icon = styled.img`
// 	margin: auto;
// 	display: block;
// 	margin-bottom: 8px;
// `;
// const IconText = styled.div`
// 	color: #333;
// 	text-align: center;
// 	white-space: nowrap;
// 	font-size: 14px;
// 	font-style: normal;
// 	font-weight: 500;
// `;
// const ApplyRoommate = styled.div`
// 	widht: 100%;
// 	background: #fff4cd;
// 	padding: 20px 20px 32px 20px;
// 	margin-top: 32px;
// 	border-radius: 20px;
// `;
// const ApplyNoticeTxt = styled.div`
// 	font-size: 1.5rem;
// 	font-weight: 700;
// 	line-height: 32px;
// 	text-align: left;
// 	white-space: pre-wrap;
// `;
// const ApplyCloseImg = styled.img`
// 	width: 20px;
// 	height: 20px;
// `;
// const FindRoommateTxt = styled.div`
// 	white-space: pre-wrap;
// 	color: #707070;
// 	text-align: center;
// 	font-size: 1rem;
// 	font-weight: 500;
// 	line-height: 24px;
// 	margin-top: 1.89vh;
// `;
const EnrollRule = styled(Row)`
	width: 100%;
	height: 56px;
	border-radius: 12px;
	background: #ffc700;
`;
const ShowReviewBox = styled.div`
	width: 100%;
	height: 86px;
	padding: 20px 5.12vw;
	border-radius: 20px;
	background: #fcede8;
	margin-top: 3.7vh;
`;
// const ReviewTxt = styled.div`
// 	color: #1a1a1a;
// 	font-size: 1.125rem;
// 	font-weight: 700;
// 	line-height: 24px;
// 	margin-bottom: 4px;
// `;
// const CloseImg = styled.img`
// 	width: 20px;
// 	height: 20px;
// `;
// const MoreSecurityTxt = styled.div`
// 	color: #525252;
// 	font-size: 0.875;
// 	font-style: normal;
// 	font-weight: 500;
// 	line-height: 18px;
// `;
// const PopularPostBox = styled.div`
// 	display: flex;
// 	height: 48px;
// 	width: 100%;
// 	padding: 4px 1.02vw;
// 	border-radius: 12px;
// 	background: #f7f7f7;
// 	margin-bottom: 22px;
// 	position: relative;
// `;

// const PopularPostText = styled.div`
// 	width: calc(100% / 2);
// 	height: 100%;
// 	${(props) => props.toggle && "position: absolute; left: 0; top: 0"};
// 	background-color: ${(props) => props.toggle && "#FFF"};
// 	color: ${(props) => (props.toggle ? "#1A1A1A" : "#949494")};
// 	font-weight: ${(props) => (props.toggle ? "600" : "500")};
// 	border-radius: ${(props) => props.toggle && "8px"};
// 	box-shadow: ${(props) => props.toggle && "2px 2px 4px 0px rgba(0, 0, 0, 0.04)"};
// 	text-align: center;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	${(props) => !props.view && "opacity: 0"};

// 	transition: ${(props) => props.toggle && "transform 0.5s ease,"}opacity 1s ease;

// 	transform: ${(props) => (props.toggle ? (props.isWeeklyPost ? "translateX(100%)" : "translateX(0%)") : null)};

// 	&.active {
// 		opacity: 1;
// 	}

// 	&:not(.active) {
// 		opacity: 0;
// 	}
// `;

// const PopularPostTextInDiv = styled.div`
// 	position: absolute;
// 	left: 0;
// 	top: 0;
// 	width: 100%;
// 	height: 100%;
// 	text-align: center;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	${(props) => (props.isWeeklyPost ? "opacity: 1" : "opacity: 0")};

// 	transition: opacity 0.6s ease;

// 	&.active {
// 		opacity: 1;
// 	}
// `;

export default function Home() {
	const MAIN_HEADER = [
		{ key: "checklist", menuName: "생활 규칙", Icon: checklist },
		{ key: "stayout", menuName: "외박 신청", Icon: stayOut },
		{ key: "dormitorynoti", menuName: "기숙사 공지", Icon: dormiNoti },
		{ key: "dormitorynoti", menuName: "기숙사 공지", Icon: dormiNoti }
	];
	const { nickname } = useUserInfo();
	const [showPopup, setShowPopup] = useState(false);
	const [isShowWriteReview, setIsShowWriteReview] = useState(localStorage.getItem("show") !== "false");

	const [isExist, setIsExist] = useState(false);
	const [isRoommateApply, setRoommateApply] = useState(true);
	const [point, setPoint] = useState([]);
	const [loading, setLoading] = useState(false);
	const [active, setActive] = useState(false);
	const [isSendMessage, setIsSendMessgae] = useState(false);
	const navigate = useNavigate();

	const handleHeader = (headerKey: string) => {
		switch (headerKey) {
			case "checklist":
				navigate("/liverule");
				break;
			case "stayout":
				window.open("https://smsso.smu.ac.kr/svc/tk/Auth.do?ac=Y&ifa=N&id=portal&", "_blank");
				break;
			case "dormitorynoti":
				window.open("https://www.smu.ac.kr/dormi2/board/notice.do", "_blank");
				break;
		}
	};

	const isNavigate = () => {
		isExist && navigate("/roommate");
	};
	const location = useLocation();
	// React.useEffect(() => {
	//   if ('serviceWorker' in navigator) {
	//     navigator.serviceWorker.ready.then((registration) => {
	//       registration.update();
	//     });
	//   }
	// }, [location]);

	useEffect(() => {
		async function fetchEmailPage() {
			try {
				const res = await API.get("/home/main");
				setRoommateApply(res.data.roommateApply);
				setIsExist(res.data.exist);
				setPoint(res.data.points);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchEmailPage();
		const isVisited = localStorage.getItem("vap"); //VisitedAlarmPage

		if (isVisited === null) {
			localStorage.setItem("vap", "true");
		}
	}, []);

	const caclTime = (uploadTime) => {
		moment.locale("ko"); // 언어를 한국어로 설정
		// return moment(uploadTime).fromNow(`A`) + "전"; // 지금으로부터 계산
	};
	const handleShowReview = (e) => {};
	// const handleShowApplyRoommate = (e) =>{
	//   e.preventDefault();
	//   setRoommateApply(false);
	//   localStorage.setItem("showApply", false);
	// }

	const isVisited = localStorage.getItem("vap");
	return loading ? (
		<Loading />
	) : (
		<CS.Totalframe background={`#FAFAFA`}>
			<Popup
				message={`곧 만날 수 있으니 조금만 기다려 주세요!`}
				setShowPopup={setShowPopup}
				isShowPopup={showPopup}
				top={`9.5`}
			/>
			<Popup
				message={`귀가 알림을 성공적으로 보냈어요!`}
				setShowPopup={setIsSendMessgae}
				isShowPopup={isSendMessage}
				top={`9.5`}
			/>
			<CS.ScreenComponent navigation={true}>
				<Column gap={24}>
					<Header />
					<Row gap={31}>
						{MAIN_HEADER.map((header) => (
							<Column
								gap={8}
								horizonAlign="center"
								verticalAlign="center"
								style={{ width: "16.41vw" }}
								onClick={() => handleHeader(header.key)}
							>
								<img src={header.Icon} />
								<Typography typoSize="B2_medium" color="Gray900">
									{header.menuName}
								</Typography>
							</Column>
						))}
					</Row>
					<ButtonBox backgroundColor="YellowGray100">
						<Row horizonAlign="distribute">
							<Column gap={4}>
								<Typography typoSize="T3_bold" color="YellowGray800">
									{"귀가 알림 보내기"}
								</Typography>
								<Typography typoSize="B2_medium" color="YellowGray600">
									{"룸메이트에게 미리 알림을 보낼 수 있어요"}
								</Typography>
							</Column>
							<Tooltip message="누르면 알림이 전송돼요" isVisible={isVisited !== "true"}>
								<img src={SendAlarm} onClick={() => setIsSendMessgae(true)} alt="sendAlarmToRoommate" />
							</Tooltip>
						</Row>
					</ButtonBox>

					{isRoommateApply && (
						<ButtonBox backgroundColor="Yellow100" onClick={() => navigate("/roommate/apply")}>
							<Row horizonAlign="distribute">
								<Typography typoSize="H3" color="Gray800">
									{"누군가 나에게 룸메이트를\n신청했어요!"}
								</Typography>
								<img src={ForwardArrow} style={{ width: "20px", height: "20px" }} />
							</Row>
							<Row horizonAlign="center" verticalAlign="center">
								<S.FindIcon src={Find} />
							</Row>
						</ButtonBox>
					)}
					<ButtonBox backgroundColor="White">
						<Typography typoSize="H3" color="Gray800">
							{isExist
								? `${nickname} 님과 딱 맞는\n룸메이트를 찾았어요`
								: `${nickname} 님과 딱 맞는\n룸메이트를 찾아드려요`}
						</Typography>
						{isExist ? (
							point.map((opponent, index) => (
								// TODO : API연결 후
								<></>
								// <MainOtherProfile
								// 	onClick={() => navigate("/detail/details/" + opponent.userId)}
								// 	nickName={opponent.nickname}
								// 	userprofile={opponent.photoName}
								// 	major={opponent.major}
								// 	id={opponent.studentID}
								// 	score={opponent.point}
								// 	smoke={opponent.smoking}
								// 	marginBottom={point.length === index + 1 ? "0px" : "36px"}
								// />
							))
						) : (
							<Column gap={16} horizonAlign="center" verticalAlign="center">
								<S.FindIcon src={Find} />
								<Typography
									typoSize="B1_medium"
									color="Gray600"
									textAlign="center"
								>{`생활 습관을 등록하고\n나와 딱 맞는 룸메이트를 찾아보세요!`}</Typography>
								<EnrollRule
									horizonAlign="center"
									verticalAlign="center"
									onClick={() => navigate("/lifestyle")}
								>
									<Typography typoSize="T3_semibold" color="Black">{`생활습관 등록하기`}</Typography>
								</EnrollRule>
							</Column>
						)}
					</ButtonBox>
					{isShowWriteReview && (
						<ButtonBox
							backgroundColor={"Red50"}
							height={86}
							onClick={() => window.open("https://forms.gle/m9kF8KybtXr5E3sS7", "_blank")}
						>
							<Row horizonAlign="distribute">
								<Column gap={4}>
									<Typography typoSize="T3_bold" color="Gray800">
										{"긱스 이용 후기를 남겨주세요!"}
									</Typography>
									<Typography typoSize="B2_medium" color="Gray700">
										{"더 멋지게 보완해서 찾아올게요"}
									</Typography>
								</Column>
								<img
									src={Close}
									onClick={(e) => {
										e.stopPropagation();
										setIsShowWriteReview(false);
										localStorage.setItem("show", "false");
									}}
								/>
							</Row>
						</ButtonBox>
					)}
				</Column>
			</CS.ScreenComponent>
			<NavigationBar type={`home`} />
		</CS.Totalframe>
	);
}
