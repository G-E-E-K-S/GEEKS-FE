import React from "react";
import styled from "styled-components";
import Close from "../../assets/img/Join/closeModal.svg";

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
  flex-direction: column;
`;
const ModalBox = styled.div`
  background: #fff;
  padding: ${(props)=>props.padding};
  border-radius: 16px;
  min-width: 319px;
  width: max-content;
  height: max-content;
  position: relative;
  z-index: 2;
`;
const WFull = styled.div`
  width: 320px;
`;
const CloseBtn = styled.img`
  float: right;
  margin-bottom: 12px;
`;
const Modal = (props) => {
  return (
    <ModalOverlay>
      {props.isClose &&
        <WFull>
          <CloseBtn src={Close} onClick={props.onClick}/>
        </WFull>
      }
      <ModalBox padding={props.padding}>{props.children}</ModalBox>
    </ModalOverlay>
  );
};
export default Modal;
