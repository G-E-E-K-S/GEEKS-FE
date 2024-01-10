import React from "react";
import styled from "styled-components";

const TotalBox = styled.div`
  width: 100%;
`;
const PopupBox = styled.div`
  width: calc(100% - 10.25vw);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10.18vh;
  border-radius: 12px;
  background: #525252;

  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin: auto 0;
`;
const Popup = (props) => {
  return (
    <TotalBox>
      <PopupBox>{props.message}</PopupBox>
    </TotalBox>
  );
};
export default Popup;
