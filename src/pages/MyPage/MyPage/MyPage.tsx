import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import PageName from "../../../components/Main/PageName";
import UserInfo from "../../../components/Main/UserInfo";
import MyPageMenu from "../../../components/Main/MyPageMenu";
import NavigationBar from "../../../components/Main/NavigationBar/NavigationBar";
import Br from "../../../components/Common/Br";
import basicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import enrollLifeStyle from "../../../assets/img/MyPage/Menu/enrollLIfeStyle.svg";
import saveList from "../../../assets/img/MyPage/Menu/fillSave.svg";
import roommateApply from "../../../assets/img/MyPage/Menu/rommateApply.svg";
import userInfoImg from "../../../assets/img/MyPage/Menu/userInfo.svg";
import notice from "../../../assets/img/MyPage/Menu/notice.svg";
import announce from "../../../assets/img/MyPage/Menu/announce.svg";
import HeadPhone from "../../../assets/img/MyPage/Menu/icon-headphone.svg";
import List from "../../../assets/img/MyPage/Menu/icon-list.svg";

import logout from "../../../assets/img/MyPage/Menu/logout.svg";
import closeIcon from "../../../assets/img/MyPage/Menu/icon-close-circle-fill.svg";
import { useSetRecoilState } from "recoil";
import Loading from "../../Loading";
import Typography from "../../../components/Common/Layouts/Typography";
import MenuList from "../../../components/MyPage/MenuList/MenuList";
import Toggle from "../../../components/DesignStuff/Toggle/Toggle";
import Row from "../../../components/Common/Layouts/Row";
import Column from "../../../components/Common/Layouts/Column";

const UserInfoTop = styled.div`
	margin-top: 4.5vh;
	margin-bottom: 2.72vh;
`;
const SelfIntro = styled.div`
	border-radius: 8px;
	background: #f7f7f7;
	display: flex;
	width: 89.74vw;
	padding: 10px 16px;
	align-items: center;
	margin-top: 1.42vh;

	color: #333;
	text-align: center;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
`;
const ShowMyProfile = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4.14vh;
	margin-bottom: 2.72vh;
`;
const ShowProfileTxt = styled.div`
	color: #333;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
`;
const ShowProfileSubtxt = styled.div`
	color: #949494;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	margin-top: 0.71vh;
`;

const WelcomeKit = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 68px;
	padding: 0px 6.15vw;
	margin: 2.36vh 0px;
	border-radius: 12px;
	background: #ffc700;
	color: #333;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	white-space: pre-wrap;
	line-height: 18px; /* 128.571% */
	background: #ffecac;
	position: relative;
`;
const GiftBoxImg = styled.img`
	position: absolute;
	right: 9.8vw;
	top: -25px;
`;
export default function MyPage() {
	const [toggle, setToggle] = useState(true);
	const [userInfo, setUserInfo] = useState("");
	const [userMajor, setUserMajor] = useState("");
	const [loading, setLoading] = useState(false);

	const clickedToggle = () => {
		let toggleVal = !toggle;
		setToggle(toggleVal);
		async function fetchShowProfile() {
			try {
				const res = await API.get("/member/open?open=" + toggleVal);
			} catch (error) {
				console.error(error);
			}
		}
		fetchShowProfile();
	};
	const navigate = useNavigate();

	// useEffect(() => {
	// 	async function fetchUserInfo() {
	// 		try {
	// 			const res = await API.get("/member/myPage");
	// 			setUserInfo(res.data);
	// 			setContent(res.data.nickname);
	// 			setToggle(res.data.open);
	// 			if (res.data.major.includes("공학과")) setUserMajor(res.data.major.replace("공학과", ""));
	// 			else if (res.data.major.includes("학과")) setUserMajor(res.data.major.replace("학과", ""));
	// 			else if (res.data.major.includes("전공")) setUserMajor(res.data.major.replace("전공", ""));
	// 			else setUserMajor(res.data.major);
	// 			setLoading(false);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchUserInfo();
	// }, []);

	const Logout = () => {
		async function fetchLogOut() {
			try {
				const res = await API.get("/logout");
				if (res.status == 200) {
					navigate("/welcome", {
						state: {
							prev: "logout"
						}
					});
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchLogOut();
	};

	return loading ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent navigation={true}>
				<Typography typoSize="H3" color="Gray800">
					{"마이"}
				</Typography>
				<UserInfoTop>
					{/* TODO API연결 후 */}
					{/* <UserInfo
							profileImg={
								userInfo.photoName?.length === 0
									? basicProfile
									: process.env.REACT_APP_BUCKET_BASEURL + userInfo.photoName
							}
							userName={userInfo.nickname}
							userMajor={userMajor}
							UserId={userInfo.studentID}
							enrollLifeStyle={!userInfo.exist}
						/> */}
					{/* 임시 데이터  */}
					<UserInfo
						profileImg={basicProfile}
						userName={"긱스"}
						userMajor={"글로벌지역학부"}
						UserId={"23학번"}
						enrollLifeStyle={true}
					/>
				</UserInfoTop>
				{/* TODO */}
				{/* {userInfo.introduction?.length !== 0 && <SelfIntro>{userInfo.introduction}</SelfIntro>} */}
				{/* <ShowMyProfile>
              <div>
                <ShowProfileTxt>내 프로필 노출하기</ShowProfileTxt>
                <ShowProfileSubtxt>
                  룸메이트가 맺어지면 내 프로필이 숨겨져요
                </ShowProfileSubtxt>
              </div>
              <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                <Circle toggle={toggle} />
              </ToggleBtn>
            </ShowMyProfile> */}
				<div style={{ padding: "16px 0" }}>
					<Row horizonAlign="distribute">
						<Column gap={4}>
							<Typography typoSize="T3_semibold" color="Gray800">
								{"내 프로필 노출하기"}
							</Typography>
							<Typography typoSize="B2_medium" color="Gray600">
								{"내 프로필 노출하기"}
							</Typography>
						</Column>
						<Toggle onClick={clickedToggle} isToggle={toggle} />
					</Row>
				</div>

				<Br />
				<MenuList
					icon={enrollLifeStyle}
					menuName={`생활 습관 등록하기`}
					isEnroolListStyle={!true}
					onClick={() => navigate("/lifestyle")}
				/>
				<MenuList icon={saveList} menuName={`룸메이트 저장 목록`} onClick={() => navigate("/savelist")} />
				<MenuList
					icon={roommateApply}
					menuName={`룸메이트 신청 목록`}
					onClick={() => navigate("/roommate/apply")}
				/>
				<Br />
				<MenuList icon={userInfoImg} menuName={`회원 정보 설정`} onClick={() => navigate("/settinguserinfo")} />
				<MenuList icon={notice} menuName={`알림 설정`} />
				<MenuList icon={announce} menuName={`공지사항`} onClick={() => navigate("/notice")} />
				<MenuList icon={HeadPhone} menuName={`문의하기`} onClick={() => navigate("/notice")} />
				{/* <MenuList icon={question} menuName={`자주 묻는 질문`} onClick={() => navigate("/faq")} /> */}
				<MenuList icon={List} menuName={`약관 및 정책`} onClick={() => navigate("/notice")} />
				<MenuList icon={logout} menuName={`로그아웃`} onClick={() => Logout()} />
				<MenuList
					icon={closeIcon}
					menuName={`서비스 탈퇴`}
					// onClick={() => navigate("/secessionreason", { state: { userName: userInfo.nickname } })}
				/>
			</CS.ScreenComponent>
			<NavigationBar type={`mypage`} />
		</CS.Totalframe>
	);
}
