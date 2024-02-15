import React, { useState } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import JoinButton from "../../components/Join/JoinButton";
import BedIcon from "../../assets/gif/bed.gif";
import Loading from "../Loading";

const WelcomeText = styled.div`
  margin-top: 14.21vh;
  color: #333;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const SubText = styled.div`
  margin-top: 2.84vh;
  color: #949494;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px; /* 140% */
  white-space: pre-wrap;
`;
const TopImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  width: 354px;
  height: 354px;
`;
const FinalPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sendEveryInfo = () => {
    async function fetchUserRegist(){
      setLoading(true)
      try{
          const res = await API.get("/member/register");
          if(res.status == '200') navigate("/home");
      }catch(error){
        console.error(error);
      }
  }
  fetchUserRegist();
}
  return (
    loading ? <Loading/> : (
    <c.Totalframe background={`linear-gradient(180deg, rgba(255, 199, 0, 0.10) 0%, rgba(250, 250, 250, 0.10) 100%)`}>
      <c.ScreenComponent>
        <WelcomeText>환영합니다!</WelcomeText>
        <SubText>{`이제부터 긱스와 함께\n행복한 기숙사 생활 해봐요`}</SubText>
        <TopImg>
          <MainImg src={BedIcon} />
        </TopImg>
        <JoinButton
          btnName={"룸메이트 찾으러 가기"}
          isNextPage={true}
          handleClick={() => sendEveryInfo()}/>
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};

export default FinalPage;
