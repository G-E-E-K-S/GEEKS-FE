import React from "react";
import styled from "styled-components";

const LifeStyleBox = styled.div`
  display: flex;
  border-top: 1px solid #efefef;
  padding-top: 2.36vh;
  padding-bottom: 2.36vh;
`;
const LifeStyleTxt = styled.div``;
const SameLifeStyle = styled.div`
  border-radius: 20px;
  background: #edf7fd;
  padding: 0.94vh 4.1vw;
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const DiffrentLifeStlye = styled(SameLifeStyle)`
  background: linear-gradient(
      0deg,
      rgba(255, 184, 184, 0.2) 0%,
      rgba(255, 184, 184, 0.2) 100%
    ),
    #fcede8;
`;
const LifeStyle = (props) => {
  return (
    <LifeStyleBox>
      <LifeStyleTxt>{props.lifeStyle}</LifeStyleTxt>
      <SameLifeStyle>{props.sameLifeStyle}</SameLifeStyle>
      <DiffrentLifeStlye>{props.diffrentLifeStyle}</DiffrentLifeStlye>
    </LifeStyleBox>
  );
};
export default LifeStyle;
