import React from "react";
import styled from "styled-components";

const GrayBox = styled.div`
  width: max-content;
  padding: 8px 3.07vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: ${(props)=>props.text && '4px'};
  color: ${(props)=>props.isStar ? '#D68D00' : props.isLike ? '#D8384B':'#707070'};
`;
const LikeAndStarBtn = (props) => {
  return (
    <GrayBox marginLeft={props.marginLeft} onClick={props.onClick}>
      <Icon src={props.icon} />
      <IconText text={props.text} isStar={props.isStar} isLike={props.isLike}>{props.text}</IconText>
    </GrayBox>
  );
};
export default LikeAndStarBtn;
