import React from "react";
import styled from "styled-components";

const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icons = styled.img`
  height: 52px;
  width: 52px;
`;
const Text = styled.div`
  color: #707070;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  margin-top: 8px;
`;
const ChatBottomMenu = (props) => {
  return (
    <TotalBox>
      <Icons src={props.icon} />
      <Text>{props.iconText}</Text>
    </TotalBox>
  );
};

export default ChatBottomMenu;
