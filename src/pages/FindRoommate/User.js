import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../axios/BaseUrl";
import { useParams, useNavigate } from "react-router-dom";
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Br from "../../components/Common/Br";
import HeaderMenu from "../../components/Common/HeaderMenu";
import LifeStyle from "../../components/Roommate/LifeStyle";
import ApplyCancelBottomSheet from "../../components/Common/ApplyCancleBottomSheet";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import ChatImg from "../../assets/img/Roommate/chat.svg";
import Info from "../../assets/img/Roommate/info.svg";
import Save from "../../assets/img/MyPage/save.svg";
import FillSave from "../../assets/img/MyPage/fillSave.svg";
import Dots from "../../assets/img/Community/dots.svg";
import ApplyRoommateIcon from "../../assets/img/Roommate/applyRoommate.svg";

const TopProfile = styled.div`
  margin-top: 4.26vh;
`;
const Profile = styled.img`
  width: 72px;
  height: 72px;
`;
const NickName = styled.div`
  color: #1a1a1a;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  margin-top: 2.13vh;
  margin-bottom: 0.23vh;
`;
const Major = styled.div`
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;
`;
const Chat = styled.div`
  display: flex;
  width: 30.76vw;
  height: 6.16vh;
  padding: 1.65vh 4.1vw;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
`;
const ChatImage = styled.img`
  width: 24px;
  height: 24px;
`;
const ChatText = styled.div`
  color: #333;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-left: 2.05vw;
  white-space: nowrap;
`;
const UserMessageBox = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  border-radius: 12px;
  background: #faf6f1;
  padding: 14px;
  margin-top: 10px;
  margin-bottom: 2.84vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12px;
    border: 23px solid transparent;
    border-bottom-color: #faf6f1;
    border-top: 0;
    margin-top: -15px;
  }
`;
const InfoImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 2px;
`;
const InfoMessage = styled.div`
  margin-left: 1.53vw;
  color: #665d4f;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const MatchText = styled.div`
  margin-top: 4.72vh;
  margin-bottom: 3.31vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #525252;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const MatchColorText = styled.div`
  color: #d68d00;
  text-align: center;
`;
const BottomEnroll = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  border-top: 1px solid #efefef;
  padding-top: 2.38vh;
`;
const SaveImg = styled.img`
  margin-top: 4px;
  width: 28px;
  height: 28px;
`;
const SaveTxt = styled.div`
  color: #b7b7b7;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
const EnrollBtn = styled.div`
  width: 57.42vw;
  height: 56px;
  padding: 18px 12.17vw;
  border-radius: 12px;
  background: #ffc700;
`;
const EnrollTxt = styled.div`
  color: #333;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
`;
const MatchBox = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fafafa;
  height: max-content;
  padding: 2.36vh 5.12vw;
`;
const CharContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;
const OtherAndMeTxt = styled.div`
  display: flex;
  margin-top: 6.63vh;
  margin-bottom: 2.36vh;
  color: #707070;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const Other = styled.div`
  margin-left: 28.46vw;
  margin-right: 28.45vw;
