import React from "react";
import styled from "styled-components";

const SubTitleText = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  margin-left: 8px;
`;
const SubTitle = (props) => {
  return <SubTitleText>{props.children}</SubTitleText>;
};
export default SubTitle;
