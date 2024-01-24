import React from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import MyCommunityList from "../../components/Community/MyCommunityList";
import ListIcon from "../../assets/img/Community/list.svg";
import StarIcon from "../../assets/img/Community/Mystar.svg";

const MyCommunity = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`마이 커뮤니티`}/>
        <MyCommunityList icon={ListIcon} listText={`커뮤니티 작성 내역`}/>
        <MyCommunityList icon={StarIcon} listText={`스크랩한 글`}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default MyCommunity;
