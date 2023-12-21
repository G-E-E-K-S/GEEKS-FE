import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import PageName from "../../components/Main/PageName";
import OtherProfile from "../../components/Main/OtherProfile";
import Edit from "../../assets/img/MyPage/edit.svg";
import Profile from "../../assets/img/MyPage/basicProfile.svg";

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
const LifeStyles = () => {
  const [resetStat, setResetStat] = useState(false);
  const [isClicked, setIsCliked] = useState(false);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            <c.Flex>
              <GoBack />
              <PageName pageName={`저장 목록`} />
            </c.Flex>
            <EditImg src={Edit} />
          </c.SpaceBetween>
          {/* total save list */}
          <TotalSaveNum>총 3명</TotalSaveNum>
          <OtherProfile userprofile={Profile} nickName={`너굴너굴`} major={`스마트정보통신공학과`} id={`19학번`}/>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
