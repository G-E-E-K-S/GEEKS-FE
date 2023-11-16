import React from "react";
import styled from "styled-components";
import * as c from "../Common/CommonStyle";

const LifeStyleTxt = styled.div`
  color: #b7b7b7;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;
const SubLifeStyle = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #efefef;
  margin-right: 8px;
  cursor: pointer;
`;
const Line = styled.div`
  width: 350px;
  height: 1px;
  background: #efefef;
  margin: 24px 0px;
`;
const LifeStyle = (props) => {
  return (
    <>
      <LifeStyleTxt>{props.lifeStyleText}</LifeStyleTxt>
      <c.Flex>
        {props.lifeStyle.map((style) => (
          <SubLifeStyle onClick={props.onClick}>{style}</SubLifeStyle>
        ))}
      </c.Flex>
      <Line />
    </>
  );
};
export default LifeStyle;
