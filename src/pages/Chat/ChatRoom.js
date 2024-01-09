import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import GoBack from "../../components/Join/GoBack";
import MyChat from "../../components/Chat/MyChat";
import OtherChat from "../../components/Chat/OtherChat";
import Dots from "../../assets/img/Home/edit.svg";
import Plus from "../../assets/img/Chat/add.svg";
import Send from "../../assets/img/Chat/send.svg";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const ChatHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  color: #333;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 6.51vh;
`;
const Major = styled.div`
  color: #707070;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  margin-top: 1.02vh;
`;
const DotsImg = styled.img`
  margin-top: 7.58vh;
`;
const Date = styled.div`
  color: #949494;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 2.96vh;
  margin-bottom: 1.65vh;
  text-align: center;
`;
// chat bottom
const ChatBottom = styled.div`
  position: fixed;
  width: 100%;
  height: 17.06vh;
  padding: 1.65vh 5.12vw 0 5.12vw;
  border-top: 1px solid #efefef;
`;
const Add = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 3.07vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputMsgBox = styled.div`
  width: 100%;
  height: 5.21vh;
  padding: 1.18vh 3.07vw 1.18vh 4.1vw;
  border-radius: 24px;
  background: #f7f7f7;
`;
const InputMsg = styled.input`
  outline: none;
  border: none;
  background: #f7f7f7;
  width: 100%;

  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
const SendImg = styled.img`
  float: right;
  cursor: pointer;
`;
const ChatRoom = () => {
  const [isSelectMenu, setIsSelectMenu] = useState("findroommate");
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <ChatHeader>
            <GoBack />
            <c.DirectionCol>
              <Name>{`이소윤`}</Name>
              <Major>{`인더스트리얼디자인 · 19학번`}</Major>
            </c.DirectionCol>
            <DotsImg src={Dots} />
          </ChatHeader>
          {/* chat */}
          <Date>8월 25일</Date>
          <OtherChat profileImg={BasicProfile} time={`오후 05:26`} chat={`안녕하세요. 룸메 구하셨나요?`}/>
          <MyChat time={`오후 05:26`}chat={`네 안녕하세요! 아직 구하고 있는 중입니다`}/>
        </c.SubScreen>
      </c.ScreenComponent>
      <ChatBottom>
        <c.Flex>
          <Add src={Plus} />
          <InputMsgBox>
            <c.Flex>
              <InputMsg />
              <SendImg src={Send} />
            </c.Flex>
          </InputMsgBox>
        </c.Flex>
      </ChatBottom>
    </c.Totalframe>
  );
};
export default ChatRoom;
