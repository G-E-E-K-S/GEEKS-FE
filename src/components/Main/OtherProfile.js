import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import fillSave from '../../assets/img/MyPage/fillSave.svg';
import save from '../../assets/img/MyPage/save.svg';

const TotalProfile = styled.div`
  width: 100%;
  border-radius: 12px;
  background: ${(props)=>props.activeCheck ? '#FFFBEE' : '#fff'};
  border: 1px solid ${(props)=>props.activeCheck ? '#ECAA00' : '#FFFBEE'};
  padding: 14px 5.12vw;
  margin-bottom: 16px;
  overflow-x: auto;
`;
const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;
`;
const NickName = styled.div`
  margin-bottom: 4px;
  color: #333;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
const Major = styled.div`
  color: #707070;
  font-size: 0.875rem;
  color: #333;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  color: #2B75CB;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
const ScoreUnit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2B75CB;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 2px;
`;
const IntroSelf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
const Intro = styled.div`
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  border-radius: 8px;
  background: #F7F7F7;
  padding: 8px 3.07vw;
  width: 64.61vw;
`;
const SaveImg = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
const OtherProfile = (props) => {
  const [fill,isFill] = useState(false);

  const handleFill = (e) => {
    isFill(!fill);
    e.stopPropagation();
  }
  return (
    <TotalProfile activeCheck={props.activeCheck} onClick={props.onClick}>
      <c.SpaceBetween>
        <c.Flex>
          <UserProfile src={props.userprofile} />
          <div>
            <NickName>{props.nickName}</NickName>
            <Major>
              {props.major} · {props.id}학번
            </Major>
          </div>
        </c.Flex>
        <c.Flex>
          <Score>{props.score}</Score>
          <ScoreUnit>점</ScoreUnit>
        </c.Flex>

      </c.SpaceBetween>
      {/* intro self */}
      <IntroSelf>
        <Intro>외출이 잦아요! 기숙사는 가끔 들어와요</Intro>
        <SaveImg src={fill? fillSave : save} onClick={(e)=>handleFill(e)}/>
      </IntroSelf>
    </TotalProfile>
  );
};

export default OtherProfile;
