import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import Condition from "../../components/Rommate/Condition";
import OtherProfile from "../../components/Main/OtherProfile";
import NavigationBar from "../../components/Main/NavigationBar";
import BottomSheet from "../../components/Rommate/BottomSheet";
import basicProfile from "../../assets/img/MyPage/basicProfile.svg";

const TitleText = styled.div`
  margin-top: 3.31vh;
  margin-bottom: 3.79vh;
  color: #333;
  white-space: pre-wrap;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const ConditionScroll = styled.div`
display: flex;
overflow-x: auto;
`

;
const FindRommate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <c.Totalframe main={true}>
      <c.ScreenComponent>
        <c.SubScreen>
          <Header />
          <TitleText>{`내가 원하는 기준으로\n룸메이트를 찾아보세요`}</TitleText>
          <ConditionScroll onClick={()=>setIsOpen(true)}>
            <Condition condition={`전공`} />
            <Condition condition={`학번`} />
            <Condition condition={`흡연`} />
            <Condition condition={`잠버릇`} />
            <Condition condition={`외출`} />
            <Condition condition={`장소`} />
            <Condition condition={`성향`} />
          </ConditionScroll>
          <OtherProfile
            userprofile={basicProfile}
            nickName={`눈누난나`}
            major={`스마트정보통신`}
            id={`19학번`}
            score={`90`}
          />
        </c.SubScreen>
      </c.ScreenComponent>
      {isOpen ? <BottomSheet close={()=>setIsOpen(false)}/> : <NavigationBar type={`rommate`} />}
    </c.Totalframe>
  );
};
export default FindRommate;
