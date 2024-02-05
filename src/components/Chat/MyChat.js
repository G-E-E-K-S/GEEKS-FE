import React from "react";
import styled from "styled-components";

const ChatBubble = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;
const Time = styled.div`
  color: #b7b7b7;
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 16px;
  margin-right: 1.02vw;
  display: flex;
  align-items: flex-end;
`;
const ChatText = styled.div`
  max-width: 64.61vw;
  padding: 1.18vh 3.58vw;
  border-radius: 12px;
  background: #ffd540;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
`;
const MyChat = (props) => {
  return (
    <ChatBubble>
      <Time>{props.time}</Time>
      <ChatText>{props.chat}</ChatText>
    </ChatBubble>
  );
};
export default MyChat;
