import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import LifeStyle from "../../components/Main/LifeStyle";
import reset from '../../assets/img/MyPage/reset.svg';

const SubTitleBox = styled.div`
    margin-top: 2.36vh;
    margin-bottom: 4.26vh;
`;
const BottomMenues = styled.div`
  display: flex;
  padding: 2.38vh; 20px 0px 20px;
  border-top: 1px solid #EFEFEF;
`;
const Reset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 114px;
  height: 56px;
  margin-right: 12px;
  background: #EFEFEF;

  color: #707070;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;
const ResetImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;
const Enroll = styled.div`
  display: flex;
  width: 224px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #F7F7F7;

  color: #B7B7B7;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
const LifeStyles = () => {
  const [resetStat, setResetStat] = useState(false);
  const [isClicked, setIsCliked] = useState(false);
  const handleReset = () => {
    setResetStat(!resetStat);
  }
  const handleButtonClick = () => {
    setIsCliked(!isClicked);
  }
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
            <GoBack/>
            <SubTitleBox>
                <SubTitle subtitle={`나의 생활 습관을\n등록해 보세요`}/>
            </SubTitleBox>
            <LifeStyle lifeStyleText={`흡연 여부`} lifeStyle={['흡연자에요','비흡연자에요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`잠버릇`} lifeStyle={['잠버릇 있어요','잠버릇 없어요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`잠귀`} lifeStyle={['귀 밝아요','귀 어두워요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`취침`} lifeStyle={['일찍 자요','늦게 자요','때마다 달라요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`기상`} lifeStyle={['일찍 일어나요','늦게 일어나요','때마다 달라요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`외출`} lifeStyle={['집순이에요','밖순이에요','본가 자주 가요','약속이 있으면 나가요','학교에 오래 있어요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`청소`} lifeStyle={['주기적으로 청소해요','더러워지면 청소해요','상대에게 맞춰요']} resetStat={resetStat}/>
            <LifeStyle lifeStyleText={`성향`} lifeStyle={['혼자 조용히 지내요','함께 놀고 싶어요','상대에게 맞춰요']} noShowLine={true} resetStat={resetStat}/>
        </c.SubScreen>
      </c.ScreenComponent>
      <BottomMenues>
        <Reset onClick={()=>handleReset()}>
          <ResetImg src={reset}/>
          초기화
        </Reset>
        <Enroll onClick={()=>handleButtonClick()} isClicked={isClicked}>등록하기</Enroll>
      </BottomMenues>
    </c.Totalframe>
  );
};
export default LifeStyles;
