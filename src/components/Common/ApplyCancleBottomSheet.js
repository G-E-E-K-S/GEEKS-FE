import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import BottomSheet from "./BottomSheet";
import Colse from "../../assets/img/MyPage/close.svg";

const ContainBottom = styled.div`
  width: 100%;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MainIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;
const Message = styled.div`
  color: #333;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  white-space: pre-wrap;
`;
const SubMessage = styled(Message)`
  color: #707070;
  font-weight: 500;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 12px;
  line-height: 22px;
`;
const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
const BottomSheetBtn = styled.div`
  width: 100%;
  height: 62px;
  border-radius: 12px;
  background: #ffc700;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  cursor: pointer;
  &:active{
    background: #ECAA00;
  }
`;
const ApplyCancelBottomSheet = (props) => {
  return (
    <>
      <BottomSheet height={props.height} padding={props.padding} 
      isOpen={props.isOpen} interaction={true}>
          <ContainBottom>
            <Content>
              <MainIcon src={props.Icon} />
              <Message>{props.message}</Message>
              <SubMessage>{props.subMessage}</SubMessage>
            </Content>
            <CloseIcon src={Colse} onClick={props.applyRoommate} />
          </ContainBottom>
          <BottomSheetBtn onClick={props.onClick}>
            {props.btnName}
          </BottomSheetBtn>
          {props.children}
        </BottomSheet>
    </>
  );
};
export default ApplyCancelBottomSheet;
