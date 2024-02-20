import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as c from "../../components/Common/CommonStyle";
import FaqQuestion from "../../components/MyPage/FaqQuestion";
import Header from "../../components/MyPage/Header";

const FAQTop = styled.div`
  display: flex;
  margin-bottom: 3.31vh;
  height: 52px;
  margin-top: 52px;
`;
const SearchBox = styled.div`
  display: flex;
  padding: 10px 3.07vw;
  border-radius: 8px;
  background: #f7f7f7;
  margin-bottom: 28px;
  margin-top: 20px;
`;
const SearchInput = styled.input`
  margin-left: 2.05vw;
  width: 100%;
  border: none;
  background-color: #f7f7f7;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b7b7b7;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
  }
`;
const TabMenu = styled.div`
  padding: 12px 5.12vw;
  color: ${(props) => (props.isLine ? "#333" : "#B7B7B7")};
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
const TotalTab =styled.div`
    display: flex;
    overflow-x : auto;
    &::-webkit-scrollbar {
      display: none;
    }
`;
const FAQ = () => {
  const [isSelect, setIsSelect] = useState("roommate");
  const ChangePage = (pageName) => {
    setIsSelect(pageName);
  };
  const navigate = useNavigate();
  const RoommateFaq = ['룸메이트를 끊고 싶어요','룸메이트 매칭 점수는 어떻게 매겨지나요?','보낸/받은 룸메이트 신청 내역이 사라졌어요','룸메이트 매칭은 어떤 과정으로 이루어지나요?'];
  const ChatFaq = ['대화창을 나가고 싶어요','대화창에서 사진은 어떻게 보내나요?'];
  const NoticeFaq = ['알림이 안 울려요'];
  const communityFaq = ['내가 쓴 글/댓글은 어디서 볼 수 있나요?','좋아요 누른 글은 어디서 볼 수 있나요?','스크랩 한 글은 어디서 볼 수 있나요?','모임은 무엇인가요?'];
  const etcFaq = ['홈 탭의 체크리스트는 무엇인가요?','홈 탭의 생활 규칙은 무엇인가요?','‘내 프로필 노출하기’는 무엇인가요?','외박신청은 어떻게 하는 건가요?','긱스는 어떻게 만들어졌나요?'];
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`자주 묻는 질문`} />
        {/* Tab */}
        <TotalTab>
          <TabMenu
            isLine={isSelect === "roommate"}
            onClick={() => ChangePage("roommate")}>
              {`룸메이트 찾기`}
          </TabMenu>
          <TabMenu
            isLine={isSelect === "chat"}
            onClick={() => ChangePage("chat")}>
              {`채팅`}
          </TabMenu>
          <TabMenu
            isLine={isSelect === "notice"}
            onClick={() => ChangePage("notice")}>
              {`알림`}
          </TabMenu>
          <TabMenu
            isLine={isSelect === "community"}
            onClick={() => ChangePage("community")}>
              {`커뮤니티`}
          </TabMenu>
          <TabMenu
            isLine={isSelect === "etc"}
            onClick={() => ChangePage("etc")}>
              {`기타`}
          </TabMenu>
        </TotalTab>
        {isSelect === "roommate" && (
          RoommateFaq.map((question,index)=>(
          <FaqQuestion faqtext={question} onClick={()=>navigate('/faq/roommate/' + index)}/>))
        )}
        {isSelect === "chat" && (
          ChatFaq.map((question,index)=>(<FaqQuestion faqtext={question} onClick={()=>navigate('/faq/chat/' +index)}/>))
        )}
        {isSelect === "notice" && (
          NoticeFaq.map((question,index)=>(<FaqQuestion faqtext={question} onClick={()=>navigate('/faq/notice/' +index)}/>))
        )}
        {isSelect === "community" && (
          communityFaq.map((question,index)=>(<FaqQuestion faqtext={question} onClick={()=>navigate('/faq/community/' +index)}/>))
        )}
        {isSelect === "etc" && (
          etcFaq.map((question,index)=>(<FaqQuestion faqtext={question} onClick={()=>navigate('/faq/etc/' +index)}/>))
        )}
        <AskBox>
          <AskText>궁금증이 풀리지 않으셨나요?</AskText>
          <a href="https://forms.gle/jhknCXQijwwFbM1a9" target="_blank">
            <MiniAskBox>문의하기</MiniAskBox>
          </a>
        </AskBox>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default FAQ;
