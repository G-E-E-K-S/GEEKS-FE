import React from "react";
import styled from "styled-components";
import GoBack from "../Common/GoBack";
import SubTitle from "../Main/SubTitle";

const TotalHeader = styled.div`
  margin-top: 6.16vh;
  margin-bottom: 16px;
  display: flex;
`;
const Header = (props) => {
  return (
    <TotalHeader>
      <GoBack />
      <SubTitle>{props.subtitle}</SubTitle>
    </TotalHeader>
  );
};
export default Header;
