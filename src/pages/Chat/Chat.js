import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../axios/BaseUrl";
import axios from "axios";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import ChatList from "../../components/Chat/ChatList";
import basicProfile from "../../assets/img/MyPage/basicProfile.svg";
import moment from "moment";
import 'moment/locale/ko';
import Loading from "../Loading";

const Title = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-top: 8px;
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
  font-weight: ${(props)=>props.isSelect ? '600' : '500'};
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
  const [chatList , setChatList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getChatRooms();
  },[])

  const getChatRooms = () => {

    async function fetchChatRooms() {
      try {
        const res = await API.get("/chat/main");
        setChatList(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchChatRooms();
  }

  return (
    loading ? <Loading/> : (
      <c.Totalframe>
        <c.ScreenComponent navigation={true}>
          <c.SubScreen>
            <Title>{`대화`}</Title>
            {/* <TotalMenu>
              <InnerBox isSelect={isSelectMenu === 'findroommate'} onClick={() => setIsSelectMenu('findroommate')}>룸메찾기</InnerBox>
              <InnerBox isSelect={isSelectMenu === 'group'} onClick={() => setIsSelectMenu('group')}>모임</InnerBox>
            </TotalMenu> */}
            {isSelectMenu === 'findroommate' && chatList.map((room) => (
              <ChatList
              roomId={room.roomId} 
              chatprofile={basicProfile} 
              name={room.opponentUser} 
              prevDate={moment(room.histories.at(-1)?.createdAt).format('A h:mm')} 
              chat={room.histories.length != 0 && (room.histories.at(-1).message === "$%#deleteRoommate" ? "룸메이트가 끊겼어요" : room.histories.at(-1).message)}  
              noneReadCnt={
                room.histories.length != 0 && 
                room.histories.at(-1).sender != room.user && 
                room.histories.at(-1).readCount >= 1 ? 'N' : null}
              onClick={() => navigate(`/chat/chatRoom/${room.roomId}`)}/>
            ))}
            {isSelectMenu === 'group' && <ChatList chatprofile={basicProfile} name={`같이 신전떡볶이 주문하신분`} prevDate={`1일 전`} chat={`안녕하세요. 룸메 구하셨나요?요를레히힣힣넘어가는지확인하는중입니다.`} noneReadCnt={`2`} />}
          </c.SubScreen>
        </c.ScreenComponent>
      <NavigationBar type={`chat`} />
    </c.Totalframe>
    )
  );
};
export default Chat;
