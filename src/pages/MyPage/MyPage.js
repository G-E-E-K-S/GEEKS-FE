import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import PageName from "../../components/Main/PageName";
import UserInfo from "../../components/Main/UserInfo";
import MyPageMenu from "../../components/Main/MyPageMenu";
import NavigationBar from "../../components/Main/NavigationBar";
import Br from "../../components/Common/Br";
import basicProfile from "../../assets/img/MyPage/basicProfile.svg";
import rightArrow from "../../assets/img/MyPage/rightArrow.svg";
import enrollLifeStyle from "../../assets/img/MyPage/enrollLIfeStyle.svg";
import saveList from "../../assets/img/MyPage/saveList.svg";
import roommateApply from "../../assets/img/MyPage/rommateApply.svg";
import userInfoImg from "../../assets/img/MyPage/userInfo.svg";
import notice from "../../assets/img/MyPage/notice.svg";
import announce from "../../assets/img/MyPage/announce.svg";
import question from "../../assets/img/MyPage/question.svg";
import inquiry from "../../assets/img/MyPage/inquiry.svg";
import secession from "../../assets/img/MyPage/secession.svg";
import logout from "../../assets/img/MyPage/logout.svg";
import GiftBox from "../../assets/img/MyPage/giftBox.svg";
import { useSetRecoilState } from "recoil";
import { UserNickName } from "../../recoil/UserNickName";
import Loading from "../Loading";

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
const ToggleBtn = styled.button`
  width: 64px;
  height: 32px;
  border-radius: 24px;
  padding: 4px 5px;
  border: 1px solid ${(props) => (props.toggle ? "#FEE384" : "#EFEFEF")};
  cursor: pointer;
  background-color: ${(props) => (props.toggle ? "#FFF4CD" : "#EFEFEF")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: ${(props) => (props.toggle ? "#FFC700" : "#949494")};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    `
        transform: translate(-30px, 0);
        transition: all 0.5s ease-in-out;
    `}
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
  background: #FFECAC;
  position: relative;
`;
const GiftBoxImg = styled.img`
  position: absolute;
  right: 9.8vw;
  top: -25px;
`;
const MyPage = () => {
  const [toggle, setToggle] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const [userMajor, setUserMajor] = useState("");
  const [loading, setLoading] = useState(true);

  const setContent = useSetRecoilState(UserNickName);

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

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const res = await API.get("/member/myPage");
        setUserInfo(res.data);
        setContent(res.data.nickname);
        setToggle(res.data.open);
        if (res.data.major.includes("공학과"))
          setUserMajor(res.data.major.replace("공학과", ""));
        else if (res.data.major.includes("학과"))
          setUserMajor(res.data.major.replace("학과", ""));
        else if (res.data.major.includes("전공"))
          setUserMajor(res.data.major.replace("전공", ""));
        else setUserMajor(res.data.major);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserInfo();
  }, []);

  const Logout = () => {
    async function fetchLogOut() {
      try {
        const res = await API.get("/logout");
        if (res.status == "200") {
          navigate("/welcome", {
            state: {
              prev: "logout",
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogOut();
  };

  return (
    loading ? <Loading/> : (
      <c.Totalframe>
        <c.ScreenComponent navigation={true}>
          <c.SubScreen>
            <PageName pageName={`마이`} />
            <UserInfoTop>
              <UserInfo
                profileImg={
                  userInfo.photoName?.length === 0
                    ? basicProfile
                    : process.env.REACT_APP_BUCKET_BASEURL + userInfo.photoName
                }
                userName={userInfo.nickname}
                userMajor={userMajor}
                UserId={userInfo.studentID}
                enrollLifeStyle={!userInfo.exist}
              />
            </UserInfoTop>
            {userInfo.introduction?.length !== 0 && (
              <SelfIntro>{userInfo.introduction}</SelfIntro>
            )}
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
            <Br />
            {/* <WelcomeKit onClick={()=>navigate('/reviewevent')}>
              {`긱스 사용 후기 작성하고\n기숙사 웰컴 키트 받아가세요!`}
              <GiftBoxImg src={GiftBox}/>
              <img src={rightArrow} />
            </WelcomeKit> */}
            <MyPageMenu
              menuImg={enrollLifeStyle}
              menuName={`생활 습관 등록하기`}
              // onClick={() => navigate("/lifestyle")}
              enrollLifeStyle={!userInfo.exist}
              isShow={true}
            />
            <MyPageMenu
              menuImg={saveList}
              menuName={`룸메이트 저장 목록`}
              // onClick={() => navigate("/savelist")}
              isShow={true}
            />
            <MyPageMenu
              menuImg={roommateApply}
              menuName={`룸메이트 신청 목록`}
              // onClick={() => navigate("/roommate/apply")}
              isShow={true}
            />
            <Br />
            <MyPageMenu
              menuImg={userInfoImg}
              menuName={`회원 정보 설정`}
              onClick={() => navigate("/settinguserinfo")}
            />
            <MyPageMenu
              menuImg={notice}
              menuName={`알림 설정`}
              isShow={true}
            />
            <MyPageMenu
              menuImg={announce}
              menuName={`공지사항`}
              onClick={() => navigate("/notice")}
            />
            <MyPageMenu
              menuImg={question}
              menuName={`자주 묻는 질문`}
              onClick={() => navigate("/faq")}
            />
            <MyPageMenu
              menuImg={logout}
              menuName={`로그아웃`}
              onClick={() => Logout()}
            />
            <MyPageMenu
              menuImg={secession}
              menuName={`탈퇴하기`}
              isSecession={true}
              onClick={()=>navigate('/secessionreason',{state:{userName: userInfo.nickname}})}/>
          </c.SubScreen>
        </c.ScreenComponent>
        <NavigationBar type={`mypage`} />
      </c.Totalframe>
    )
  );
};
export default MyPage;
