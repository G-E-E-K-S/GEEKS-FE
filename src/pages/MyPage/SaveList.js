import React, { useState, useEffect } from "react";
import API from "../../axios/BaseUrl";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import OtherProfile from "../../components/Main/OtherProfile";
import JoinButton from "../../components/Join/JoinButton";
import Popup from "../../components/Common/Popup";
import Edit from "../../assets/img/MyPage/edit.svg";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import NoCheck from "../../assets/img/MyPage/noCheck.svg";
import Check from "../../assets/img/MyPage/check.svg";

const DoneBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.73vh;
  margin-top: 5.7vh;
  padding: 0.94vh 3.07vw;
  border-radius: 8px;
  background: #efefef;

  color: #949494;
  font-size: 16px;
  font-weight: 600;
`;
const EditImg = styled.img`
  margin-top: calc( 6.16vh + 12px);
  cursor: pointer;
  width: 28px;
  height: 28px;
`;
const TotalSaveNum = styled.div`
  margin-top: 3.31vh;
  margin-bottom: 0.94vh;
  color: #707070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
const CheckImg = styled.img`
  cursor: pointer;
  margin-right: 1.02vw;
`;
const LifeStyles = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeCheck, setActiveCheck] = useState(false);
  const [checkIndex, setCheckIndex] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [saveList, setSaveList] = useState([]);

  const handleEdit = () => {
    setActiveEdit(true);
  };

  const handleBtn = () => {
    if (activeCheck) {
      setShowPopup(true);
      setActiveCheck(false);
    }
  }
  useEffect(()=>{
    async function fetchSaveList() {
      try{
        
        const res = await API.get("/roommate/savelist");
        setSaveList(res.data)
      }catch(e) {
        console.log(e);
      } 
    }
    fetchSaveList();
  },[]);
  const handleCheckIndex = (index) => {
    setActiveCheck(!activeCheck);
    setCheckIndex(value => [...value, index]);
    if(checkIndex.includes(index)) setCheckIndex(checkIndex.filter(nowIndex => nowIndex !== index));
  }
  console.log(checkIndex)
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            {activeEdit ? (
              <>
                <Header subtitle={`${checkIndex.length}명 선택됨`} andleShow={activeEdit} isCenter={true}/>
                <DoneBtn>완료</DoneBtn>
              </>
            ) : (
              <>
                <Header subtitle={`저장 목록`} andleShow={activeEdit}/>
                <EditImg src={Edit} onClick={() => handleEdit()} />
              </>
            )}
          </c.SpaceBetween>
          {/* total save list */}
          <TotalSaveNum>총 {saveList.length}명</TotalSaveNum>
            {saveList.map((userData,index)=>(
              <c.Flex onClick={() => handleCheckIndex(index)}>
              {activeEdit && <CheckImg src={checkIndex.includes(index) ? Check : NoCheck} />}
              <OtherProfile activeCheck={checkIndex.includes(index)} score={userData.point} userprofile={Profile} nickName={userData.nickname} major={userData.major} id={userData.studentID} intro={userData.introduction} />
              </c.Flex>
            ))}
          <JoinButton btnName={`삭제하기`} isNextPage={checkIndex.length > 0} handleClick={() => handleBtn()} />
          {showPopup && <Popup bottom={`18.24vh`} setShowPopup={setShowPopup} message={`‘~~...’님이 삭제되었습니다`}/> }
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
