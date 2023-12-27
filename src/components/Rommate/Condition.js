import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import smallDownArrow from "../../assets/img/Rommate/smallDownArrow.svg";

const ConditionTotal = styled.div`
  width: max-content;
  height: 34px;
  padding: 8px 2.56vw 8px 4.10vw;
  border-radius: 24px;
  border: 1px solid #e2e2e2;
  background: #fff;
  margin-bottom: 2.36vh;
  margin-right: 6px;
  cursor:pointer;
`;
const ConditionText = styled.div`
  color: #707070;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
  margin-right: 2px;
  white-space:nowrap
`;
const Condition = (props) => {
  return (
    <ConditionTotal>
      <c.Flex>
        <ConditionText>{props.condition}</ConditionText>
        <img src={smallDownArrow} />
      </c.Flex>
    </ConditionTotal>
  );
};
export default Condition;
