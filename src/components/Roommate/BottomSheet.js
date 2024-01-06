import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import LifeStyle from "../Main/LifeStyle";
import CloseModal from "../../assets/img/Join/closeModal.svg";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 1;
`;
const TotalBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  width: 100vw;
  bottom: 0px;
  height: 84.83vh;
  white-space: wrap;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  margin: 2.84vh 5.12vw 0 5.12vw;
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.84vh;
`;
const Title = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;
const BottomSheet = (props) => {
  const [resetStat, setResetStat] = useState(false);
  const [isMajor, setIsMajor] = useState(null);
  const [isSmoke, setIsSmoke] = useState(false);
  const [isHabit, setIsHabit] = useState(false);
  const [isEar, setIsEar] = useState(null);
  const [isSleep, setIsSleep] = useState(null);
  const [isWakeUp, setIsWakeUp] = useState(null);
  const [isOut, setIsOut] = useState(null);
  const [isCleaning, setIsCleaning] = useState(null);
  const [isTendency, setIsTendency] = useState(null);
  return (
    <div>
      <ModalBackground />
      <TotalBottomSheet>
        <Content>
          <Titles>
            <Title>룸메이트 기준을 직접 설정하세요</Title>
            <img src={CloseModal} onClick={props.close} />
          </Titles>
          {/* 성향 리스트 */}
          <LifeStyle
            lifeStyleText={`전공`}
            lifeStyle={[ { "같은 전공": true }, { "같은 단과대": false },{ 타전공: false }]}
            resetStat={resetStat}
            lifeStyleSection={setIsSmoke}/>
          <LifeStyle
            lifeStyleText={`흡연`}
            lifeStyle={[{ 흡연자: true }, { 비흡연자: false }]}
            resetStat={resetStat}
            lifeStyleSection={setIsSmoke}/>
          <LifeStyle
            lifeStyleText={`잠버릇`}
            lifeStyle={[{ "잠버릇 있어요": true }, { "잠버릇 없어요": false }]}
            resetStat={resetStat}
            lifeStyleSection={setIsHabit}/>
          <LifeStyle
            lifeStyleText={`잠귀`}
            lifeStyle={[{ "귀 밝아요": "BRIGHT" }, { "귀 어두워요": "DARK" }]}
            resetStat={resetStat}
            lifeStyleSection={setIsEar}/>
          <LifeStyle
            lifeStyleText={`취침`}
            lifeStyle={[ { "일찍 자요": "EARLY" }, { "늦게 자요": "LATE" },{ "때마다 달라요": "RANDOM" }]}
            resetStat={resetStat}
            lifeStyleSection={setIsSleep}/>
          <LifeStyle
            lifeStyleText={`기상`}
            lifeStyle={[{ "일찍 일어나요": "EARLY" }, { "늦게 일어나요": "LATE" }, { "때마다 달라요": "RANDOM" }]}
            resetStat={resetStat}
            lifeStyleSection={setIsWakeUp}/>
          <LifeStyle
            lifeStyleText={`외출`}
            lifeStyle={[{ 집순이에요: "HOME" }, { 밖순이에요: "OUT" },{ "약속이 있으면 나가요": "PROMISE" }]}
            resetStat={resetStat}
            lifeStyleSection={setIsOut}/>
          <LifeStyle
            lifeStyleText={`청소`}
            lifeStyle={[{ "주기적으로 청소해요": "CLEAN" },{ "더러워지면 청소해요": "DIRTY" },{ "상대에게 맞춰요": "OPPONENT" }]}
            resetStat={resetStat}
            lifeStyleSection={setIsCleaning}/>
          <LifeStyle
            lifeStyleText={`성향`}
            lifeStyle={[{ "혼자 조용히 지내요": "ALONE" },{ "함께 놀고 싶어요": "TOGETHER" },{ "상대에게 맞춰요": "OPPONENT" }]}
            noShowLine={true}
            resetStat={resetStat}
            lifeStyleSection={setIsTendency}/>
        </Content>
      </TotalBottomSheet>
    </div>
  );
};
export default BottomSheet;
