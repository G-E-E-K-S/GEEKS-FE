import React from "react";
import styled from "styled-components";
import CommentIcon from "../../assets/img/Community/comment.svg";

const CommentBox = styled.div`
  display: flex;
  padding-top: 12px;
  margin-bottom: 12px;
`;
const CommentImg = styled.img`
  margin: auto 0;
  width: 16px;
  height: 16px;
`;
const CommentNum = styled.div`
  color: #949494;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-left: 6px;
`;
const CommentCnt = (props) => {
  return (
    <CommentBox>
      <CommentImg src={CommentIcon} />
      <CommentNum>댓글 {props.number}</CommentNum>
    </CommentBox>
  );
};
export default CommentCnt;
