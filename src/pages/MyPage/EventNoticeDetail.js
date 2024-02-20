import React, { useState } from "react";
import Header from "../../components/MyPage/Header";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import { useNavigate } from "react-router-dom";

const NoticeName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  white-space: pre-wrap;
`;
const Event = styled(NoticeName)`
  color: #d8384b;
  margin-right: 12px;
  white-space: nowrap;
`;
const NoticeDate = styled.div`
  font-size: 0.874rem;
  font-weight: 500;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 8px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #efefef;
  margin-bottom: 24px;
  margin-top: 24px;
`;
const NoticeContent = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #525252;
  white-space: pre-wrap;
`;
const NoticeBold = styled(NoticeContent)`
  font-weight: 700;
  margin-top: 20px;
`;
const Notice = styled(NoticeContent)`
  white-space: wrap;
  margin-top: ${(props)=>props.isFirst && '20px'};
`;
const Important = styled(Notice)`
  color: #cb3d0b;
`;
const GoEvent = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    background-color: #FFC700;
    margin-top: 24px;
`;
const EventNoticeDetail = () => {
  const navigate = useNavigate();
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <c.Flex>
          <Event>{`이벤트`}</Event>
          <NoticeName>{`긱스 이용 후기 작성하고 기숙사 웰컴 키트 받자!`}</NoticeName>
        </c.Flex>
        <NoticeDate>{`2024.02.21`}</NoticeDate>
        <Line />
        <NoticeContent>
          <NoticeBold>{`긱스 이용 후기를 작성하면 기숙사 웰컴 키트를 받을 수 있는 이벤트가 12일부터 시작돼요!`}</NoticeBold>
          <Notice isFirst={true}>{`긱스는 아직 완전한 서비스가 아닌 베타 버전의 서비스에요.더 좋은 서비스를 만들기 위해 여러분들의 의견이 필요해요!정성스레 써주신 의견을 바탕으로 더 좋은 서비스가 될 수 있도록 노력할게요.`}</Notice>
          <Important>{`자세한 사항은 ‘마이 탭>이벤트 배너’에서 확인하세요!`}</Important>
          <NoticeBold>{`이벤트 참여 대상`}</NoticeBold>
          <Notice>{`2024-1학기에 기숙사에서 생활하는 기숙사생들`}</Notice>
          <NoticeBold>{`이벤트 참여 기간`}</NoticeBold>
          <Notice>{`2024.02.12 - 02.28 금요일 23:59:59 까지`}</Notice>
          <NoticeBold>{`이벤트 참여 방법`}</NoticeBold>
          <Notice>{`‘마이 탭>이벤트 배너’ 에서 확인`}</Notice>
          <GoEvent onClick={()=>navigate('/reviewevent')}>{`이벤트 바로가기`}</GoEvent>
        </NoticeContent>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default EventNoticeDetail;
