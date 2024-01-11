import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
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
  width: 5.12vw;
  height: 20px;
  margin-right: 4px;
`;
const Enroll = styled.div`
  display: flex;
  width: 57.43vw;
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
  const [isSmoke, setIsSmoke] = useState(false);
  const [isHabit, setIsHabit] = useState(false);
  const [isEar, setIsEar] = useState(null);
  const [isSleep, setIsSleep] = useState(null);
  const [isWakeUp, setIsWakeUp] = useState(null);
  const [isOut, setIsOut] = useState(null);
  const [isCleaning, setIsCleaning] = useState(null);
  const [isTendency, setIsTendency] = useState(null);


  const handleReset = () => {
    setResetStat(!resetStat);
  }
  const handleButtonClick = () => {
    setIsCliked(!isClicked);
    async function fetchLifeStyle() {
      try {
        const res = await axios.post("http://127.0.0.1:8080/detail/register", {
          'smoking': isSmoke,
          'habit': isHabit,
          'ear': isEar,
          'sleep': isSleep,
          'wakeup': isWakeUp,
          'out': isOut,
          'cleaning': isCleaning,
          'tendency': isTendency,
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLifeStyle();
  }
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
            <GoBack/>
            <SubTitleBox>
                <SubTitle subtitle={`나의 생활 습관을\n등록해 보세요`}/>
            </SubTitleBox>
            <LifeStyle lifeStyleText={`흡연 여부`} lifeStyle={[{'흡연자에요': true},{'비흡연자에요': false}]} resetStat={resetStat} lifeStyleSection={setIsSmoke}/>
            <LifeStyle lifeStyleText={`잠버릇`} lifeStyle={[{'잠버릇 있어요' : true},{'잠버릇 없어요' : false}]} resetStat={resetStat} lifeStyleSection={setIsHabit}/>
            <LifeStyle lifeStyleText={`잠귀`} lifeStyle={[{'귀 밝아요' : 'BRIGHT'},{'귀 어두워요' : 'DARK'}]} resetStat={resetStat} lifeStyleSection={setIsEar}/>
            <LifeStyle lifeStyleText={`취침`} lifeStyle={[{'일찍 자요': 'EARLY'},{'늦게 자요' : 'LATE'},{'때마다 달라요' : 'RANDOM'}]} resetStat={resetStat} lifeStyleSection={setIsSleep}/>
            <LifeStyle lifeStyleText={`기상`} lifeStyle={[{'일찍 일어나요' : 'EARLY'},{'늦게 일어나요' : 'LATE'},{'때마다 달라요' : 'RANDOM'}]} resetStat={resetStat} lifeStyleSection={setIsWakeUp}/>
            <LifeStyle lifeStyleText={`외출`} lifeStyle={[{'집순이에요' : 'HOME'},{'밖순이에요' : 'OUT'},{'약속이 있으면 나가요' : 'PROMISE'}]} resetStat={resetStat} lifeStyleSection={setIsOut}/>
            <LifeStyle lifeStyleText={`청소`} lifeStyle={[{'주기적으로 청소해요' : 'CLEAN'},{'더러워지면 청소해요' : 'DIRTY'},{'상대에게 맞춰요' : 'OPPONENT'}]} resetStat={resetStat} lifeStyleSection={setIsCleaning}/>
            <LifeStyle lifeStyleText={`성향`} lifeStyle={[{'혼자 조용히 지내요' : 'ALONE'},{'함께 놀고 싶어요' : 'TOGETHER'},{'상대에게 맞춰요' : 'OPPONENT'}]} noShowLine={true} resetStat={resetStat} lifeStyleSection={setIsTendency}/>
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
