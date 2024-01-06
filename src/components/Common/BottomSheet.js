import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 1;
`;
const TotalBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  width: 100vw;
  bottom: 0px;
  height: ${(props.height)};
  white-space: wrap;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BottomSheet = (props) => {
  return (
    <div>
      <ModalBackground />
      <TotalBottomSheet height={props.height}>{props.children}</TotalBottomSheet>
    </div>
  );
};
export default BottomSheet;
