import React from "react";
import styled from "styled-components";
import GoBack from "./GoBack";
const TotalHeaderMenu = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0px;
  justify-content: space-between;
  align-items: center;
`;
const HeaderMenu = (props) => {
  return (
    <TotalHeaderMenu>
      <GoBack />
      <div>{props.children}</div>
    </TotalHeaderMenu>
  );
};
export default HeaderMenu;
