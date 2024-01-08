import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import UserLifeStyle from "../../components/Roommate/UserLifeStyle";
import YellowCheck from "../../assets/img/Roommate/yellowCheck.svg";
import KnownCircle from "../../assets/img/Roommate/knownCircle.svg";
import ApplyRoommateCircle from "../../assets/img/Roommate/ApplyRoommateCircle.svg";

const TotalApply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const CheckCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #ffecac;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13.76vh;
  margin-bottom: 5.45vh;
`;
const ApplyText = styled.div`
  color: #333;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 32px;
  margin-bottom: 2.84vh;
`;
const SubApplyText = styled.div`
  color: #707070;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 15.38vh;
`;
const ProcessConnector = styled.div`
  position: absolute;
  height: 4px; /* 선의 두께 조절 */
  width: 50%; /* 선의 길이 조절 */
  background-color: #af7400; /* 선의 색상 조절 */

  left: 50%; /* 선을 가로 중앙에 위치시키기 */
  z-index: -1; /* 선이 텍스트 뒤에 나타나도록 설정 */
`;
const ProcessName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #af7400;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  position: relative;
  &:before {
    content: "ㅇㅇ";
    ${ProcessConnector};
  }

`;

const ProcessIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 1.42vh;
`;
const ApplyConfirm = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <TotalApply>
            <CheckCircle>
              <img src={YellowCheck} />
            </CheckCircle>
            <ApplyText>{`이소윤님께\n룸메이트신청을 보냈어요`}</ApplyText>
            <SubApplyText>{`상대방이 수락하면 룸메이트가 맺어져요`}</SubApplyText>
            {/* process */}
            <c.Flex>
              <ProcessName>
                <ProcessIcon src={KnownCircle} />
                서로 알아가기
              </ProcessName>
              <ProcessName>
                <ProcessIcon src={ApplyRoommateCircle} />
                룸메 신청
              </ProcessName>
            </c.Flex>
          </TotalApply>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default ApplyConfirm;
