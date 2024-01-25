import React, { useState, useRef } from "react";
import axios from "axios";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import ForgetPwdImg from "../../assets/img/Join/forgetPwd.svg";

const InputInfos = styled.div`
  display: flex;
  margin-top: ${(props) => (props.isPwd ? "0" : "6.27vh")};
  margin-bottom: 18px;
  padding: 7px 0px 8px 0px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
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
const InputEmail = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [isPwdSelected, setIsPwdSelected] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
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
    async function fetchEmailPage() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await API.get(
          "/mail/send?email=" +
            emailVal.current.value +
            "@sangmyung.kr"
        );
        res.data == "duplicate" ? alert("중복") : navigate("/inputcode");
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmailPage();
  };
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <MainText maintitle={`학교 이메일 주소로\n로그인 해주세요`} />
        <InputInfos isSelected={isEmailSelected}>
          <Input
            maxLength={9}
            placeholder="학번"
            onFocus={() => setIsEmailSelected(true)}
            onBlur={() => setIsEmailSelected(false)}
            ref={emailVal}
            onChange={() => handleEmailVal()}
          />
          <Univ>@sangmyung.kr</Univ>
        </InputInfos>
        <InputInfos isSelected={isPwdSelected} isPwd={true}>
          <Input
            placeholder="비밀번호"
            onFocus={() => setIsPwdSelected(true)}
            onBlur={() => setIsPwdSelected(false)}
            ref={passwordVal}
            onChange={() => handleEmailVal()}
          />
        </InputInfos>
        <JoinButton
          btnName={"로그인"}
          handleClick={() => handleEmail()}
          isNextPage={isNextPage}
        />
        <c.Flex>
          <ForgetPwdTxt>{`비밀번호를 잊어버리셨나요?`}</ForgetPwdTxt>
          <img src={ForgetPwdImg}></img>
        </c.Flex>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default InputEmail;
