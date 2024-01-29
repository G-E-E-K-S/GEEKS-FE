import React from "react";
import styled from "styled-components";

const JoinHeaderBox = styled.div`
    margin-top: ${(props)=>props.marginTop}
`;
const JoinHeaderTxt = styled.div`
  color: #333;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 36px;
  white-space: pre-wrap;
`;
const JoinHeader = (props) => {
  return (
    <JoinHeaderBox marginTop={props.marginTop}>
      <JoinHeaderTxt lineHeight={props.lineHeight}>
        {props.joinHeaderTxt}
      </JoinHeaderTxt>
    </JoinHeaderBox>
  );
};
export default JoinHeader;
