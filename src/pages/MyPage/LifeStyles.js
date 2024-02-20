import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ColHeaderMenu from "../../components/Common/ColHeaderMenu";
import LifeStyle from "../../components/Main/LifeStyle";
import reset from '../../assets/img/MyPage/reset.svg';
import Loading from "../Loading";

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  white-space: pre-wrap;
  margin-top: 20px;
  margin-bottom: 36px;
`;
const BottomMenues = styled.div`
  display: flex;
  width: 100%;
  padding: 20.17px 5.12vw 20.5px 5.12vw;
  border-top: 1px solid #EFEFEF;
  position: fixed;
  bottom: 0;
  background-color:#FFF;
`;
const Reset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 29.23vw;
  height: 56px;
  margin-right: 12px;
  background: #EFEFEF;

  color: #707070;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  &:active{
    background: #D0D0D0;
  }
`;
const ResetImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3.07vw;
`;
const Enroll = styled.div`
  display: flex;
  width: 57.43vw;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${(props)=>props.isClicked ? '#FFC700' : '#F7F7F7'};

  color: ${(props)=>props.isClicked ? '#333' : '#B7B7B7'};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
const LifeStyles = () => {
  const [isClicked, setIsCliked] = useState(false);
  const [isSmoke, setIsSmoke] = useState(null);
  const [isHabit, setIsHabit] = useState(null);
  const [isEar, setIsEar] = useState(null);
  const [isSleep, setIsSleep] = useState(null);
  const [isWakeUp, setIsWakeUp] = useState(null);
  const [isOut, setIsOut] = useState(null);
  const [isCleaning, setIsCleaning] = useState(null);
  const [isTendency, setIsTendency] = useState(null);
  const [receiveData, setReceiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleReset = () => {
    setIsSmoke(null);
    setIsHabit(null);
    setIsEar(null);
    setIsSleep(null);
    setIsWakeUp(null);
    setIsOut(null);
    setIsCleaning(null);
    setIsTendency(null);
    setIsCliked(false);
  }
  useEffect(()=>{
    async function fetchReceiveData(){
      try{
          const res = await API.get("/detail/send");
          setReceiveData(res.data);
          setLoading(false);
      }catch(error){
        console.error(error);
      }
  }
  fetchReceiveData();
  },[]);

  useEffect(()=>{
    if(receiveData === null || !receiveData?.exist) return;
    setIsSmoke(receiveData.smoking);
    setIsHabit(receiveData.habit);
    setIsEar(receiveData.ear);
    setIsSleep(receiveData.sleep);
    setIsWakeUp(receiveData.wakeup);
    setIsOut(receiveData.out);
    setIsCleaning(receiveData.cleaning);
    setIsTendency(receiveData.tendency);
    setLoading(false);
  },[receiveData]);

  useEffect(()=>{
    if ( isSmoke !== null && isHabit !== null && isEar !== null && isSleep !== null && isWakeUp !== null && isOut !== null && isCleaning !== null &&isTendency !== null) setIsCliked(true);
  },[isSmoke,isHabit,isEar,isSleep,isWakeUp,isOut,isCleaning,isTendency]);

  const handleButtonClick = () => {
    if ( isSmoke !== null && isHabit !== null && isEar !== null && isSleep !== null && isWakeUp !== null && isOut !== null && isCleaning !== null &&isTendency !== null){
      async function fetchLifeStyle() {
        try {
          const res = await API.post("/detail/"+`${receiveData?.exist ? 'update' : 'register' }`, {
            'smoking': isSmoke,
            'habit': isHabit,
            'ear': isEar,
            'sleep': isSleep,
            'wakeup': isWakeUp,
            'out': isOut,
            'cleaning': isCleaning,
            'tendency': isTendency,
            'detailId': receiveData.detailId,
          });
          if(res.data === "success") navigate('/mypage');
        } catch (error) {
          console.error(error);
        }
      }
      fetchLifeStyle();
    }
  }
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent navigation={true}>
        <c.SubScreen>
            <ColHeaderMenu>
              <SubTitle>{`나의 생활 습관을\n등록해 보세요`}</SubTitle>
            </ColHeaderMenu>
            <LifeStyle lifeStyleText={`흡연 여부`} lifeStyle={[{'흡연자에요': true},{'비흡연자에요': false}]} lifeStyleSection={setIsSmoke} isState={isSmoke}/>
            <LifeStyle lifeStyleText={`잠버릇`} lifeStyle={[{'잠버릇 있어요' : true},{'잠버릇 없어요' : false}]} lifeStyleSection={setIsHabit} isState={isHabit}/>
            <LifeStyle lifeStyleText={`잠귀`} lifeStyle={[{'귀 밝아요' : 'BRIGHT'},{'귀 어두워요' : 'DARK'}]} lifeStyleSection={setIsEar} isState={isEar}/>
            <LifeStyle lifeStyleText={`취침`} lifeStyle={[{'일찍 자요': 'EARLY'},{'늦게 자요' : 'LATE'},{'때마다 달라요' : 'RANDOM'}]} lifeStyleSection={setIsSleep} isState={isSleep}/>
            <LifeStyle lifeStyleText={`기상`} lifeStyle={[{'일찍 일어나요' : 'EARLY'},{'늦게 일어나요' : 'LATE'},{'때마다 달라요' : 'RANDOM'}]} lifeStyleSection={setIsWakeUp} isState={isWakeUp}/>
            <LifeStyle lifeStyleText={`외출`} lifeStyle={[{'집순이에요' : 'HOME'},{'밖순이에요' : 'OUT'},{'약속이 있으면 나가요' : 'PROMISE'}]} lifeStyleSection={setIsOut} isState={isOut}/>
            <LifeStyle lifeStyleText={`청소`} lifeStyle={[{'주기적으로 청소해요' : 'CLEAN'},{'더러워지면 청소해요' : 'DIRTY'},{'상대에게 맞춰요' : 'OPPONENT'}]} lifeStyleSection={setIsCleaning} isState={isCleaning}/>
            <LifeStyle lifeStyleText={`성향`} lifeStyle={[{'혼자 조용히 지내요' : 'ALONE'},{'함께 놀고 싶어요' : 'TOGETHER'},{'상대에게 맞춰요' : 'OPPONENT'}]} noShowLine={true} lifeStyleSection={setIsTendency} isState={isTendency}/>
        </c.SubScreen>
      </c.ScreenComponent>
      <BottomMenues>
        <Reset onClick={()=>handleReset()}>
          <ResetImg src={reset}/>
          초기화
        </Reset>
        <Enroll onClick={()=>handleButtonClick()} isClicked={isClicked}>{receiveData?.exist ? '수정하기' : '등록하기' }</Enroll>
      </BottomMenues>
    </c.Totalframe>
    )
  );
};
export default LifeStyles;
