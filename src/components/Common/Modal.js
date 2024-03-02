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
  z-index: 15;
`;
const ModalBox = styled.div`
  background: ${(props)=>props.isWelcome ? '#F7F7F7' : '#fff'};
  padding: ${(props)=>props.padding};
  border-radius: 16px;
  min-width: 319px;
  width: 85%;
  height: max-content;
  position: relative;
  z-index: 30;
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
      <ModalBox padding={props.padding} isWelcome={props.isWelcome}>{props.children}</ModalBox>
    </ModalOverlay>
  );
};
export default Modal;
