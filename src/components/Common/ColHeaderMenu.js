import React from "react";
import styled from "styled-components";
import GoBack from "./GoBack";
const TotalHeaderMenu = styled.div`
  width: 100%;
  padding: 12px 0px;
  align-items: center;
`;
const ColHeaderMenu = (props) => {
  return (
    <TotalHeaderMenu>
      <GoBack />
      <div>{props.children}</div>
    </TotalHeaderMenu>
  );
};
export default ColHeaderMenu;
