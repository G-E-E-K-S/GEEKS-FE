import React from "react";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import styled from "styled-components";
import 'moment/locale/ko';

const ScrapPost = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
      <Header subtitle={`스크랩한 글`}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default ScrapPost;
