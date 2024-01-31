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
  margin-top: 6.16vh;
  padding: 0.94vh 3.07vw;
  border-radius: 8px;
  background: ${(props)=>props.isDone ? '#FFC700' : '#efefef'};

  color: ${(props)=>props.isDone ? '#333' : '#949494'};
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
  const [checkUserName, setCheckUserName] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [saveList, setSaveList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const handleEdit = () => {
    setActiveEdit(true);
  };

  const handleBtn = () => {
    if (checkUserName.length > 0) {
      async function fetchDeleteSaveList() {
        try{
          const res = await API.get("/roommate/removesave?nickname="+checkUserName);
          if(res.status == '200'){
            setShowPopup(true);
            setSaveList(saveList.filter((data)=> !checkUserName.includes(data.nickname)));
            setCheckUserName([]);
            setIsDone(!isDone);
          }
          console.log(res)
        }catch(e) {
          console.log(e);
        } 
      }
      fetchDeleteSaveList();
    }
    setSaveList(saveList.filter(list => list !== checkUserName));
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
  const handleCheckIndex = (userName) => {
    setCheckUserName(value => [...value, userName]);
    if(checkUserName.includes(userName)) setCheckUserName(checkUserName.filter(nowName => nowName !== userName));
  }
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            {activeEdit ? (
              <>
                <Header subtitle={`${checkUserName.length}명 선택됨`} andleShow={activeEdit} isCenter={true}/>
                <DoneBtn isDone={isDone}>완료</DoneBtn>
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
            {saveList.map((userData)=>(
              <c.Flex onClick={() => handleCheckIndex(userData.nickname)}>
              {activeEdit && <CheckImg src={checkUserName.includes(userData.nickname) ? Check : NoCheck} />}
              <OtherProfile activeCheck={checkUserName.includes(userData.nickname)} score={userData.point} userprofile={Profile} nickName={userData.nickname} major={userData.major} id={userData.studentID} intro={userData.introduction} />
              </c.Flex>
            ))}
          <JoinButton btnName={`삭제하기`} isNextPage={checkUserName.length > 0} handleClick={() => handleBtn()} />
          {showPopup && <Popup bottom={`18.24vh`} setShowPopup={setShowPopup} message={'성공적으로 삭제되었습니다'}/> }
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
