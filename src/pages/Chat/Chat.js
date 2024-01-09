import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import ChatList from "../../components/Chat/ChatList";
import basicProfile from "../../assets/img/MyPage/basicProfile.svg";

const Title = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-top: 7.58vh;
`;
const TotalMenu = styled.div`
  display: flex;
  width: 100%;
  height: 5.68vh;
  border-radius: 12px;
  background: #f7f7f7;
  margin-top: 2.84vh;
  padding: 0.47vh 1.15vw;
  margin-bottom: 1.42vh;
`;
const InnerBox = styled.div`
  width: calc(100% / 2);
  height: ${(props)=>props.isSelect ? '4.73vh' : '100%'};
  color: ${(props)=>props.isSelect ? '#333' : '#949494'};
  font-size: 1rem;
  font-weight: ${(props)=>props.isSelect ? '600' : '500'};;
  line-height: 24px; /* 150% */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props)=>props.isSelect ? '8px' : '0px'};
  background-color: ${(props)=>props.isSelect ? '#fff' : null};
`;
const Chat = () => {
  const [isSelectMenu, setIsSelectMenu] = useState("findroommate");
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <Title>{`대화`}</Title>
          <TotalMenu>
            <InnerBox isSelect = {isSelectMenu === 'findroommate'} onClick={()=>setIsSelectMenu('findroommate')}>룸메찾기</InnerBox>
            <InnerBox isSelect = {isSelectMenu === 'group'} onClick={()=>setIsSelectMenu('group')}>모임</InnerBox>
          </TotalMenu>
          {isSelectMenu === 'findroommate' && <ChatList chatprofile={basicProfile} name={`이소윤`} prevDate={`1일 전`} chat={`안녕하세요. 룸메 구하셨나요?`} noneReadCnt={`2`}/>}
          {isSelectMenu === 'group' && <ChatList chatprofile={basicProfile} name={`같이 신전떡볶이 주문하신분`} prevDate={`1일 전`} chat={`안녕하세요. 룸메 구하셨나요?요를레히힣힣넘어가는지확인하는중입니다.`} noneReadCnt={`2`}/>}
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar/>
    </c.Totalframe>
  );
};
export default Chat;
