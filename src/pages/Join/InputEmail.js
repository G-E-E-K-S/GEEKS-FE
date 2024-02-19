import React, { useState, useRef } from "react";
import API from "../../axios/BaseUrl";
import HeaderMenu from "../../components/Common/HeaderMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import TopNumber from "../../components/Join/TopNumber";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import Loading from "../Loading";

const InputEmailText = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  margin-top: 3.79vh;
`;

const InputInfos = styled.div`
  display: flex;
  margin-top: 7.1vh;
  padding: 7px 0px 8px 0px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
  color: #c4c7c7;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
`;

const Input = styled.input`
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  font-size: 24px;
  &::placeholder {
    color: #d0d0d0;
  }
`;

const Univ = styled.div`
  width: 100%;
  text-align: right;
`;

const InputEmail = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailVal = useRef();
  const navigate = useNavigate();

  const ChangeColor = () => {
    setIsSelected(true);
  };
  const handleEmailVal = () => {
    let EmailLen = emailVal.current.value.length;
    EmailLen > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  //axios
  const handleEmail = () => {
    async function fetchEmailPage() {
      try {
        const res = await API.get("/mail/send?email=" + emailVal.current.value + "@sangmyung.kr");
        res.data === "duplicate" ? navigate("/alreadyregist",{state:{userEmail: emailVal.current.value}}) :
        navigate("/inputcode",{state:{userEmail: emailVal.current.value}});
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmailPage();
  };
  return (
  loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <TopNumber page={1} />
        <MainText
          maintitle={`재학생 인증을 위해\n학교 이메일 주소를 입력해 주세요`}
        />
        <InputInfos isSelected={isSelected}>
          <Input
            maxLength={9}
            placeholder="학번"
            onClick={() => ChangeColor()}
            ref={emailVal}
            onChange={() => handleEmailVal()}
          />
          <Univ>@sangmyung.kr</Univ>
        </InputInfos>
        <JoinButton
          btnName={"인증 메일 받기"}
          handleClick={() => handleEmail()}
          isNextPage={isNextPage}
        />
      </c.ScreenComponent>
    </c.Totalframe>)
  );
};

export default InputEmail;
