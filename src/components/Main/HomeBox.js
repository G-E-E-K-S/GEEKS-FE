import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ForwardArrow from "../../assets/img/Join/forwardArrow.svg";

const Box = styled.div`
  width: 100%;
  height: ${(props)=>props.height};
  padding: 2.36vh 5.12vw 3.79vh 5.12vw;
  background-color: #fff;
  border-radius: 20px;
  margin-top: ${(props)=>props.marginTop};
  margin-bottom: ${(props)=>props.marginBottom};
`;
const ContentName = styled.div`
  white-space: pre-wrap;
  color: #1a1a1a;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: ${(props)=>props.marginBottom}
`;
const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
`;
const HomeBox = (props) => {
  return (
    <Box height={props.height} marginTop={props.marginTop} marginBottom={props.marginBottom}>
      <c.SpaceBetween onClick={()=>props.onClick()}>
        <ContentName marginBottom={props.marginBottom}>{props.name}</ContentName>
        <ArrowImg src={ForwardArrow} />
      </c.SpaceBetween>
      {props.children}
    </Box>
  );
};
export default HomeBox;
