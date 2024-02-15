import React, { useState, useRef } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import MainText from "../../components/Join/MainText";
import ErrorPopup from "../../components/Common/ErrorPopup";
import ApplyCancelBottomSheet from "../../components/Common/ApplyCancleBottomSheet";
import ForgetPwdImg from "../../assets/img/Join/forgetPwd.svg";
import NoShowPwd from "../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../assets/img/Join/ShowPwd.svg";
import Automatic from "../../assets/img/Join/automatic.svg";
import Loading from "../Loading";

const InputInfos = styled.div`
  display: flex;
  margin-top: ${(props) => (props.isPwd ? "0" : "6.27vh")};
  margin-bottom: 18px;
  padding: 7px 0px 8px 0px;
  border-bottom: 2px solid ${(props) => (props.isSelected)};
  color: #c4c7c7;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
`;

const Input = styled.input`
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.25rem;
  &::placeholder {
    color: #d0d0d0;
  }
`;

const Univ = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1.25rem;
  color: #b7b7b7;
`;
const ForgetPwdTxt = styled.div`
  color: #707070;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  margin-right: 4px;
`;
const JoinButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30.45vh;
  width: 89.74vw;
  height: 60px;
  background-color: ${(props) => (props.isNextPage ? '#FFC700' : '#F7F7F7')};
  pointer-events : ${(props) => props.isNextPage ? 'auto' : 'none'};
  border-radius: 12px;

  color: ${(props)=> (props.isNextPage ? '#333' : '#B7B7B7')};
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
`;
const ForgetPwdIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const No = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #8E9192;
  margin-top: 22px;
`;
const InputEmail = () => {
  const [isEmailSelected, setIsEmailSelected] = useState('false');
  const [isPwdSelected, setIsPwdSelected] = useState('false');
  const [isNextPage, setIsNextPage] = useState(false);
  const [isErrorPopup, setIsErrorPopUp] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [automaticLogIn, setAutomaticLogIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailVal = useRef();
  const passwordVal = useRef();
  const navigate = useNavigate();

  const handleEmailVal = () => {
    let EmailLen = emailVal.current.value.length;
    let PwdLen = passwordVal.current.value.length;
    EmailLen > 0 && PwdLen > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  //axios
  const handleEmail = () => {
    async function fetchLogin() {
      setLoading(true);
      try {
        const res = await API.post("/login/login", {
          email: emailVal.current.value +"@sangmyung.kr",
          password: passwordVal.current.value,
        });
        if(res.data === 'success'){
          setAutomaticLogIn(true);
        }
        else{
          setIsPwdSelected('error');
          setIsEmailSelected('error');
          setIsErrorPopUp(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogin();
  };
  const handlePwd = () => {
    setShowPwd(!showPwd);
  };
  const AutomaticLogin = () => {
    setAutomaticLogIn(false);
    localStorage.setItem('autologin', true);
    navigate('/home');
  }
  const NoneAutomaticLogin = () => {
    setAutomaticLogIn(false);
    localStorage.setItem('autologin', false);
    navigate('/home');
  }
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`학교 이메일 주소로\n로그인 해주세요`} />
        <InputInfos isSelected={isEmailSelected === 'error' ? '#CB3D0B' : isEmailSelected === 'false' ? '#EFEFEF' : '#ECAA00'}>
          <Input
            maxLength={9}
            placeholder="학번"
            onFocus={() => setIsEmailSelected('true')}
            onBlur={() => setIsEmailSelected('false')}
            ref={emailVal}
            onChange={() => handleEmailVal()}
          />
          <Univ>@sangmyung.kr</Univ>
        </InputInfos>
        <InputInfos isSelected={isPwdSelected === 'error' ? '#CB3D0B' : isPwdSelected === 'false' ? '#EFEFEF' : '#ECAA00'} isPwd={true}>
          <Input
            type={showPwd ? "text" : "password"}
            placeholder="비밀번호"
            maxLength={15}
            onFocus={() => setIsPwdSelected('true')}
            onBlur={() => setIsPwdSelected('false')}
            ref={passwordVal}
            onChange={() => handleEmailVal()}
          />
          <img src={showPwd ? ShowPwd : NoShowPwd} onClick={handlePwd} />
        </InputInfos>
        <c.Flex onClick={()=>navigate('/forgetemail')}>
          <ForgetPwdTxt>{`비밀번호를 잊어버리셨나요?`}</ForgetPwdTxt>
          <ForgetPwdIcon src={ForgetPwdImg}/>
        </c.Flex>
        <ErrorPopup 
        message={`위 이메일로 가입된 정보가 없어요`} 
        bottom={`38.98`} 
        setShowPopup={setIsErrorPopUp}
        isShowPopup={isErrorPopup}/>
        <JoinButton
          onClick={() => handleEmail()}
          isNextPage={isNextPage}>{`로그인`}</JoinButton>
        <ApplyCancelBottomSheet height={`391px`} padding={`40px 20px 0px 20px`} 
          isOpen={automaticLogIn} interaction={true}
          onClick={()=>AutomaticLogin()}
          Icon={Automatic} message={`다음부터\n자동으로 로그인할까요?`}
          btnName={`자동 로그인 할게요`} applyRoommate={()=>setAutomaticLogIn(false)}>
          <No onClick={()=>NoneAutomaticLogin()}>{`안 할래요`}</No>
        </ApplyCancelBottomSheet>
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};

export default InputEmail;
