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
const ModalApologizeTxt = styled.div`
  white-space: pre-wrap;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;
const Close = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [updateState, setUpdateState] = useState(false);
  const [phoneKind, setPhoneKind] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  useEffect(() => {
    const isApologizeStored = localStorage.getItem("apologize");
    if (isApologizeStored === "false") {
      setIsModalOpen(false);
    }
  }, []);

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
        {deferredPrompt ||
        updateState ||
        (!window.matchMedia("(display-mode: standalone)").matches &&
          /iPad|iPhone|iPod/.test(navigator.userAgent)) ? (
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
                iosinstallinfotext={
                  '공유 버튼 클릭 후 "홈 화면에 추가" 를 눌러주세요!'
                }
                descriptionheader={``}
              />
            )}
          </Modal>
        ) : (
          isModalOpen && (
            <Modal padding={`40px 24px 28px 24px`} isWelcome={true}>
              <ModalApologizeTxt>{`[2024년 03월 02일 이전 가입하신 분들께]\n안녕하세요 모든 긱스 사용자 여러분.
            현재 긱스는 '건의함' 신기능을 개발하고 있습니다. 그러나, 해당 기능을 개발하던 도중. 운영진들의 실수로, 2024년 03월 02일 이전에 가입해주신 분들의 회원가입 정보가 삭제되었습니다. 
            2024년 03월 02일 이전에 가입해주신 모든 분들께서는 번거로우시겠지만, 다시 한 번 가입을 진행해주시면 감사하겠습니다.\n\n
            이 사태를 바탕으로 더 나은 긱스를 제공하기 위해 최선을 다하겠습니다. 이해와 협조를 부탁드리며, 불편을 끼쳐드려 다시 한 번 깊이 사과드립니다.
        \n\n- 긱스 운영진 올림 -`}</ModalApologizeTxt>
              <Close
                onClick={() => {
                  localStorage.setItem("apologize", false);
                  setIsModalOpen(false);
                }}
              >{`닫기`}</Close>
            </Modal>
          )
        )}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Welcome;
