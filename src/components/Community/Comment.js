import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import PostInfo from "./PostInfo";
import CommentIcon from "../../assets/img/Community/comment.svg";
import Dots from "../../assets/img/Community/grayDots.svg";

const CommentBox = styled.div`
  height: max-content;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: ${(props)=>props.paddingLeft};
  background-color: ${(props)=>props.isRecomment ? '#F7F7F7' : '#fff'};
`;
const ThreeDots = styled.img`
  width: 16px;
  height: 16px;
`;
const CommentImg = styled(ThreeDots)`
  margin-right: 3.07vw;
`;
const CommentText = styled.div`
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 9px;
`;
const Comment = (props) => {
  return (
    <CommentBox paddingLeft={props.paddingLeft} isRecomment={props.recomment}>
      <c.SpaceBetween>
        <PostInfo
          profileImg={props.postInfo.profileImg}
          username={props.postInfo.username}
          uploadtime={props.postInfo.uploadtime}
        />
        <c.FlexCenter>
          <CommentImg src={CommentIcon} />
          <ThreeDots src={Dots} />
        </c.FlexCenter>
      </c.SpaceBetween>
      <CommentText>{props.comment}</CommentText>
    </CommentBox>
  );
};
export default Comment;
