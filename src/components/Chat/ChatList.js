import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const TotalChat = styled.div`
  width: 100%;
  height: 88px;
  padding: 19px 0;
  border-bottom: 1px solid #efefef;
`;
const ChatProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const ChatContent = styled.div`
  margin-left: 3.07vw;
  width: 100%;
`;
const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  //   사진있으면 179 없으면 237
`;
const Date = styled.div`
  color: #b7b7b7;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-left: 2.05vw;
  display: flex;
  align-items: center;
`;
const FinalChat = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #707070;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 0.71vh;
  width: 51.28vw;
`;
const Num = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #cb3d0b;
  margin-top: 0.71vh;

  color: #fff;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatList = (props) => {
  return (
    <TotalChat onClick={props.onClick}>
      <c.Flex>
        <ChatProfile src={props.chatprofile} />
        <ChatContent>
          <c.Flex>
            <Name>{props.name}</Name>
            <Date>{props.prevDate}</Date>
          </c.Flex>
          <c.SpaceBetween>
            <FinalChat>{props.chat}</FinalChat>
            {props.noneReadCnt != null ? <Num>{props.noneReadCnt}</Num> : null}
          </c.SpaceBetween>
        </ChatContent>
      </c.Flex>
    </TotalChat>
  );
};
export default ChatList;
