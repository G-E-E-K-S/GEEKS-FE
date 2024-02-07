import React from "react";
import styled from "styled-components";
import Header from "./Header";

const NoticeName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
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
const NoticePage = (props) => {
  return (
    <>
      <Header />
      <NoticeName>{props.NoticeName}</NoticeName>
      <NoticeDate>{props.NoticeDate}</NoticeDate>
      <Line />
      <NoticeContent>{props.NoticeContent}</NoticeContent>
    </>
  );
};
export default NoticePage;
