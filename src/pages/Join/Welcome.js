import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import JoinButton from "../../components/Join/JoinButton";
import Popup from "../../components/Common/Popup";
import House from "../../assets/gif/house.gif";
import API from "../../axios/BaseUrl";
import Modal from "../../components/Common/Modal";
import Logo from "../../assets/img/Common/mainLogo.png";
import TextLogo from "../../assets/img/Common/yellowLogo.svg";
import "@pwabuilder/pwainstall";

const StartMent = styled.div`
  margin-top: 12.27vh;
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
const Ceter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin-bottom: 12px;
`;
const DownLoadApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background: #ffc700;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #333333;
`;
const ModalText = styled.div`
  font-size: 1.5rem;
  margin-top: 44px;
  margin-bottom: 56px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  white-space: pre-wrap;
`;

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [updateState, setUpdateState] = useState(false);
  const [phoneKind, setPhoneKind] = useState("");
  const navigate = useNavigate();

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker.ready.then((registration) => {
  //       registration.update();
  //     });
  //   }
  // }, [location]);

  useEffect(() => {
    console.log(deferredPrompt);
  }, [deferredPrompt]);

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();

    setDeferredPrompt(event);
  };

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 앱 설치를 동의했습니다.");
        } else {
          console.log("사용자가 앱 설치를 동의하지 않았습니다.");
        }

        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    setPopupMessage(location.state?.prev);
    setShowPopup(
      location.state?.prev === "logout" || location.state?.prev === "withdrawal"
        ? true
        : false
    );

    // window["isUpdateAvailable"].then((isAvailable) => {
    //   console.log("isUpdateAvailable");
    //   if (isAvailable) {
    //     setUpdateState(true);
    //   }
    // });
    //ios or android확인

    async function fetchAutoLogin() {
      try {
        const res = await API.get("/member/auto/login");

        if (
          res.data === "success" &&
          localStorage.getItem("autologin") !== "false"
        ) {
          navigate("/home");
        }
      } catch (error) {
        console.error(error);
      }

      window.history.replaceState({ prev: "" }, "", "/welcome");
    }

    fetchAutoLogin();

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const nextPage = () => {
    navigate("/agree");
  };

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Popup
          message={
            popupMessage === "logout"
              ? `로그아웃 되었습니다`
              : `탈퇴가 정상적으로 처리되었습니다`
          }
          setShowPopup={setShowPopup}
          isShowPopup={showPopup}
          top={`9.5`}
        />
        <StartMent>{`기숙사 생활 걱정 끝,\n긱스에 오신 걸 환영해요!`}</StartMent>
        <SubMent>{`이메일 가입으로 바로 시작해보세요`}</SubMent>
        <TotalImg>
          <TopImg src={House} />
        </TotalImg>
        <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
        <JoinButton
          btnName={"이메일 회원가입"}
          handleClick={nextPage}
          isNextPage={true}
        />
        {/* {deferredPrompt && <button onClick={handleInstall}>앱 설치</button>} */}
        {(deferredPrompt || updateState) && (
          <Modal padding={`40px 24px 28px 24px`} isWelcome={true}>
            <Ceter>
              <LogoImg src={Logo} />
              <img src={TextLogo} />
            </Ceter>
            <ModalText>{`긱스를 터치 한 번으로\n바로 시작해 보세요!`}</ModalText>
            {navigator.userAgent.toLowerCase().indexOf("android") > -1 ? (
              <DownLoadApp
                onClick={() => handleInstall()}
              >{`앱 내려받기`}</DownLoadApp>
            ) : (
              <pwa-install
                installbuttontext={"앱 내려받기"}
                iosinstallinfotext={"공유 버튼 클릭 후 홈화면에 추가를 눌러주세요!"}
                descriptionheader={``}
              />
            )}
          </Modal>
        )}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Welcome;
