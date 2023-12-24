import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import PageName from "../../components/Main/PageName";
import OtherProfile from "../../components/Main/OtherProfile";
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
  margin-top: 6.64vh;
  cursor: pointer;
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

  const handleEdit = () => {
    setActiveEdit(true);
  };
  const handleCheck = () => {
    setActiveCheck(!activeCheck);
  }

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            <c.Flex>
              <GoBack />
              <PageName pageName={`저장 목록`} handleShow={activeEdit}/>
            </c.Flex>
            {activeEdit ? (
              <DoneBtn>완료</DoneBtn>
            ) : (
              <EditImg src={Edit} onClick={() => handleEdit()} />
            )}
          </c.SpaceBetween>
          {/* total save list */}
          <TotalSaveNum>총 3명</TotalSaveNum>
          <c.Flex>
            {activeEdit ? <CheckImg src={activeCheck ? Check : NoCheck} onClick={()=>handleCheck()}/> : null }
            <OtherProfile userprofile={Profile} nickName={`너굴너굴`} major={`스마트정보통신공학과`} id={`19학번`} activeCheck={activeCheck}/>
          </c.Flex>
          
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
