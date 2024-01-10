import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
	left: 0;
	bottom: 0;
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
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  height: ${(props)=>props.height};
  border-radius: 20px 20px 0px 0px;
  padding: 24px;
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
