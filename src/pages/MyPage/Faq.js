import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import FaqRommate from "./FaqRommate";
import SearchImg from "../../assets/img/MyPage/search.svg";

const FAQTop = styled.div`
  display: flex;
  margin-bottom: 3.31vh;
`;
const SearchBox = styled.div`
  display: flex;
  padding: 10px 3.07vw;
  border-radius: 8px;
  background: #f7f7f7;
  margin-bottom: 3.9vh;
`;
const SearchInput = styled.input`
  margin-left: 2.05vw;
  width: 100%;
  border: none;
  background-color: #f7f7f7;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: #b7b7b7;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
  }
`;
const TabMenu = styled.div`
  padding: 12px 5.12vw;
  color: ${(props) => (props.isLine ? "#333" : "#efefef")};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isLine ? " 2px solid #333" : "1px solid #efefef"};
  margin-bottom: 8px;
`;
const AskBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  background: #f7f7f7;
  padding: 12px 5.12vw;
  margin-top: 4.26vh;
`;
const AskText = styled.div`
  display: flex;
  align-items: center;
  color: #707070;
  font-size: 1rem;
  font-weight: 500;
`;
const MiniAskBox = styled.div`
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: #fff;
  padding: 12px 4.1vw;
  color: #333;
  font-size: 0.875rem;
  font-weight: 600;
`;
const FAQ = () => {
  const [isSelect, setIsSelect] = useState("rommate");
  const ChangePage = (pageName) => {
    setIsSelect(pageName);
  };
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <FAQTop>
          <GoBack />
          <SubTitle subtitle={`자주 묻는 질문`} />
        </FAQTop>
        <SearchBox>
          <img src={SearchImg} />
          <SearchInput placeholder={`궁금한 것을 검색해 보세요`} />
        </SearchBox>
        {/* Tab */}
        <c.Flex>
          <TabMenu
            isLine={isSelect === "rommate"}
            onClick={() => ChangePage("rommate")}
          >{`룸메이트 찾기`}</TabMenu>
          <TabMenu
            isLine={isSelect === "chat"}
            onClick={() => ChangePage("chat")}
          >{`채팅`}</TabMenu>
          <TabMenu
            isLine={isSelect === "notice"}
            onClick={() => ChangePage("notice")}
          >{`알림`}</TabMenu>
          <TabMenu
            isLine={isSelect === "community"}
            onClick={() => ChangePage("community")}
          >{`커뮤니티`}</TabMenu>
        </c.Flex>
        {isSelect === "rommate" && (
          <FaqRommate faqtext={`룸메이트 신청을 취소하고 싶어요`} />
        )}
        <AskBox>
          <AskText>궁금증이 풀리지 않으셨나요?</AskText>
          <MiniAskBox>문의하기</MiniAskBox>
        </AskBox>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default FAQ;
