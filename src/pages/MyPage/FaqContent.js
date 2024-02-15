import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import * as c from "../../components/Common/CommonStyle";
import FaqQuestion from "../../components/MyPage/FaqQuestion";
import Header from "../../components/MyPage/Header";
import NoticeIcon from "../../assets/img/MyPage/FAQ/notice.svg";
import DetailsFaq from "../../JSON/DetailFaq.json";
import Group from "../../assets/gif/round.gif";

const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #efefef;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
`;
const NoticeImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;
const Notice = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  color: #0e7c7c;
`;
const Content = styled.div`
  margin-top: 24px;
  white-space: pre-wrap;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #525252;
`;
const Date = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #b7b7b7;
  margin-top: 24px;
`;
const Important = styled(Content)`
  color: #cb3d0b;
`;
const Button = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #ffc700;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-top: 24px;
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
const IMG = styled.img`
  margin-top: 8px;
  width: 100%;
`;
const GIF = styled.img`
  width: 100%;
`;
const FaqContent = () => {
  let { pageNum, type } = useParams();
  let navigate = useNavigate();
  return (
    <c.Totalframe>
      <c.ScreenComponent style={{paddingBottom : `49px`}}>
        <Header />
        <Title>{DetailsFaq.faq[type][pageNum].postTitle}</Title>
        <c.Flex>
        {DetailsFaq.faq[type][pageNum].notice &&
        <>
          <NoticeImg src={NoticeIcon} />
          <Notice>{DetailsFaq.faq[type][pageNum].notice}</Notice>
        </>
        }
        </c.Flex>
        {(type === 'community' && pageNum == 3) && <GIF src={Group}/>}
        <Content>{DetailsFaq.faq[type][pageNum].content}</Content>
        {DetailsFaq.faq[type][pageNum].detailContent?.map((val,index) => 
          <>
            <Content>{val}</Content>
            <IMG src={process.env.REACT_APP_BUCKET_BASEURL + "FAQ/" + DetailsFaq.faq[type][pageNum].image[index] + ".svg"}/>
          </>
        )}
        <Important>{DetailsFaq.faq[type][pageNum].important}</Important>
        {/* {DetailsFaq.faq.community[pageNum].button} */}
        {type === "community" && pageNum == "3" && (
          <Button onClick={()=>navigate('/opengroup')}>{`더 자세히 알아보기`}</Button>
        )}
        <Date>{DetailsFaq.faq[type][pageNum].date}</Date>
        <AskBox>
          <AskText>궁금증이 풀리지 않으셨나요?</AskText>
          <a href="https://forms.gle/jhknCXQijwwFbM1a9">
            <MiniAskBox>문의하기</MiniAskBox>
          </a>
        </AskBox>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default FaqContent;
