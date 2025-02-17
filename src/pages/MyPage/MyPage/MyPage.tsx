import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";

import * as S from "./style";
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
import UserProfile from "../../../components/Main/UserProfile/UserProfile";
import { UserProfileType } from "../../../types/userProfileType";
import { useQuery } from "@tanstack/react-query";
import { useGetToken } from "../../../store/useGetToken";

export default function MyPage() {
	const [toggle, setToggle] = useState(true);
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState<UserProfileType>();
	const [roommateInfo, setRoommateIinfo] = useState<UserProfileType>();
	// const [userMajor, setUserMajor] = useState("");

	const clickedToggle = () => {
		let toggleVal = !toggle;
		setToggle(toggleVal);
		async function fetchShowProfile() {
			try {
				await API.patch("/api/v1/user/profile/change/open");
			} catch (error) {
				console.error(error);
			}
		}
		fetchShowProfile();
	};

	const { data: top3UserData } = useQuery({
		queryKey: ["getTop3User"],
		queryFn: async () => {
			const res = await API.get(`/api/v1/matching/points/top3`);
			return res.data.data;
		}
	});

	const { data, isLoading } = useQuery({
		queryKey: ["myData"],
		queryFn: async () => {
			const response = await API.get(`/api/v1/user/mypage`);
			return response.data.data;
		},
		retry: 2,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
	});

	useEffect(() => {
		if (!data) return;
		setUserInfo(data);
		setRoommateIinfo(data.myRoommate);
	}, [data]);

	const Logout = () => {
		async function fetchLogOut() {
			try {
				const res = await API.post("/api/v1/user/logout");
				if (res.data.success) {
					useGetToken.getState().resetToken();
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

	return isLoading || !userInfo ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent navigation={true}>
				<CS.Header backgroundColor="White">
					<Typography typoSize="H3" color="Gray800">
						{"마이"}
					</Typography>
				</CS.Header>
				<UserProfile
					image={userInfo.image}
					ID={userInfo?.studentNum}
					major={userInfo.major}
					nickName={userInfo.nickname}
					smoke={userInfo.smoke}
					intro={userInfo.introduction}
					activeCheck={false}
					isMe
				/>
				{roommateInfo && (
					<S.RoommateWrapper
						onClick={() =>
							navigate(`/detail/details/${roommateInfo.matchingPointId}/${roommateInfo.opponentId}`)
						}
					>
						<Typography typoSize="B3_medium" color="Gray700" style={{ marginBottom: "10px" }}>
							{"내 룸메이트"}
						</Typography>
						<UserProfile
							image={roommateInfo?.image}
							ID={roommateInfo?.studentNum}
							major={roommateInfo.major}
							nickName={roommateInfo.nickname}
							smoke={roommateInfo.smoke}
							activeCheck={false}
						/>
					</S.RoommateWrapper>
				)}
				<div style={{ padding: "16px 0", marginTop: "20px" }}>
					<Row horizonAlign="distribute">
						<Column gap={4}>
							<Typography typoSize="T3_semibold" color="Gray800">
								{"내 프로필 노출하기"}
							</Typography>
							<Typography typoSize="B2_medium" color="Gray600">
								{"룸메이트가 맺어지면 내 프로필이 숨겨져요"}
							</Typography>
						</Column>
						<Toggle onClick={clickedToggle} isToggle={toggle} />
					</Row>
				</div>

				<Br />
				<MenuList
					icon={enrollLifeStyle}
					menuName={`생활 습관 등록하기`}
					onClick={() => navigate("/lifestyle")}
					isEnroolListStyle={!top3UserData?.exists}
				/>
				<MenuList icon={saveList} menuName={`룸메이트 저장 목록`} onClick={() => navigate("/savelist")} />
				<MenuList
					icon={roommateApply}
					menuName={`룸메이트 신청 목록`}
					onClick={() => navigate("/roommate/apply")}
				/>
				<Br />
				<MenuList icon={userInfoImg} menuName={`회원 정보 설정`} onClick={() => navigate("/settinguserinfo")} />
				<MenuList icon={notice} menuName={`알림 설정`} onClick={() => navigate("/notification")} />
				<MenuList icon={announce} menuName={`공지사항`} onClick={() => navigate("/notice")} />
				<MenuList icon={HeadPhone} menuName={`문의하기`} onClick={() => navigate("/notice")} />
				{/* <MenuList icon={question} menuName={`자주 묻는 질문`} onClick={() => navigate("/faq")} /> */}
				<MenuList icon={List} menuName={`약관 및 정책`} onClick={() => navigate("/termpolicy")} />
				<MenuList icon={logout} menuName={`로그아웃`} onClick={() => Logout()} />
				{/* <MenuList
					icon={closeIcon}
					menuName={`서비스 탈퇴`}
					// onClick={() => navigate("/secessionreason", { state: { userName: userInfo.nickname } })}
				/> */}
			</CS.ScreenComponent>
			<NavigationBar type={`mypage`} />
		</CS.Totalframe>
	);
}
