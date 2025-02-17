import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../components/Common/Modal";
import SecessionIcon from "../../assets/img/MyPage/secessionModal.svg";

const Background = styled.div`
  background: #00000033;
  position: relative;
  z-index: 30;
`;
const WFull = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecessionImg = styled.img`
  width: 64px;
  height: 64px;
`;
const RealSeccsion = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  white-space: pre-wrap;
`;
const Description = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #707070;
  margin-bottom: 32px;
`;
const ModalChoiceBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background: #ffc700;
  font-size: 1.125rem;
  font-weight: 600;
`;
const ChoiceNo = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #707070;
  margin-top: 22px;
`;
const FinishRoommate = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Background>
      <Modal padding={`22px 20px`}>
        <WFull>
          <SecessionImg src={SecessionIcon} />
        </WFull>
        <RealSeccsion>{props.ment}</RealSeccsion>
        {props.description && <Description>{`다시 복구되지 않아요`}</Description>}
        <ModalChoiceBtn useMore={true} onClick={props.onClick}>{props.choiceMent}</ModalChoiceBtn>
        <ChoiceNo onClick={props.noOnClick}>{`아니요`}</ChoiceNo>
      </Modal>
    </Background>
  );
};
export default FinishRoommate;
