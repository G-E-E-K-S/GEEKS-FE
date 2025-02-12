import React, { useEffect, useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import NavigationBar from "../../components/Main/NavigationBar";
import MainOtherProfile from "../../components/Main/MainOtherProfile";
import HomeBox from "../../components/Main/HomeBox";
import Popup from "../../components/Common/Popup";
import MainPost from "../../components/Main/MainPost";
import checklist from "../../assets/img/Home/checkList.svg";
import rule from "../../assets/img/Home/Rule.svg";
import stayOut from "../../assets/img/Home/stayOut.svg";
import dormiNoti from "../../assets/img/Home/dormiNoti.svg";
import Close from "../../assets/img/Home/close.svg";
import Find from "../../assets/gif/find.gif";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import BoldClose from "../../assets/img/Home/boldClose.svg";
import Loading from "../Loading";

const System = styled.div`
	width: 100%;
	display: flex;
	margin: 4.26vh 1.28vw 0 1.28vw;
	& > :last-child {
		margin-right: 0; /* 마지막 이미지에는 간격을 적용하지 않음 */
	}
`;
const Icons = styled.div`
	width: 16.41vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-right: 7.17vw;
	cursor: pointer;
`;
const Icon = styled.img`
	margin: auto;
	display: block;
	margin-bottom: 8px;
`;
const IconText = styled.div`
	color: #333;
	text-align: center;
	white-space: nowrap;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
`;
const ApplyRoommate = styled.div`
	widht: 100%;
	background: #fff4cd;
	padding: 20px 20px 32px 20px;
	margin-top: 32px;
	border-radius: 20px;
`;
const ApplyNoticeTxt = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 32px;
	text-align: left;
	white-space: pre-wrap;
`;
const ApplyCloseImg = styled.img`
	width: 20px;
	height: 20px;
`;
const FindRoommateTxt = styled.div`
	white-space: pre-wrap;
	color: #707070;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	margin-top: 1.89vh;
`;
const EnrollRule = styled.div`
	width: 100%;
	height: 56px;
	border-radius: 12px;
	background: #ffc700;
	margin-top: 1.89vh;
	display: flex;
	justify-content: center;
	align-items: center;

	color: #1a1a1a;
	text-align: center;
	font-size: 1rem;
	font-weight: 600;
	line-height: 24px;
`;
const ShowReviewBox = styled.div`
	width: 100%;
	height: 86px;
	padding: 20px 5.12vw;
	border-radius: 20px;
	background: #fcede8;
	margin-top: 3.7vh;
`;
const ReviewTxt = styled.div`
	color: #1a1a1a;
	font-size: 1.125rem;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 4px;
`;
const CloseImg = styled.img`
	width: 20px;
	height: 20px;
`;
const MoreSecurityTxt = styled.div`
	color: #525252;
	font-size: 0.875;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
`;
const PopularPostBox = styled.div`
	display: flex;
	height: 48px;
	width: 100%;
	padding: 4px 1.02vw;
	border-radius: 12px;
	background: #f7f7f7;
	margin-bottom: 22px;
	position: relative;
`;

const PopularPostText = styled.div`
	width: calc(100% / 2);
	height: 100%;
	${(props) => props.toggle && "position: absolute; left: 0; top: 0"};
	background-color: ${(props) => props.toggle && "#FFF"};
	color: ${(props) => (props.toggle ? "#1A1A1A" : "#949494")};
	font-weight: ${(props) => (props.toggle ? "600" : "500")};
	border-radius: ${(props) => props.toggle && "8px"};
	box-shadow: ${(props) => props.toggle && "2px 2px 4px 0px rgba(0, 0, 0, 0.04)"};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) => !props.view && "opacity: 0"};

	transition: ${(props) => props.toggle && "transform 0.5s ease,"}opacity 1s ease;

	transform: ${(props) => (props.toggle ? (props.isWeeklyPost ? "translateX(100%)" : "translateX(0%)") : null)};

	&.active {
		opacity: 1;
	}

	&:not(.active) {
		opacity: 0;
	}
`;

const PopularPostTextInDiv = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) => (props.isWeeklyPost ? "opacity: 1" : "opacity: 0")};

	transition: opacity 0.6s ease;

	&.active {
		opacity: 1;
	}
`;

