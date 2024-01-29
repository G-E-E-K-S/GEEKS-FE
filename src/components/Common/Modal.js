import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBox = styled.div`
  background: #fff;
  padding: ${(props)=>props.padding};
  border-radius: 16px;
  width: max-content:
  height: max-content;
`;
const Modal = (props) => {
  return (
    <ModalOverlay>
      <ModalBox padding={props.padding}>{props.children}</ModalBox>
    </ModalOverlay>
  );
};
export default Modal;
