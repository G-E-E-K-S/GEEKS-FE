import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closeModal from '../../assets/img/Join/closeModal.svg';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.6;
  z-index: 1;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 390px;
  left: 50%;
  transform: translateX(-50%);
  height: 57.4vh;
  white-space: wrap;
  
  border-radius: 24px 24px 0px 0px;
  background: #fff;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BottomSheetContent = styled.div`
  margin: 2.84vh 20px 0px 20px;
`;
const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    color: #333;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
`;

const Category = styled.div`
  margin-top: 2.96vh;
`;

const FooterBottomSheet = styled.div`
  padding: 1.6vh 21px 2.72vh 21px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom:0;
  height: 15.04vh;
  width: 390px;
`;

function BottomSheet(props) {
    const [isClose, setIsClose] = useState(false)

    return (
    <>
    <ModalBackground />
    <StyledBottomSheet>
        <BottomSheetContent>
            <ModalTitle>학번
                <img src={closeModal}/>
            </ModalTitle>
            <Category>..</Category>
        </BottomSheetContent>
    </StyledBottomSheet>
    <FooterBottomSheet>
    </FooterBottomSheet>
    </>
  );
}

export default BottomSheet;