const IconBox = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FindIcon = styled.img`
	width: 120px;
	height: 120px;
`;
const RoommateComingSoonTxt = styled.div`
	white-space: pre-wrap;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	color: #707070;
	text-align: center;
`;
const Home = () => {
	const [isShowReview, setIsShowReView] = useState(true);
	const [isWeeklyPost, setIsWeeklyPost] = useState("live");
	const [showPopup, setShowPopup] = useState(false);
	const [userName, setUserName] = useState("");
	const [isExist, setIsExist] = useState(true);
	const [isRoommateApply, setRoommateApply] = useState(false);
	const [point, setPoint] = useState([]);
	const [posts, setPosts] = useState([]);
	const [weeklyPost, setWeeklyPost] = useState([]);
	const [loading, setLoading] = useState(false);
	const [active, setActive] = useState(false);
	const navigate = useNavigate();

	const handlePage = () => {
		navigate("/liverule");
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
				console.log(res.data);
				setRoommateApply(res.data.roommateApply);
				setIsExist(res.data.exist);
				setPoint(res.data.points);
				setPosts(res.data.livePosts);
				setWeeklyPost(res.data.weeklyPosts);
				setUserName(res.data.nickname);
				setIsShowReView(localStorage.getItem("show") !== "false");
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchEmailPage();
	}, []);

	const caclTime = (uploadTime) => {
		moment.locale("ko"); // 언어를 한국어로 설정
		return moment(uploadTime).fromNow(`A`) + "전"; // 지금으로부터 계산
	};
	const handleShowReview = (e) => {
		e.preventDefault();
		setIsShowReView(false);
		localStorage.setItem("show", false);
	};
	// const handleShowApplyRoommate = (e) =>{
	//   e.preventDefault();
	//   setRoommateApply(false);
	//   localStorage.setItem("showApply", false);
	// }
	return loading ? (
		<Loading />
	) : (
		<c.Totalframe background={`#FAFAFA`}>
			<c.ScreenComponent navigation={true}>
				<c.SubScreen>
					<Header isNoti={true} onClick={() => navigate("/search")} />
					<Popup
						message={`곧 만날 수 있으니 조금만 기다려 주세요!`}
						setShowPopup={setShowPopup}
						isShowPopup={showPopup}
						top={`9.5`}
					/>
					<System>
						<Icons onClick={() => setShowPopup(true)}>
							<Icon src={checklist} />
							<IconText>체크리스트</IconText>
						</Icons>
						<Icons onClick={() => handlePage()}>
							<Icon src={rule} />
							<IconText>생활 규칙</IconText>
						</Icons>
						<Icons>
							<a href={"https://smsso.smu.ac.kr/svc/tk/Auth.do?ac=Y&ifa=N&id=portal&"} target="_blank">
								<Icon src={stayOut} />
								<IconText>외박 신청</IconText>
							</a>
						</Icons>
						<Icons>
							<a href={"https://www.smu.ac.kr/dormi2/board/notice.do"} target="_blank">
								<Icon src={dormiNoti} />
								<IconText>기숙사 공지</IconText>
							</a>
						</Icons>
					</System>
					{isRoommateApply && (
						<ApplyRoommate onClick={() => navigate("/roommate/apply")}>
							<c.SpaceBetween>
								<ApplyNoticeTxt>{`누군가 나에게 룸메이트를\n신청했어요!`}</ApplyNoticeTxt>
								<ApplyCloseImg src={BoldClose} />
							</c.SpaceBetween>
							<IconBox>
								<FindIcon src={Find} />
							</IconBox>
						</ApplyRoommate>
					)}
					{/* <HomeBox
              name={isExist ? `${userName} 님과 딱 맞는\n룸메이트를 찾았어요`: `${userName} 님과 딱 맞는\n룸메이트를 찾아드려요`}
              marginTop={`3.79vh`}
              marginBottom={`24px`}
              height={`max-content`}
              onClick={() => isNavigate()}>
              {isExist ? (
                point.map((opponent, index) => (
                  <MainOtherProfile
                    onClick={() => navigate("/detail/details/" + opponent.userId)}
                    nickName={opponent.nickname}
                    userprofile={opponent.photoName}
                    major={opponent.major}
                    id={opponent.studentID}
                    score={opponent.point}
                    smoke={opponent.smoking}
                    marginBottom={point.length === index + 1 ? "0px" : "36px"}/>
                ))
              ) : (
                <div>
                  <IconBox>
                    <FindIcon src={Find} />
                  </IconBox>
                  <FindRoommateTxt>{`생활 습관을 등록하고\n나와 딱 맞는 룸메이트를 찾아보세요!`}</FindRoommateTxt>
                  <EnrollRule onClick={() => navigate("/lifestyle")}>{`생활습관 등록하기`}</EnrollRule>
                </div>
              )}
            </HomeBox> */}
					{isShowReview && (
						<a href="https://forms.gle/m9kF8KybtXr5E3sS7" target="_blank">
							<ShowReviewBox>
								<c.SpaceBetween>
									<ReviewTxt>{`긱스 이용 후기를 남겨주세요!`}</ReviewTxt>
									<CloseImg src={Close} onClick={(e) => handleShowReview(e)} />
								</c.SpaceBetween>
								<MoreSecurityTxt>{`더 멋지게 보완해서 찾아올게요`}</MoreSecurityTxt>
							</ShowReviewBox>
						</a>
					)}
					<HomeBox
						name={`지금 기숙사에서\n인기있는 글이에요`}
						marginTop={`20px`}
						marginBottom={`3.31vh`}
						height={`max-content`}
						onClick={() => navigate("/community")}
					>
						<PopularPostBox>
							<PopularPostText
								view={isWeeklyPost === "weekly"}
								isWeeklyPost={isWeeklyPost === "live"}
								onClick={() => setIsWeeklyPost("live")}
								className={isWeeklyPost === "weekly" ? "active" : ""}
							>
								{`실시간 인기글`}
							</PopularPostText>

							<PopularPostText
								view={isWeeklyPost === "live"}
								isWeeklyPost={isWeeklyPost === "weekly"}
								onClick={() => setIsWeeklyPost("weekly")}
								className={isWeeklyPost === "live" ? "active" : ""}
							>
								{`주간 인기글`}
							</PopularPostText>
							<PopularPostText
								toggle={true}
								view={true}
								isWeeklyPost={isWeeklyPost === "weekly"}
								className="active"
							>
								<PopularPostTextInDiv
									isWeeklyPost={isWeeklyPost === "live"}
									className={isWeeklyPost === "live" ? "active" : ""}
								>
									실시간 인기글
								</PopularPostTextInDiv>
								<PopularPostTextInDiv
									isWeeklyPost={isWeeklyPost === "weekly"}
									className={isWeeklyPost === "weekly" ? "active" : ""}
								>
									주간 인기글
								</PopularPostTextInDiv>
							</PopularPostText>
						</PopularPostBox>
						{isWeeklyPost === "live" &&
							posts.map((post, index) => (
								<MainPost
									// onClick={post}
									onClick={() => navigate(`/post/${post.postId}`)}
									text={post.title}
									comment={post.commentCount}
									likeCnt={post.likeCount}
									postContent={post.content}
									UploadTime={caclTime(post.createdDate)}
									marginBottom={posts.length === index + 1 ? "0px" : "24px"}
								/>
							))}
						{isWeeklyPost === "weekly" &&
							weeklyPost?.map((post, index) => (
								<MainPost
									onClick={() => navigate(`/post/${post.postId}`)}
									text={post.title}
									comment={post.commentCount}
									likeCnt={post.likeCount}
									postContent={post.content}
									UploadTime={caclTime(post.createdDate)}
									marginBottom={posts.length === index + 1 ? "0px" : "24px"}
								/>
							))}
					</HomeBox>
					<HomeBox
						onClick={(e) => e && e.preventDefault()}
						name={
							isExist
								? `${userName} 님과 딱 맞는\n룸메이트를 찾았어요`
								: `${userName} 님과 딱 맞는\n룸메이트를 찾아드려요`
						}
						marginTop={`3.79vh`}
						marginBottom={`24px`}
						height={`max-content`}
					>
						<RoommateComingSoonTxt>{`룸메이트 매칭은 잠시 쉬어갈게요\n2학기에 만나요!`}</RoommateComingSoonTxt>
					</HomeBox>
				</c.SubScreen>
			</c.ScreenComponent>
			<NavigationBar type={`home`} />
		</c.Totalframe>
	);
};
export default Home;
