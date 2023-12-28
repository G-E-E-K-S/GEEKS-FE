import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const LifeStyleTitle = styled.div`
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
`;
const IsRight = styled.div`
  color: #4596e0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
`;
const LifeStlye = styled.div`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-left: 2.05vw;
`;
const Me = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #e2e2e2;
  color: #707070;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
`;
const MyLifeStyleTotle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.94vh;
`;
const MyLifeStyle = styled.div`
  color: #949494;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  float: right;
`;
const Line = styled.div`
  height: 1px;
  background: #efefef;
  width: 100%;
  margin-top: 2.13vh;
`;
const UserLifeStyle = (props) => {
  return (
    <div>
      <c.SpaceBetween>
        <LifeStyleTitle>{props.lifeStyleTitle}</LifeStyleTitle>
        <div>
          <c.SpaceBetween>
            <IsRight>{props.isRight}</IsRight>
            <LifeStlye>{props.lifestyle}</LifeStlye>
          </c.SpaceBetween>
          <MyLifeStyleTotle>
            <Me>나</Me>
            <MyLifeStyle>{props.myLifeStyle}</MyLifeStyle>
          </MyLifeStyleTotle>
        </div>
      </c.SpaceBetween>
      <Line />
    </div>
  );
};
export default UserLifeStyle;
