import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ForwardArrow from "../../assets/img/Join/forwardArrow.svg";

const Box = styled.div`
  width: 100%;
  height: 45.49vh;
  padding: 2.36vh 5.12vw 3.79vh 5.12vw;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 3.79vh;
`;
const UserName = styled.div`
  white-space: pre-wrap;
  color: #1a1a1a;
  font-size: 1.5rem;

  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
`;
const FindRoommateBox = (props) => {
  return (
    <Box>
      <c.SpaceBetween>
        <UserName>
          {props.name}
          {`님과 딱맞는\n룸메이트를 찾아드려요`}
        </UserName>
        <ArrowImg src={ForwardArrow} />
      </c.SpaceBetween>
      {props.children}
    </Box>
  );
};
export default FindRoommateBox;
