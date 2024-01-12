import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";

const NoticeTop = styled.div`
    display: flex;
    margin-bottom: 5.68vh;
`;
const NoticeText = styled.div`

  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const NoticeDate = styled.div`
  color: #b7b7b7;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 4px;
`;
const Br = styled.div`
    height:1px;
    background-color: #EFEFEF;
    margin: 2.36vh 0;
`;
const Notice = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`공지사항`}/>
        <NoticeText>{`편리한 채팅을 위한 새로운 기능이 생겼어요 두줄은 이렇게 써져요`}</NoticeText>
        <NoticeDate>{`2023.09.25`}</NoticeDate>
        <Br/>
        <NoticeText>{`이제 00대학교도 긱스를 사용할 수 있어요`}</NoticeText>
        <NoticeDate>{`2023.09.25`}</NoticeDate>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default Notice;
