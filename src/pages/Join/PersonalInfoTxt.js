import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import PersonalImg from "../../assets/img/Join/personal.svg";

const PersonalInfoTxtImg = styled.img`
    margin-top: 3.79vh;
`;
const LocationTxt = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu/>
        <PersonalInfoTxtImg src={PersonalImg}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default LocationTxt;
