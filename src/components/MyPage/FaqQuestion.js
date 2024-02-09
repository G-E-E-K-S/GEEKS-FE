import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import RightArrowFaQ from "../../assets/img/MyPage/rightArrowFaQ.svg";

const FaqBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
`;
const FaqText = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 3.07vw;
`;
const FaqRommate = (props) => {
  return (
    <FaqBox onClick={props.onClick}>
      <c.Flex>
        <FaqText>{props.faqtext}</FaqText>
      </c.Flex>
      <img src={RightArrowFaQ} />
    </FaqBox>
  );
};
export default FaqRommate;
