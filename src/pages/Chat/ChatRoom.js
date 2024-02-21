import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
import MyChat from "../../components/Chat/MyChat";
import OtherChat from "../../components/Chat/OtherChat";
import BottomSheet from "../../components/Common/BottomSheet";
import FinishRoommate from "../FindRoommate/FinishRoommate";
import Dots from "../../assets/img/Home/edit.svg";
import Plus from "../../assets/img/Chat/add.svg";
import Send from "../../assets/img/Chat/send.svg";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import Photo from "../../assets/img/Chat/photo.svg";
import Video from "../../assets/img/Chat/video.svg";
import Camera from "../../assets/img/Chat/camera.svg";
import Rule from "../../assets/img/Chat/liveRule.svg";
import ChatBottomMenu from "../../components/Chat/ChatBottomMenu";
import Popup from "../../components/Common/Popup";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import moment from "moment";
import "moment/locale/ko";
import Loading from "../Loading";

const ChatHeader = styled.div`
  width: calc(100% - 5.12vw * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  top: 0;
`;
const Name = styled.div`
  color: #333;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;
const Major = styled.div`
  color: #707070;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  margin-top: 4px;
`;
const DotsImg = styled.img`
  width: 28px;
  height: 28px;
`;
const Date = styled.div`
  color: #949494;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 1.65vh;
  text-align: center;
`;
const ChatContent = styled.div`
  overflow-y: auto;
  height: max-content;
  margin-top: 65px;
  margin-bottom: 100px;
`;
// chat bottom
const ChatBottom = styled.div`
  position: fixed;
  width: 100%;
  height: 98px;
  bottom: 0;
  background-color: #fff;
  padding: 14px 5.12vw 0 5.12vw;
  border-top: 1px solid #efefef;
`;
const Add = styled.img`
  width: 32px;
  height: 32px;
  margin: auto 0;
  cursor: pointer;
`;
const InputMsgBox = styled.div`
  width: 100%;
  height: 44px;
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
  &::placeholder {
    color: #b7b7b7;
    font-size: 1rem;
    font-weight: 500;
  }
`;
const SendImg = styled.img`
  float: right;
  cursor: pointer;
  margin: 0 auto;
  width: 24px;
  height: 24px;
`;
const PlusMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 2.82vw 0 2.82vw;
  width: 100%;
`;
const MenuBox = styled.div`
  padding: 20px 0;
  color: ${(props) => (props.Report ? "#CB3D0B" : "#525252")};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const CloseBtn = styled.div`
  padding: 16px 0;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  text-align: center;
  color: #333;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 94px;
`;
const DeleteRoommateLine = styled.div`
  text-align: center;
  height: 58px;
  padding: 20px 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 500;
  line-height: 18px;
  color: #aa3106;
  background-color: #fcede8;
  width: 100%;
  margin-left: calc(-50vw + 50%);
