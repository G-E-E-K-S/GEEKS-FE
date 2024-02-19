import React, { useState, useRef, useEffect } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import TopNumber from "../../components/Join/TopNumber";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import ErrorPopup from "../../components/Common/ErrorPopup";
import Timmer from "../../assets/img/Join/timmer.svg";
import Loading from "../Loading";

const TotalSendMail = styled.div`
  display: flex;
  margin-top: 2.25vh;
`;

const SendMailText = styled.div`
  margin-right: 8px;
  color: #949494;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const ReSendBtn = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  color: ${(props)=>props.isResend ? '#D0D0D0': '#525252'};
  border-radius: 6px;
  background-color: ${(props)=>props.isResend ? '#F7F7F7': '#efefef'};
  cursor: pointer;
  pointer-events : ${(props)=>props.isResend && 'none'};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  &:active{
    background: #D0D0D0;
  }
`;

const InputNumber = styled.div`
  display: flex;
  margin-top: 55px;
`;
const InputInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 7px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
  color: #c4c7c7;
  width: 18.46vw;
  margin-right: 20px;
`;
const Code = styled.input`
  border: none;
  outline: none;
  width: 19.46vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const TimeImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 13px;
  margin-right: 4px;
`;

const Time = styled.div` 
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #B7B7B7;
  text-align: left;
  margin-top: 12px;
  
`

const InputCode = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [isSelected, setIsSelected] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [isErrorPopup, setIsErrorPopup] = useState(false);
  const [isResend, setIsResend] = useState(false);
  const [timer,setTimer] = useState(180);
  const [min,setMin] = useState(3);
  const [sec,setSec] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (index, event) => {
    const nextIndex = index + 1;

    if (isNaN(inputRefs[index].current.value)) {
      return;
    }else{
      if (event.target.value.length === 1 && nextIndex < inputRefs.length) {
        inputRefs[nextIndex].current.focus();
      }
    }
    
    event.target.value.length > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  const handleKeydown = (index, event) => {
    let beforeIndex = index - 1;
    if (index == 0) {
      beforeIndex = 0;
    }
    if (event.keyCode == 8) {
      inputRefs[beforeIndex].current.focus();
    }
  };

  const checkCode = () => {
    let code= "";
    for(let i = 0 ; i < 4 ; i++){
      code += inputRefs[i].current.value;
    }

    async function fetchCode() {
      try {
        const res = await API.get("/mail/auth?code=" + code);
        if(res.data === 'success!'){
          navigate('/password')
        }else{
          setIsErrorPopup(true);
        }
      } catch (error) {
        console.error(error);
        setIsErrorPopup(true);
      }
    }
    fetchCode();
  };

  const ChangeBarColor = () => {
    setIsSelected(true);
  };

  const ReSendEmail = () => {
    let UserEmail = location.state?.userEmail;
    async function fetchCode() {
      try {
        const res = await API.get("/mail/send?email=" + UserEmail + "@sangmyung.kr");
        if(res.status==200) {
          setIsResend(true);
          setTimer(180);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchCode();
  }

  useEffect(() => {
    if(timer === 181) {
      return;
    }

    const id = setInterval(() => {
        setTimer(timer => timer - 1);
        setMin(Math.floor(timer/60));
        setSec(timer%60);
    }, 1000);

    if(timer === -1){
        clearInterval(id);
        setTimer(181);
    }
    
    return () => clearInterval(id);
}, [timer]);

  return (
  loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <TopNumber page={2} />
        <MainText
          maintitle={`수신된 메일에 적힌\n4자리 코드를 입력해 주세요`}
        />
        <TotalSendMail>
          <SendMailText>메일이 도착하지 않았나요?</SendMailText>
          <ReSendBtn onClick={()=>ReSendEmail()} isResend={isResend}>인증 메일 재전송</ReSendBtn>
        </TotalSendMail>
        <InputNumber>
          {inputRefs.map((ref, index) => (
            <InputInfos isSelected={isSelected}>
              <Code
                key={index}
                ref={ref}
                type="text"
                maxLength={1}
                pattern="\d*"
                onChange={(e) => handleInputChange(index, e)}
                onKeyUp={(e) => handleKeydown(index, e)}
                onFocus={() => ChangeBarColor()}
              />
            </InputInfos>
          ))}
        </InputNumber>
        <c.Flex>
          <TimeImg src={Timmer}/>
          <Time>{min}:{sec < 10 ? '0' + sec : sec}</Time>
        </c.Flex>
        <ErrorPopup 
        message={`코드가 일치하지 않아요`} 
        bottom={`18.72`} 
        setShowPopup={setIsErrorPopup}
        isShowPopup={isErrorPopup}
        />
        <JoinButton
          btnName={"코드 확인하기"}
          select={() => ChangeBarColor()}
          handleClick={() => checkCode()}
          isNextPage={isNextPage}
        />
      </c.ScreenComponent>
    </c.Totalframe>
  )
  );
};

export default InputCode;
