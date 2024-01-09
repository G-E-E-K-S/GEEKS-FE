import React from "react";
import styled from "styled-components";

const ChatBubble = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.36vh;
`;
const UserProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 2.05vw;
`;
const Time = styled.div`
  color: #b7b7b7;
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 16px;
  margin-left: 1.02vw;
  display: flex;
  align-items: flex-end;
`;
const ChatText = styled.div`
  max-width: 64.61vw;
  padding: 1.18vh 3.58vw;
  border-radius: 12px;
  background: #f7f7f7;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
`;
const OtherChat = (props) => {
  return (
    <ChatBubble>
      <UserProfile src={props.profileImg} />
      <ChatText>{props.chat}</ChatText>
      <Time>{props.time}</Time>
    </ChatBubble>
  );
};
export default OtherChat;
