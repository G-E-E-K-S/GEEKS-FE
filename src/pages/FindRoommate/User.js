import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import UserLifeStyle from "../../components/Roommate/UserLifeStyle";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import ChatImg from "../../assets/img/Roommate/chat.svg";
import Info from "../../assets/img/Roommate/info.svg";
import SaveBtn from "../../assets/img/MyPage/save.svg";

const TopProfile = styled.div`
  margin-top: 4.26vh;
`;
const Profile = styled.img`
  width: 72px;
  height: 72px;
`;
const NickName = styled.div`
  color: #1a1a1a;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  margin-top: 2.13vh;
  margin-bottom: 0.23vh;
`;
const Major = styled.div`
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: px;
`;
const Chat = styled.div`
  display: flex;
  width: 30.76vw;
  height: 6.16vh;
  padding: 1.65vh 4.1vw;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
`;
const ChatImage = styled.img`
  width: 24px;
  height: 24px;
`;
const ChatText = styled.div`
  color: #333;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-left: 2.05vw;
  white-space: nowrap;
`;
const UserMessageBox = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  border-radius: 12px;
  background: #FAF6F1;
  padding: 20px;
  margin-top: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    border: 23px solid transparent;
    border-bottom-color: #FAF6F1;
    border-top: 0;
    margin-top: -10px;
  }
`;
const InfoImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 2px;
`;
const InfoMessage = styled.div`
  margin-left: 1.53vw;
  margin-bottom: 1.11vh;
  color: #665d4f;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const MatchText = styled.div`
  margin-top: 4.72vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #525252;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const MatchColorText = styled.div`
  color: #d68d00;
  text-align: center;
`;
const BottomEnroll = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  border-top: 1px solid #EFEFEF;
  padding-top: 2.38vh; 
`;
const SaveImg = styled.img`
  margin-top: 4px;
  width: 28px;
  height: 28px;
`;
const SaveTxt = styled.div`
  color: #B7B7B7;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
const EnrollBtn = styled.div`
  width: 57.42vw;
  height: 56px;
  padding: 18px 12.17vw;
  border-radius: 12px;
  background: #ffc700;
`;
const EnrollTxt = styled.div`
  color: #333;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
`;
const MatchBox = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #FAFAFA;
  height: max-content;
  padding: 2.36vh 5.12vw;
`;
const User = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            <GoBack />
          </c.SpaceBetween>
          <TopProfile>
            <c.SpaceBetween>
              <div>
                <Profile src={BasicProfile} />
                <NickName>이소윤</NickName>
                <Major>인더스트리얼디자인 · 19학번</Major>
              </div>
              <Chat>
                <ChatImage src={ChatImg} />
                <ChatText>대화하기</ChatText>
              </Chat>
            </c.SpaceBetween>
            <UserMessageBox>
              <c.Flex>
                <InfoImg src={Info} />
                <InfoMessage>
                  밤샘 작업이 잦아요! 새벽에 주무시는 분들 찾아요 저도
                  늦게잡니다!
                </InfoMessage>
              </c.Flex>
              <c.Flex>
                <InfoImg src={Info} />
                <InfoMessage>
                  잠버릇 심하신 분들 정중히 사양합니다 ㅠㅠ
                </InfoMessage>
              </c.Flex>
            </UserMessageBox>
            {/* match score */}
            <MatchText>
              서로
              <MatchColorText>맞춰가면 좋아요</MatchColorText>
            </MatchText>
            {/* Match Text */}
            <MatchBox>
              <UserLifeStyle lifeStyleTitle={`잠버릇`} isRight={`일치`} lifestyle={`잠버릇 있어요`} myLifeStyle={`잠버릇 없어요`}/>
            </MatchBox>
          </TopProfile>
        </c.SubScreen>
      </c.ScreenComponent>
      <BottomEnroll>
        <div>
          <SaveImg src={SaveBtn} />
          <SaveTxt>저장</SaveTxt>
        </div>
        <EnrollBtn>
          <EnrollTxt>룸메이트 신청하기</EnrollTxt>
        </EnrollBtn>
      </BottomEnroll>
    </c.Totalframe>
  );
};
export default User;
