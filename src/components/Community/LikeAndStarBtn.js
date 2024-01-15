import React from "react";
import styled from "styled-components";

const GrayBox = styled.div`
  width: max-content;
  padding: 8px 3.07vw;
  display: flex;
  margin-bottom: 2.6vh;
  margin-left: ${(props)=>props.marginLeft};
  margin-top: 2.36vh;
  border-radius: 8px;
  background: #f7f7f7;
  
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const IconText = styled.div`
  margin-left: 4px;
`;
const LikeAndStarBtn = (props) => {
  return (
    <GrayBox marginLeft={props.marginLeft}>
      <Icon src={props.icon} />
      <IconText>{props.text}</IconText>
    </GrayBox>
  );
};
export default LikeAndStarBtn;
