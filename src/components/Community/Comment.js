import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import PostInfo from "./PostInfo";
import CommentIcon from "../../assets/img/Community/comment.svg";
import Dots from "../../assets/img/Community/grayDots.svg";

const CommentBox = styled.div`
  height: max-content;
  width: ${(props)=>props.isRecomment ? `100vw` : `100%`};
  padding-top: 8px;
  padding-bottom: 16px;
  padding-left: ${(props)=>props.paddingLeft};
  padding-right: ${(props)=>props.paddingRight};
  background-color: ${(props)=>props.isRecomment ? '#F7F7F7' : '#fff'};
  margin-left: ${(props)=>props.isRecomment && `calc(-50vw + 50%)`};
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
const Icons = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Comment = (props) => {
  return (
    <CommentBox paddingLeft={props.paddingLeft} isRecomment={props.recomment} paddingRight={props.paddingRight}>
      <c.SpaceBetween>
        <PostInfo
          profileImg={props.postInfo.profileImg}
          username={props.postInfo.username}
          uploadtime={props.postInfo.uploadtime}/>
        <Icons>
          <CommentImg src={CommentIcon} onClick={props.wirteChild}/>
          <ThreeDots src={Dots} />
        </Icons>
      </c.SpaceBetween>
      <CommentText>{props.comment}</CommentText>
    </CommentBox>
  );
};
export default Comment;
