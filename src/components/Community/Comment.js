import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import PostInfo from "./PostInfo";
import CommentIcon from "../../assets/img/Community/comment.svg";
import DeleteComment from "../../assets/img/Community/deleteComment.svg";
import Dots from "../../assets/img/Community/grayDots.svg";
import DeleteDots from "../../assets/img/Community/deleteThreeDot.svg";

const CommentBox = styled.div`
  height: max-content;
  width: ${(props)=>props.isRecomment || props.recommentFocus ? `100vw` : `100%`};
  padding-top: 8px;
  padding-bottom: 16px;
  pointer-events: ${(props)=>props.deleted && 'none' };
  padding-left: ${(props)=>(props.isRecomment) ? '8.17vw' : props.recommentFocus && '5.12vw'};
  padding-right: ${(props)=>(props.isRecomment || props.recommentFocus) && '5.12vw'};
  background-color: ${(props)=>props.isRecomment ? '#F7F7F7' : props.recommentFocus ? '#FFFBEE' : '#fff'};
  margin-left: ${(props)=>(props.isRecomment || props.recommentFocus) && `calc(-50vw + 50%)`};
`;
const ThreeDots = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 1.535vw;
`;
const CommentImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 1.535vw;
`;
const CommentText = styled.div`
  color: ${(props)=>props.deleted ? '#D0D0D0' : '#333'};
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
    <CommentBox deleted={props.deleted} paddingLeft={props.paddingLeft} isRecomment={props.recomment} paddingRight={props.paddingRight} recommentFocus={props.recommentFocus}>
      <c.SpaceBetween>
        <PostInfo
          profileImg={props.postInfo.profileImg}
          username={props.postInfo.username}
          uploadtime={props.postInfo.uploadtime}
          deleted={props.deleted}/>
        <Icons>
          {props.isComment && <CommentImg src={props.deleted ? DeleteComment : CommentIcon} onClick={props.wirteChild}/>}
          <ThreeDots src={props.deleted ? DeleteDots : Dots} onClick={props.deleteComment}/>
        </Icons>
      </c.SpaceBetween>
      <CommentText deleted={props.deleted}>{props.comment}</CommentText>
    </CommentBox>
  );
};
export default Comment;