`;
const ChatRoom = () => {
  const [isChatBottomClick, setIsChatBottomClick] = useState(false);
  const [isBtsOpen, setIsBtsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleChatBottom = () => {
    setIsChatBottomClick(!isChatBottomClick);
  };

  const client = useRef();
  const content = useRef();
  const scrollRef = useRef();

  let { roomId } = useParams();
  let location = useLocation(); //add
  const navigate = useNavigate();

  const [roomInfo, setRoomInfo] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [deleteState, setDeleteState] = useState(false);

  useEffect(() => {
    async function fetchChatRoom() {
      try {
        const res = await API.get("/chat/find?roomId=" + roomId);
        setRoomInfo(res.data);
        setChatList(res.data.histories);
        setLoading(false);
        if (location.state?.status === "deleteRommate") {
          setDeleteState(true);
        }
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchChatRoom();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
}, [chatList]);

  useEffect(() => {
    connect();

    return () => disconnect();
  }, [roomInfo]);

  // 베포용
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'wss://server.my-geeks.com/stomp',
      onConnect: () => {
        subscribe();
      }
    });

    client.current.webSocketFactory = function () {
      return new SockJS("https://server.my-geeks.com/stomp");
    };

    client.current.activate();
  };

  //로컬용
  // const connect = () => {
  //   client.current = new StompJs.Client({
  //     brokerURL: "ws://localhost:8080/stomp",
  //     onConnect: () => {
  //       subscribe();
  //     },
  //   });

  //   client.current.webSocketFactory = function () {
  //     return new SockJS("http://localhost:8080/stomp");
  //   };

  //   client.current.activate();
  // };

  const publish = async () => {
    if (!client.current.connected || content.current.value.length === 0) return;

    await client.current.publish({
      destination: "/app/message",
      body: JSON.stringify({
        roomid: roomId,
        user: roomInfo.user,
        content: content.current.value,
        createAt: null,
      }),
    });

    content.current.value = "";
  };

  const subscribe = () => {
    console.log("subscribe: " + client.current.connected);
    client.current.subscribe(`/subscribe/notice/${roomId}`, (body) => {
      const json_body = JSON.parse(body.body);
      console.log(body);
      setChatList((_chat_list) => [..._chat_list, json_body]);
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const deleteRoommate = async () => {
    content.current.value = "$%#deleteRoommate";
    await publish();

    try {
      const res = await API.delete(`/roommate/quit/${roomInfo?.roommateId}`);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }

    setDeleteState(false);
  };
  const handleQuit = () => {
    async function fetchQuit() {
      try {
        const res = await API.get(
          "/chat/removechat?roomId=" + roomInfo?.roomId
        );
        console.log(res.data);
        if (res.data === "Success") navigate("/chat");
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuit();
  };

  const handleDeclaration = () => {
    setIsBtsOpen(false);
    setShowPopup(true);
  }

  return (
    loading ? <Loading/> : (
      <c.Totalframe>
      <c.ScreenComponent ref={scrollRef}>
        <c.SubScreen>
          <ChatHeader>
            <GoBack />
            <c.DirectionCol>
              <Name>{roomInfo?.opponentUser}</Name>
              <Major>
                {roomInfo?.major + " · " + roomInfo?.studentID + "학번"}
              </Major>
            </c.DirectionCol>
            <DotsImg src={Dots} onClick={() => setIsBtsOpen(true)} />
          </ChatHeader>
          <Popup
                message={`신고가 정상적으로 접수되었어요`}
                setShowPopup={setShowPopup}
                isShowPopup={showPopup}
                bottom={`20.5`}/>
          <BottomSheet
            height={`max-content`}
            padding={`12px 20px 0 20px`}
            isOpen={isBtsOpen}
            interaction={true}
          >
            <MenuBox onClick={() => handleQuit()}>{`나가기`}</MenuBox>
            <MenuBox onClick={()=>handleDeclaration()}>{`신고하기`}</MenuBox>
            <CloseBtn onClick={() => setIsBtsOpen(false)}>{`닫기`}</CloseBtn>
          </BottomSheet>
          {/* chat */}
          <ChatContent>
            {deleteState && (
              <FinishRoommate
                onClick={() => deleteRoommate()}
                description={false}
                choiceMent={"룸메이트 그만두기"}
                noOnClick={() => navigate(-1)}
                ment={`룸메이트를 그만두려면\n아래 버튼을 눌러\n상대방에게 알려주세요`}
              />
            )}
            {chatList?.map((chat, index) => (
              <>
                {index === 0 ||
                moment(chat.createAt).format("YYYY MM DD") !==
                  moment(chatList[index - 1].createAt).format("YYYY MM DD") ? (
                  <Date>{moment(chat.createAt).format("MM월 DD일")}</Date>
                ) : null}
                {chat.message === "$%#deleteRoommate" ? (
                  <DeleteRoommateLine>{`룸메이트가 끊겼어요`}</DeleteRoommateLine>
                ) : (
                  <div>
                    {roomInfo?.user == chat?.sender ? (
                      <MyChat
                        time={moment(chat.createdAt).format("A h:mm")}
                        chat={chat.message}
                      />
                    ) : (
                      <OtherChat
                        profileImg={BasicProfile}
                        time={moment(chat.createdAt).format("A h:mm")}
                        chat={chat.message}
                      />
                    )}
                  </div>
                )}
              </>
            ))}
          </ChatContent>
        </c.SubScreen>
      </c.ScreenComponent>
      <ChatBottom isBottomOpen={isChatBottomClick}>
        <c.Flex>
          {/* <Add src={Plus} onClick={() => setIsChatBottomClick(true)} /> */}
          <InputMsgBox>
            <c.Flex>
              <InputMsg ref={content} placeholder="메시지 입력하기" />
              <SendImg src={Send} onClick={publish} />
            </c.Flex>
          </InputMsgBox>
        </c.Flex>
        {/* {isChatBottomClick ? <c.Flex>
          <PlusMenu>
            <ChatBottomMenu icon={Photo} iconText={`사진`} />
            <ChatBottomMenu icon={Video} iconText={`동영상`} />
            <ChatBottomMenu icon={Camera} iconText={`카메라`} />
            <ChatBottomMenu icon={Rule} iconText={`생활 규칙`} />
          </PlusMenu>

        </c.Flex> : null} */}
      </ChatBottom>
    </c.Totalframe>
    )    
  );
};
export default ChatRoom;
