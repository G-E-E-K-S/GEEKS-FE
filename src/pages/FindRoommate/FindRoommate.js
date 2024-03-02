import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import Condition from "../../components/Roommate/Condition";
import OtherProfile from "../../components/Main/OtherProfile";
import NavigationBar from "../../components/Main/NavigationBar";
import BottomSheet from "../../components/Roommate/BottomSheet";
import basicProfile from "../../assets/img/MyPage/basicProfile.svg";
import BlurImg from "../../assets/img/Roommate/blurImg.svg";
import Loading from "../Loading";

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
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BottomMenues = styled.div`
  display: flex;
  padding: 2.38vh;
  border-top: 1px solid #EFEFEF;
`;
const ResetImg = styled.img`
  width: 5.12vw;
  height: 20px;
  margin-right: 4px;
`;
const BlurIcon = styled.img`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  opacity: 0.7;
`;
const EnrollLifeStyle = styled.div`
  width: 100%;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const EnrollLifeStyleTxt = styled.div`
  text-align: center;
  white-space: pre-wrap;
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const EnroolLifeStyleBtn = styled.div`
  width: max-content;
  padding: 16px 14.23vw;
  border-radius: 12px;
  background: #FFC700;
  color: #333;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  margin: 0 auto;
  margin-top: 16px;
`;
const FindRoommate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userdata, setUserData] = useState([]);
  const [isExist, setIsExist] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  useEffect(()=>{
    async function fetchUserData() {
      try{
        const res = await API.get("/point/find");
        setUserData(res.data.points);
        setIsExist(res.data.exist);
        setLoading(false);
      }catch(e) {
        console.log(e);
      }
    }
    fetchUserData();
  },[]);

  return (
    loading ? <Loading/> : (
      <c.Totalframe background={`linear-gradient(180deg, #FFF 0%, #F7F7F7 71%)`}>
      <c.ScreenComponent navigation={true}>
        <c.SubScreen>
          <Header isNoti={true} isEdit={false} onClick={() => navigate("/search")}/>
          <TitleText>{`나와 잘 맞는 룸메이트를\n찾아보세요`}</TitleText>
          {/* <ConditionScroll onClick={()=>setIsOpen(true)}>
            <Condition condition={`전공`} />
            <Condition condition={`학번`} />
            <Condition condition={`흡연`} />
            <Condition condition={`잠버릇`} />
            <Condition condition={`외출`} />
            <Condition condition={`장소`} />
            <Condition condition={`성향`} />
          </ConditionScroll> */}
          {isExist ?
            userdata.map((user)=>(
              <OtherProfile
                smoking={user.smoking}
                userprofile={user.photoName}
                nickName={user.nickname}
                major={user.major}
                id={user.studentID}
                score={user.point}
                intro={user.introduction}
                onClick={()=>navigate('/detail/details/'+user.userId)}/>
            )) : <>
            <BlurIcon src={BlurImg}/>
            <EnrollLifeStyle>
              <EnrollLifeStyleTxt>{`생활 습관을 등록하면\n나와 맞는 룸메이트를 찾을 수 있어요`}</EnrollLifeStyleTxt>
              <EnroolLifeStyleBtn onClick={()=>navigate('/lifestyle')}>{`생활 습관 등록하러 가기`}</EnroolLifeStyleBtn>
            </EnrollLifeStyle>
            </>
          }
        </c.SubScreen>
      </c.ScreenComponent>
      {isOpen ? <BottomSheet close={()=>setIsOpen(false)}/> : <NavigationBar type={`rommate`} />}
    </c.Totalframe>
    )
  );
};
export default FindRoommate;
