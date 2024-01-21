import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import JoinButton from "../../components/Join/JoinButton";
import House from "../../assets/gif/house.gif";

const StartMent = styled.div`
  margin-top: 15.16vh;
  color: #333;
  font-size: 1.75rem;
  font-weight: 700;
  white-space: pre-wrap;
  font-family: Pretendard;
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
  const navigator = useNavigate();

  const nextPage = () => {
    navigator("/inputemail");
  };

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <StartMent>{`기숙사 생활 걱정 끝,\n긱스에 오신 걸 환영해요!`}</StartMent>
        <SubMent>{`이메일 가입으로 바로 시작해보세요`}</SubMent>
        <TotalImg>
          <TopImg src={House}/>
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
