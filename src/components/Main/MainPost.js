import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import CommentIcon from "../../assets/img/Home/mainComment.svg";
import LikeIcon from "../../assets/img/Home/mainLike.svg";

const MainPostTotal = styled.div`
  margin-bottom: ${(props) => props.marginBottom};
`;
const PostText = styled.div`
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
`;
const PostContent = styled.div`
  overflow: hidden;
  color: #525252;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 4px;
`;
const Icons = styled.div`
  display: flex;
  margin-left: ${(props)=>props.isComment ? '3.07vw' : '1.53vw'};
`;
const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 1px;
`;
const IconTxt = styled.div`
  color: ${(props)=>props.isComment ? '#EC5062' : '#2B75CB'};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UploadTime = styled.div`
  color: #b7b7b7;
  margin-top: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
`;
const MainPost = (props) => {
  return (
    <MainPostTotal marginBottom={props.marginBottom} onClick={props.onClick}>
      <c.Flex>
        <PostText>{props.text}</PostText>
        <Icons isComment={true}>
          <Icon src={CommentIcon} />
          <IconTxt isComment={false}>{props.comment}</IconTxt>
        </Icons>
        <Icons isComment={false}>
          <Icon src={LikeIcon} />
          <IconTxt isComment={true}>{props.likeCnt}</IconTxt>
        </Icons>
      </c.Flex>
      <PostContent>{props.postContent}</PostContent>
      <UploadTime>{props.UploadTime}</UploadTime>
    </MainPostTotal>
  );
};
export default MainPost;
