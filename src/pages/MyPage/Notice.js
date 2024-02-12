import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import NoticeJson from "../../JSON/notice.json";

const NoticeBox = styled.div`
  padding: 20px 0px;
`;
const NoticeText = styled.div`
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const NoticeEvent = styled(NoticeText)`
  color: #EC5062;
  margin-right: 12px;
  white-space: nowrap;
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
  height: 1px;
  background-color: #efefef;
`;
const Notice = () => {

  const navigate = useNavigate();
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`공지사항`} />
        <NoticeBox isFirst={true} onClick={()=>navigate('/notice/details/event')}>
          <c.Flex>
            <NoticeEvent>{`이벤트`}</NoticeEvent>
            <NoticeText>{`긱스 이용후기 작성하고 기숙사 웰컴 키트 받자!`}</NoticeText>
          </c.Flex>
          <NoticeDate>{`2024.02.12`}</NoticeDate>
        </NoticeBox>
        <Br />
        <NoticeBox onClick={()=>navigate('/notice/details/' + `${(NoticeJson.notice[0]?.noticeNum)}`)}>
          <NoticeText>{`긱스가 드디어 오픈했어요!`}</NoticeText>
          <NoticeDate>{`2024.02.12`}</NoticeDate>
        </NoticeBox>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default Notice;
