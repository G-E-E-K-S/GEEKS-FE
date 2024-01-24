import React from "react";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";

const LifeStyleBox = styled.div`
  display: flex;
  border-top: 1px solid #efefef;
  padding-top: 2.36vh;
  padding-bottom: 2.36vh;
`;
const LifeStyleTxt = styled.div`
  width: 17.94vw;
  display: flex;
  align-items :center;
`;
const TotalStyle = styled.div`
  width: 100%;
`;
const SameLifeStyle = styled.div`
  border-radius: 20px;
  background: #edf7fd;
  padding: 0.94vh 4.1vw;
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0 auto;
  width: max-content;
`;
const DiffrentLifeStlye = styled(SameLifeStyle)`
  background: linear-gradient(
      0deg,
      rgba(255, 184, 184, 0.2) 0%,
      rgba(255, 184, 184, 0.2) 100%
    ),
    #fcede8;
    max-width: 34.1vw;
    word-break: keep-all;
    text-align: center;
`;
const DiffrentMyLifeStlye = styled(DiffrentLifeStlye)`
    background: #FCEDE8
`;

const LifeStyle = (props) => {
  return (
    <LifeStyleBox>
      <LifeStyleTxt>{props.lifeStyle}</LifeStyleTxt>
      <TotalStyle>
      {props.isSame &&
      <SameLifeStyle>{props.sameLifeStyle}</SameLifeStyle>
        
      }
      {props.isDiff &&
      <c.SpaceBetween>
        <DiffrentLifeStlye>{props.diffrentLifeStyle}</DiffrentLifeStlye>
      <DiffrentMyLifeStlye>{props.diffrentMyLifeStyle}</DiffrentMyLifeStlye>
      </c.SpaceBetween>
}
      </TotalStyle>
    </LifeStyleBox>
  );
};
export default LifeStyle;
