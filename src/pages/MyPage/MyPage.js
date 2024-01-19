import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

const UserInfoTop = styled.div`
  margin-top: 4.5vh;
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
  border: 1px solid ${(props) => (props.toggle ? "#EFEFEF" : "#FEE384")};
  cursor: pointer;
  background-color: ${(props) => (props.toggle ? "#EFEFEF" : "#FFF4CD")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: ${(props) => (props.toggle ? "#949494" : "#FFC700")};
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
  height: 8.05vh;
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
`;
const MyPage = () => {
  const [toggle, setToggle] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  const navigate = useNavigate();
  useEffect(()=>{
    async function fetchUserInfo(){
      try{
          axios.defaults.withCredentials=true; // allow cookies
          const res = await axios.get("http://localhost:8080/member/myPage");
          setUserInfo(res.data);
          console.log(res);
      }catch(error){
        console.error(error);
      }
  }
  fetchUserInfo();
  },[]);
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <PageName pageName={`마이`} />
          <UserInfoTop>
            <UserInfo
              profileImg={basicProfile}
              userName={userInfo.nickname}
              userMajor={userInfo.major}
              UserId={userInfo.studentID}
              enrollLifeStyle={!userInfo.exist}
            />
          </UserInfoTop>
          <SelfIntro>{userInfo.introduction}</SelfIntro>
          <ShowMyProfile>
            <div>
              <ShowProfileTxt>내 프로필 노출하기</ShowProfileTxt>
              <ShowProfileSubtxt>
                룸메이트가 맺어지면 내 프로필이 숨겨져요
              </ShowProfileSubtxt>
            </div>
            <ToggleBtn onClick={clickedToggle} toggle={toggle}>
              <Circle toggle={toggle} />
            </ToggleBtn>
          </ShowMyProfile>
          <Br />
          <WelcomeKit>
            {`긱스 사용 후기 작성하고\n기숙사 웰컴 키트 받아가세요!`}
            <img src={rightArrow} />
          </WelcomeKit>
          <MyPageMenu
            menuImg={enrollLifeStyle}
            menuName={`생활 습관 등록하기`}
            onClick={() => navigate("/lifestyle")}
            enrollLifeStyle={!userInfo.exist}
          />
          <MyPageMenu
            menuImg={saveList}
            menuName={`룸메이트 저장 목록`}
            onClick={() => navigate("/savelist")}
          />
          <MyPageMenu
            menuImg={roommateApply}
            menuName={`룸메이트 신청 목록`}
            onClick={() => navigate("/roommate/apply")}
          />
          <Br />
          <MyPageMenu
            menuImg={userInfoImg}
            menuName={`회원 정보 설정`}
            onClick={() => navigate("/settinguserinfo")}
          />
          <MyPageMenu menuImg={notice} menuName={`알림 설정`} />
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
          <MyPageMenu menuImg={inquiry} menuName={`문의하기`} />
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`mypage`} />
    </c.Totalframe>
  );
};
export default MyPage;
