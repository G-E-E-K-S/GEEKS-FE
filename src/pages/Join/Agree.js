import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import Check from "../../assets/img/Join/agreeCheck.svg";
import FillCheck from "../../assets/img/Join/agreeFillCheck.svg";

const AgreeTotal = styled.div`
  width: 100%;
  height: 56px;
  text-align: center;
  border-radius: 12px;
  background: ${(props)=> props.isTotalCheck ? '#FFFBEE' : '#f7f7f7'};
  border: ${(props)=> props.isTotalCheck && '1px solid #ECAA00'};
  margin-top: 47px;
  margin-bottom: 32px;
  padding: 16px 20px;
`;
const AgreeAll = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color : ${(props)=> props.isTotalCheck && '#865800'};
`;
const IncludeSelect = styled(AgreeAll)`
  font-size: 0.95rem;
  font-weight: 500;
  color: #949494;
`;
const AgreeSection = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const Essential = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #cb3d0b;
  margin: 0px 8px;
`;
const AgreeText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #525252;
  border-bottom: 1px solid #525252;
`;
const Choice = styled(Essential)`
  color: #949494;
`;
const Agree = () => {
  const [service, setService] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [location, setLocation] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [isTotalCheck, setIsTotalCheck] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setIsTotalCheck(true);
    setService(true);
    setPersonal(true);
    setLocation(true);
    setMarketing(true);
  }
  const handleNextPage = () => {
    navigate('/inputemail');
  }
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`편리한 이용을 위해\n아래 약관에 동의해 주세요`} />
        <AgreeTotal isTotalCheck={isTotalCheck}>
          <c.Flex>
            <img
              src={isTotalCheck ? FillCheck : Check}
              onClick={handleCheck}
            />
            <AgreeAll isTotalCheck={isTotalCheck}>{`전체 동의하기`}</AgreeAll>
            <IncludeSelect>{`선택 동의 포함`}</IncludeSelect>
          </c.Flex>
        </AgreeTotal>
        <AgreeSection>
          <img src={service ? FillCheck : Check} onClick={()=>setService(!service)}/>
          <Essential>{`필수`}</Essential>
          <AgreeText onClick={()=>navigate('/servicetxt')}>{`서비스 이용 약관`}</AgreeText>
        </AgreeSection>
        <AgreeSection>
          <img src={personal ? FillCheck : Check} onClick={()=>setPersonal(!personal)}/>
          <Essential>{`필수`}</Essential>
          <AgreeText onClick={()=>navigate('/personalinfotxt')}>{`개인정보 수집 및 이용`}</AgreeText>
        </AgreeSection>
        <AgreeSection>
          <img src={location ? FillCheck : Check} onClick={()=>setLocation(!location)}/>
          <Essential>{`필수`}</Essential>
          <AgreeText onClick={()=>navigate('/locationtxt')}>{`위치정보 수집 및 이용`}</AgreeText>
        </AgreeSection>
        <AgreeSection>
          <img src={marketing ? FillCheck : Check} onClick={()=>setMarketing(marketing === false ? true : false)}/>
          <Choice>{`선택`}</Choice>
          <AgreeText onClick={()=>navigate('/marketingtxt')}>{`마케팅 정보 수신 동의`}</AgreeText>
        </AgreeSection>
        <JoinButton btnName={"동의하기"} isNextPage={service && personal && location} handleClick={()=>handleNextPage()}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Agree;
