import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import JoinButton from "../../components/Join/JoinButton";
import NoneCheck from "../../assets/img/Join/noneCheck.svg";
import Check from "../../assets/img/Join/Check.svg";
import NoShowPwd from "../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../assets/img/Join/ShowPwd.svg";

const PasswordText = styled.div`
  margin-top: 37px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #707070;
`;
const InputPasswordTotal = styled.div`
  display: flex;
  border-bottom: 2px solid
    ${(props) =>
      props.currentSelected || props.newSelected || props.newSelectedCheck
        ? "#ECAA00"
        : "#EFEFEF"};
  padding: 0px 0px 0.94vh 0px;
  margin-bottom: 3.9vh;
`;
const InputPassword = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 48px;
  font-style: normal;
  font-size: 1.125rem;
  font-weight: 500;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: ##d0d0d0;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

const PwdCondition = styled.div`
  display: flex;
  margin-bottom: 1.42vh;
  display: flex;
  align-items: center;
`;
const CheckImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConditionTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  color: ${(props) => (props.isOk ? "#149D9D" : "#525252")};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;
const TotalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
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
    &:active{
        background: #ECAA00;
    }
`;
const ChangePassword = () => {
  const [currentSelected, setCurrentSelected] = useState(false);
  const [currentSelectedError, setCurrentSelectedError] = useState(false);
  const [isRightPrevPwd, setIsRightPrevPwd] = useState(false);
  const [newSelected, setNewSelected] = useState(false);
  const [inputval, setInputval] = useState("");
  const [pwdLen, setPwdLen] = useState(false);
  const [pwdSpecial, setpwdSpecial] = useState(false);
  const [pwdSame, setpwdSame] = useState(false);
  const [pwdDifferent, setPwdDifferent] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [currentPwd, setCurrentPwd] = useState(false);
  const [newPwd, setNewPwd] = useState(false);
  const [newSelectedCheck, setNewSelectedCheck] = useState(false);
  const [againCheck, setAgainCheck] = useState(false);
  const [newCheckPwd, setNewCheckPwd] = useState(false);
  const [newPwdVal, setNewPwdVal] = useState("");
  const [prevPwdVal, setPrevPwdVal] = useState("");
  const [checkNewPwd, setCheckNewPwd] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewPwdVal(value);
    setAgainCheck(false);
    const validatePassword = () => {
      return new Promise((resolve, reject) => {
        const length = value.length;
        const specialCharRegex =
          /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\=\(\'\"]/;
        const sameCharRegex = /(.)\1{3,}/;

        // pwd len
        const isPwdLen = length >= 8 && length <= 15;
        setPwdLen(isPwdLen);

        // pwd 특수문자
        const hasPwdSpecial = specialCharRegex.test(value);
        setpwdSpecial(hasPwdSpecial);

        // pwd 4번반복여부
        const hasPwdSame = sameCharRegex.test(value);
        setpwdSame(!hasPwdSame);

        // 현재 Pwd와 같은지 여부
        if(prevPwdVal !== value) setPwdDifferent(true);
        else setPwdDifferent(false);
        resolve(); // Resolve the Promise immediately
      });
    };
    validatePassword().then(() => {});
  };

  useEffect(() => {
    if(checkNewPwd === newPwdVal && againCheck && isRightPrevPwd) {
      setIsNextPage(true);
    } else {
      setIsNextPage(false);
    }

  }, [againCheck, isRightPrevPwd])

  const handleNewPwdChange = (e) => {
    const value = e.target.value;
    setCheckNewPwd(value);
    if (value === newPwdVal){
      setAgainCheck(true);
    }
    else{
      setAgainCheck(false);
    } 
  };

  const changePrevPassword = (e) => {
    const value = e.target.value;
    setPrevPwdVal(value);

    if(newPwdVal !== value) setPwdDifferent(true);
    else setPwdDifferent(false);
  };

  useEffect(()=> {
    const timeId = setTimeout(()=>{
      fetchCheckPassword();
    }, 800);
    return () => {
      clearTimeout(timeId);
    }
    
    async function fetchCheckPassword() {
      try{
        const res = await API.post("/member/check/password",{
          password: prevPwdVal,
        });
        console.log(res.data)
        if(res.data === false){
          setIsRightPrevPwd(false);
        }else{
          setIsRightPrevPwd(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  },[prevPwdVal]);
    
  const checkPassword = () => {
    async function fetchPassword() {
      try {
        const res = await API.post("/member/edit/password", {
          password: checkNewPwd,
        });
        if (res.data === "success") {
          navigate("/settinguserinfo", { state: {prev: "change"}, replace: true});
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPassword();
  };

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`비밀번호 변경`} />
        <PasswordText>{`현재 비밀번호`}</PasswordText>
        <InputPasswordTotal currentSelected={currentSelected}>
          <InputPassword
            placeholder="현재 비밀번호를 입력"
            type={currentPwd ? "text" : "password"}
            onFocus={() => setCurrentSelected(true)}
            onBlur={() => setCurrentSelected(false)}
            maxLength={15}
            onChange={changePrevPassword}
          />
          <CheckImg
            src={currentPwd ? ShowPwd : NoShowPwd}
            onClick={() => setCurrentPwd(!currentPwd)}
          />
        </InputPasswordTotal>
        <PwdCondition>
          {isRightPrevPwd ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
          <ConditionTxt isOk={isRightPrevPwd}>
            일치해요
          </ConditionTxt>
        </PwdCondition>
        <PasswordText>{`새로운 비밀번호`}</PasswordText>
        <InputPasswordTotal newSelected={newSelected}>
          <InputPassword
            placeholder="새로운 비밀번호를 입력"
            type={newPwd ? "text" : "password"}
            onFocus={() => setNewSelected(true)}
            onBlur={() => setNewSelected(false)}
            onChange={handleInputChange}
            maxLength={15}
          />
          <CheckImg
            src={newPwd ? ShowPwd : NoShowPwd}
            onClick={() => setNewPwd(!newPwd)}
          />
        </InputPasswordTotal>
        {newPwdVal && (
          <>
            <PwdCondition>
              {pwdLen ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
              <ConditionTxt isOk={pwdLen}>
                8자 이상, 15자 이하로 설정해 주세요
              </ConditionTxt>
            </PwdCondition>
            <PwdCondition>
              {pwdSpecial ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
              <ConditionTxt isOk={pwdSpecial}>
                특수 문자를 사용해 주세요
              </ConditionTxt>
            </PwdCondition>
            <PwdCondition>
              {pwdSame ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
              <ConditionTxt isOk={pwdSame}>
                똑같은 문자가 4번 반복되면 안돼요
              </ConditionTxt>
            </PwdCondition>
            <PwdCondition>
              {pwdDifferent ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
              <ConditionTxt isOk={pwdDifferent}>
                현재 비밀번호와 달라야해요
              </ConditionTxt>
            </PwdCondition>
          </>
        )}
        {pwdLen && pwdSpecial && pwdSame && pwdDifferent && (
          <>
            <PasswordText>{`새로운 비밀번호 확인`}</PasswordText>
            <InputPasswordTotal newSelectedCheck={newSelectedCheck}>
              <InputPassword
                placeholder="새로운 비밀번호를 입력"
                type={newCheckPwd ? "text" : "password"}
                onFocus={() => setNewSelectedCheck(true)}
                onBlur={() => setNewSelectedCheck(false)}
                onChange={handleNewPwdChange}
                maxLength={15}
              />
              <CheckImg
                src={newCheckPwd ? ShowPwd : NoShowPwd}
                onClick={() => setNewCheckPwd(!newCheckPwd)}
              />
            </InputPasswordTotal>
            <PwdCondition>
              {againCheck ? <CheckImg src={Check} /> : <CheckImg src={NoneCheck} />}
              <ConditionTxt isOk={againCheck}>일치해요</ConditionTxt>
            </PwdCondition>
          </>
        )}
        <TotalButton
          onClick={() => checkPassword()}
          isNextPage={isNextPage}
        >{`변경하기`}</TotalButton>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default ChangePassword;
