import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import JoinButton from "../../components/Join/JoinButton";
import Popup from "../../components/Common/Popup";
import House from "../../assets/gif/house.gif";
import API from "../../axios/BaseUrl";
import Loading from "../Loading";

const StartMent = styled.div`
  margin-top: 15.16vh;
  color: #333;
  font-size: 1.75rem;
  font-weight: 700;
  white-space: pre-wrap;
  text-align: center;
`;

const SubMent = styled.div`
  color: #949494;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 1.89vh;
  text-align: center;
`;
const TotalImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopImg = styled.img`
  width: 350px;
  height: 350px;
`;
const LoginButton = styled.div`
  width: 89.74vw;
  height: 60px;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: calc(60px + 10.18vh + 12px);
  cursor: pointer;
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
`;
const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation(null);
  const [popupMessage, setPopupMessage] = useState('');
  const navigator = useNavigate();

  useEffect(() => {
    setPopupMessage(location.state?.prev);
    setShowPopup(
      location.state?.prev === "logout" ||
      location.state?.prev === "withdrawal" ? true : false);

    async function fetchAutoLogin() {
      try {
        const res = await API.get("/member/auto/login");

        if (res.data === "success" && localStorage.getItem('autologin') !== 'false') {
          navigator("/home");
        } 
      } catch (error) {
        console.error(error);
      }

      window.history.replaceState({ prev: "" }, "", "/welcome");
    }

    fetchAutoLogin();
  }, []);

  const nextPage = () => {
    navigator("/agree");
  };

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Popup
          message={popupMessage === 'logout' ? `로그아웃 되었습니다` : `탈퇴가 정상적으로 처리되었습니다`}
          setShowPopup={setShowPopup}
          isShowPopup={showPopup}
          top={`9.5`}
        />
        <StartMent>{`기숙사 생활 걱정 끝,\n긱스에 오신 걸 환영해요!`}</StartMent>
        <SubMent>{`이메일 가입으로 바로 시작해보세요`}</SubMent>
        <TotalImg>
          <TopImg src={House} />
        </TotalImg>
        <LoginButton onClick={() => navigator("/login")}>로그인</LoginButton>
        <JoinButton
          btnName={"이메일 회원가입"}
          handleClick={nextPage}
          isNextPage={true}
        />
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Welcome;
