import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import PostInfo from "../../components/Community/PostInfo";
import PostContent from "../../components/Community/PostContent";
import LikeAndStarBtn from "../../components/Community/LikeAndStarBtn";
import Dot from "../../assets/img/Community/dots.svg";
import Like from "../../assets/img/Community/like.svg";
import Star from "../../assets/img/Community/star.svg";
const Post = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
          <HeaderMenu>
            <img src={Dot}/>
          </HeaderMenu>
          <PostInfo username={`배고파`} uploadtime={`10분전`}></PostInfo>
          <PostContent title={`아이스크림 먹고 싶다`} content={`진짜 맛있는 아이스크림...\n근데 배불러...\n딱 한 입만 먹고싶다 초코맛 셀렉션 뭔지 알지...\n아니면 초코케이크 딱 한 입...\n🍨🍰`}></PostContent>
          <c.Flex>
            <LikeAndStarBtn icon={Like}></LikeAndStarBtn>
            <LikeAndStarBtn icon={Star} text={`스크랩`} marginLeft={`2.05vw`}></LikeAndStarBtn>
          </c.Flex>
          <Br/>
        <c.SubScreen>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Post;
