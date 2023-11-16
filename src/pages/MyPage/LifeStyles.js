import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import LifeStyle from "../../components/Main/LifeStyle";

const SubTitleBox = styled.div`
    margin-top: 2.36vh;
    margin-bottom: 4.26vh;
`;
const LifeStyles = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
            <GoBack/>
            <SubTitleBox>
                <SubTitle subtitle={`나의 생활 습관을\n등록해 보세요`}/>
            </SubTitleBox>
            <LifeStyle lifeStyleText={`흡연 여부`} lifeStyle={['흡연자에요','비흡연자에요']}/>
            <LifeStyle lifeStyleText={`잠버릇`} lifeStyle={['잠버릇 있어요','잠버릇 없어요']}/>
            <LifeStyle lifeStyleText={`잠귀`} lifeStyle={['귀 밝아요','귀 어두워요']}/>
            <LifeStyle lifeStyleText={`취침`} lifeStyle={['일찍 자요','늦게 자요','때마다 달라요']}/>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
