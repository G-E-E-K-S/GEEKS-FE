import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import Question from "../../assets/gif/question.gif";

const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;
const QuestionIcon = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 3.79vh;
`;

const QuesText = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`${location.state?.inputNickName}님 반가워요!\n\n기숙사 생활을 위한\n몇 가지만 여쭤볼게요`}/>
        <Icon>
          <QuestionIcon src={Question}/>
        </Icon>          
        <JoinButton btnName={"다음"} isNextPage={true} handleClick={()=>navigate('/major')}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default QuesText;