`;
const Me = styled.div``;

const User = () => {
  const [isSave, setIsSave] = useState(false);
  const [applyRoommate, setApplyRommate] = useState(false);
  const [opponentUser, setOpponentUser] = useState(null);
  const [otherLifeStyle, setOtherLifeStyle] = useState([]);
  const [myLifeStyle, setMyLifeStyle] = useState([]);

  let { userId } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    async function fetchUserData() {
      try{
        const res = await API.get("/detail/details?id="+userId);
        setOpponentUser(res.data);
        setMyLifeStyle(res.data.details[0]);
        setOtherLifeStyle(res.data.datails[1]);
        setIsSave(res.data.details[0].saved);
      }catch(e) {
        console.log(e);
      }
    }
    fetchUserData();
  },[]);

  const startChat = () => {
    async function fetchChatRoom() {
      try{
        const res = await API.get("/chat/room?yournickname="+opponentUser.nickname);
        navigate(`/chat/chatroom/${res.data}`);
      }catch(e) {
        console.log(e);
      }
    }
    fetchChatRoom();
  }

  const saveOther = () => {
    setIsSave(!isSave);
    async function fetchSave() {
      try{
        const res = await API.get("/roommate/save?yourNickname="+opponentUser.nickname);
        console.log(res);
      }catch(e) {
        console.log(e);
      }
    }
    fetchSave();
  }

  const ApplyRoommate = () => {
    async function fetchApplyRoommate() {
      try{
        const res = await API.get("/roommate/request?yourNickname="+opponentUser.nickname);
        console.log(res);
      }catch(e) {
        console.log(e);
      }
    }
    fetchApplyRoommate();
  }

  const textCenter = {
    id:'textCenter',
    beforeDatasetsDraw(chart,args,pluginOptions){
      const {ctx} = chart;

      ctx.save();
      ctx.font = '700 1.75rem Pretendard';
      ctx.fontWeight = '700';
      ctx.fillStyle = '#D68D00';
      ctx.textAlign= 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(Data.datasets[0].data[0]+'점',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
    }
  }
  const Data = {
    datasets: [
      {
        data: [80,15],
        borderColor: ['#FFD540','#EFEFEF'],
        backgroundColor: ['#FFD540','#EFEFEF'],
        cutout: "80%",
        borderWidth: 0,
        options:{
          responsive: false,
          plugins:{
            legend: {
              display: false,
              tooltip: {
                enabled: false,
              },
            },
          },
          hover: { mode: null },
        },
      },
    ],
  };

  

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            <HeaderMenu>
              <img src={Dots}/>
            </HeaderMenu>
          </c.SpaceBetween>
          <TopProfile>
            <c.SpaceBetween>
              <div>
                <Profile src={BasicProfile} />
                <NickName>{opponentUser?.nickname}</NickName>
                <Major>{opponentUser?.major} · {opponentUser?.studentID}</Major>
              </div>
              <Chat>
                <ChatImage src={ChatImg} />
                <ChatText onClick={()=>startChat()}>대화하기</ChatText>
              </Chat>
            </c.SpaceBetween>
            <UserMessageBox>
              <c.Flex>
                <InfoImg src={Info}/>
                <InfoMessage>{opponentUser?.introduction}</InfoMessage>
              </c.Flex>
            </UserMessageBox>
            <Br/>
            {/* match score */}
            <MatchText>
              서로
              <MatchColorText>맞춰가면 좋아요</MatchColorText>
            </MatchText>
            {/* Match Text */}
            <CharContainer>
              <Chart type='doughnut' data={Data} plugins={[textCenter]}/>
            </CharContainer>
            <OtherAndMeTxt>
              <Other>{`상대방`}</Other>
              <Me>{`나`}</Me>
            </OtherAndMeTxt>
            {/* <LifeStyle 
              lifeStyle={`흡연`}
              isSame={true}
              sameLifeStyle={otherLifeStyle[0]?.smoking === otherLifeStyle[1]?.smoking && '흡연자에요' }/> */}
              <LifeStyle 
              lifeStyle={`흡연`}
              isSame={true}
              sameLifeStyle={'잠버릇 없어요'}/>
              <LifeStyle 
              lifeStyle={`잠귀`}
              isDiff={true}
              diffrentLifeStyle={'귀 밝아요'}
              diffrentMyLifeStyle={`귀 어두워요`}/>
           
          </TopProfile>
        </c.SubScreen>
      </c.ScreenComponent>
      <BottomEnroll>
        <div onClick={()=>saveOther()}>
          <SaveImg src={isSave ? FillSave : Save} />
          <SaveTxt>저장</SaveTxt>
        </div>
        <EnrollBtn>
          <EnrollTxt onClick={()=>setApplyRommate(true)}>룸메이트 신청하기</EnrollTxt>
        </EnrollBtn>
        
        {applyRoommate &&
          <ApplyCancelBottomSheet
            height={`393px`}
            padding={`24px 20px 85px 20px`}
            Icon={ApplyRoommateIcon}
            message={opponentUser?.nickname+`님께\n룸메이트를 신청할까요?`}
            subMessage={`상대방이 수락하기 전까지는\n언제든지 취소 가능해요`}
            btnName={`신청하기`}
            onClick={()=>ApplyRoommate()}
            applyRoommate={()=>setApplyRommate(false)}/>}
      </BottomEnroll>
    </c.Totalframe>
  );
};
export default User;
