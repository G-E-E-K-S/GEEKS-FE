import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import NavigationBar from "../../components/Main/NavigationBar";
import SubTitle from "../../components/Main/SubTitle";
import ClubCategory from "../../components/Main/ClubCategory";
import ClubBox from "../../components/Main/ClubBox";
import FindRoommateBox from "../../components/Main/FindRoommateBox";
import checklist from "../../assets/img/Home/checkList.svg";
import rule from "../../assets/img/Home/Rule.svg";
import stayOut from "../../assets/img/Home/stayOut.svg";
import dormiNoti from "../../assets/img/Home/dormiNoti.svg";
import forwardArrow from "../../assets/img/Home/forwardArrow.svg";
import Close from "../../assets/img/Home/close.svg";
import chick from "../../assets/img/Join/chick.svg";

const System = styled.div`
  width: 100%;
  display: flex;
  margin: 4.26vh 1.28vw 0 1.28vw;
  & > :last-child {
    margin-right: 0; /* 마지막 이미지에는 간격을 적용하지 않음 */
  }
`;
const Icons = styled.div`
  width: 16.41vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 7.17vw;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Icon = styled.img`
  margin-bottom: 8px;
`;
const IconText = styled.div`
  color: #333;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const FindRoommateTxt = styled.div`
  white-space: pre-wrap;
  color: #707070;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 1.89vh;
`;
const EnrollRule = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background: #ffc700;
  margin-top: 1.89vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #1a1a1a;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
`;
const Club = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8.53vh;
  margin-bottom: 2.36vh;
`;
const Post = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8.53vh;
  margin-botton: 2.36vh;
`;
const ShowReviewBox = styled.div`
    width: 100%:
    height: 86px;
    padding: 20px 5.12vw;
    border-radius: 20px;
    background: #FCEDE8;
    margin-top: 24px;
`;
const ReviewTxt = styled.div`
  color: #1a1a1a;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 4px;
`;
const CloseImg = styled.img`
  width: 20px;
  height: 20px;
`;
const MoreSecurityTxt = styled.div`
  color: #525252;
  font-size: 0.875;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
const Home = () => {
  const [isShowReview, setIsSHowReiew] = useState(true);
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/liverule");
  };
  return (
    <c.Totalframe main={true}>
      <c.ScreenComponent>
        <c.SubScreen>
          <Header />
          <System>
            <Icons>
              <Icon src={checklist} />
              <IconText>체크리스트</IconText>
            </Icons>
            <Icons onClick={() => handlePage()}>
              <Icon src={rule} />
              <IconText>생활 규칙</IconText>
            </Icons>
            <Icons>
              <Icon src={stayOut} />
              <IconText>외박 신청</IconText>
            </Icons>
            <a
              href={"https://www.smu.ac.kr/dormi2/board/notice.do"}
              target="_blank"
            >
              <Icons>
                <Icon src={dormiNoti} />
                <IconText>기숙사 공지</IconText>
              </Icons>
            </a>
          </System>
          <FindRoommateBox name={`은진`}>
            {/* 이미지 삽입 */}
            <FindRoommateTxt>{`생활 습관을 등록하고\n나와 딱 맞는 룸메이트를 찾아보세요!`}</FindRoommateTxt>
            <EnrollRule>{`생활습관 등록하기`}</EnrollRule>
          </FindRoommateBox>
          {isShowReview && (
            <ShowReviewBox>
              <c.SpaceBetween>
                <ReviewTxt>{`긱스 이용 후기를 남겨주세요!`}</ReviewTxt>
                <CloseImg src={Close} onClick={() => setIsSHowReiew(false)} />
              </c.SpaceBetween>
              <MoreSecurityTxt>{`더 멋지게 보완해서 찾아올게요`}</MoreSecurityTxt>
            </ShowReviewBox>
          )}
          <Club>
            <SubTitle subtitle={`현재 가장 인기있는 모임이에요`} />
            <img src={forwardArrow} />
          </Club>
          <ClubCategory clubCategory={`배달`}></ClubCategory>
          <ClubBox
            profileImg={chick}
            nickName={`이소윤`}
            clubTitle={`같이 신전떡볶이 시키실 분 구해요`}
            JoinPerson={`8명`}
          />
          <Post>
            <SubTitle subtitle={`이런 글은 어떠세요?`} />
            <img src={forwardArrow} />
          </Post>
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`home`} />
    </c.Totalframe>
  );
};
export default Home;
