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
  z-index: 20;
  transition: 0.3s ease;
`;
const TotalBottomSheet = styled.div`
  z-index: 20;
  position: fixed;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${(props) => (props.isOpen ? "0" : "-100%")};
  ${(props) =>
    !props.interaction
      ? null
      : props.isOpen
      ? "transition: bottom 0.5s ease"
      : "transition: bottom 1.2s ease"};
  height: ${(props) => props.height};
  border-radius: 20px 20px 0px 0px;
  padding: ${(props) => props.padding};
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
      {props.isOpen && <ModalBackground />}
      <TotalBottomSheet
        height={props.height}
        padding={props.padding}
        isOpen={props.isOpen}
        interaction={props.interaction}>
        {props.children}
      </TotalBottomSheet>
    </div>
  );
};
export default BottomSheet;
