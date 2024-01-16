import React from "react";
import styled from "styled-components";
import CommentIcon from "../../assets/img/Community/comment.svg";

const CommentBox = styled.div`
  display: flex;
  padding: 12px 0px;
`;
const CommentImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
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
const Comment = (props) => {
  return (
    <CommentBox>
      <CommentImg src={CommentIcon} />
      <CommentNum>댓글 {props.number}</CommentNum>
    </CommentBox>
  );
};
export default Comment;
