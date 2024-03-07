import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GeeksLogo from "../../assets/img/Common/geeksLogo.svg";

const ManagerTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LogoImg = styled.img`
  margin-top: 92px;
`;
const ManagerText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 110px;
  white-space: pre-wrap;
`;
const DirectBtn = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;
const Managermain = () => {
  let navigate = useNavigate();

  return (
    <c.Totalframe background={`#fff`}>
      <c.ScreenComponent>
        <ManagerTotal>
          <LogoImg src={GeeksLogo} />
          <ManagerText>{`관리자 계정으로\n로그인 되었습니다.`}</ManagerText>
          <DirectBtn onClick={() => navigate('/suggestion', { state: {isAdmin: true} })}>{`건의함 바로가기`}</DirectBtn>
          <DirectBtn>{`커뮤니티 바로가기`}</DirectBtn>
        </ManagerTotal>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default Managermain;
