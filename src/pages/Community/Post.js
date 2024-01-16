import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import PostInfo from "../../components/Community/PostInfo";
import PostContent from "../../components/Community/PostContent";
import LikeAndStarBtn from "../../components/Community/LikeAndStarBtn";
import CommentCnt from "../../components/Community/CommentCnt";
import Comment from "../../components/Community/Comment";
import Dot from "../../assets/img/Community/dots.svg";
import Like from "../../assets/img/Community/like.svg";
import Star from "../../assets/img/Community/star.svg";
import Send from "../../assets/img/Chat/send.svg";

const InputCommentBox = styled.div`
  height: 144px;
  padding: 14px 2.36vw;
  border-top: 1px solid #efefef;
  background: #fff;
`;
const TotalInput = styled.div`
  border-radius: 24px;
  background: #f7f7f7;
  padding: 10px 3.07vw 10px 4.1vw;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const InputComment = styled.input`
  outline: none;
  border: none;
  background-color: #f7f7f7;
  width: 100%;
  &::placeholder {
    color: #b7b7b7;
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
  }
`;
const Post = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <HeaderMenu>
            <img src={Dot} />
          </HeaderMenu>
          <PostInfo username={`배고파`} uploadtime={`10분전`}></PostInfo>
          <PostContent
            title={`아이스크림 먹고 싶다`}
            content={`진짜 맛있는 아이스크림...\n근데 배불러...\n딱 한 입만 먹고싶다 초코맛 셀렉션 뭔지 알지...\n아니면 초코케이크 딱 한 입...\n🍨🍰`}
          ></PostContent>
          <c.Flex>
            <LikeAndStarBtn icon={Like}></LikeAndStarBtn>
            <LikeAndStarBtn
              icon={Star}
              text={`스크랩`}
              marginLeft={`2.05vw`}
            ></LikeAndStarBtn>
          </c.Flex>
          <Br />
          <CommentCnt number={`2`} />
          <Comment
            postInfo={{ username: "익명", uploadtime: "10분전" }}
            comment={`아니면 티코`}
          />
          <Comment
            paddingLeft={`8.17vw`}
            recomment={true}
            postInfo={{ username: "익명", uploadtime: "10분전" }}
            comment={`아니면 티코`}
          />
        </c.SubScreen>
      </c.ScreenComponent>
      <InputCommentBox>
        <TotalInput>
          <InputComment placeholder="댓글을 입력하세요" />
          <img src={Send} />
        </TotalInput>
      </InputCommentBox>
    </c.Totalframe>
  );
};

export default Post;
