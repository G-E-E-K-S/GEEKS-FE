import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import BottomSheet from "./BottomSheet";
import Colse from "../../assets/img/MyPage/close.svg";

const Content = styled.div`
  display: flex;
  width: 65.64vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContainBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
  margin-top: 8px;
`;
const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: 2.17vw;
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
`;
const ApplyCancelBottomSheet = (props) => {
  return (
    <>
      {props.applyRoommate && (
        <BottomSheet height={props.height} padding={props.padding}>
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
        </BottomSheet>
      )}
    </>
  );
};
export default ApplyCancelBottomSheet;
