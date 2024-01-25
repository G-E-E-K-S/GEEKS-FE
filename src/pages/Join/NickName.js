import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import TopNumber from "../../components/Join/TopNumber";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";

const InputNickName = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 48px;
  padding: 0px 0px 0.94vh 0px;
  border-bottom: 2px solid ${(props) => (!props.isSelected ? "#EFEFEF" : props.valuableName === "duplicate" ? "#CB3D0B" : "#ECAA00")};
  margin-top: 6.16vh;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const LetterLen = styled.div`
  color: #b7b7b7;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-top: 8px;
`;
const NickName = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [inputNickName, setInputNickName] = useState("");
  const [valuableName, setValuableName] = useState('');
  const [isNextPage, setIsNextPage] = useState(false);
  const letterCnt = useRef(0);
  const navigator = useNavigate();

  const ChangeBarColor = () => {
    setIsSelected(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputNickName(value);
    const length = value.length;
    letterCnt.current = length;

    length > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  const handleNickName = () => {
    async function fetchNickName() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get(
          "http://localhost:8080/member/nickname?nickname=" + inputNickName
        );
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNickName();
  };

  useEffect(() => {
    const timeId = setTimeout(()=>{
      fetchCheckNickName();
    }, 800);
    return () => {
      clearTimeout(timeId);
    }
    async function fetchCheckNickName() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get(
          "http://localhost:8080/member/check/nickname?nickname=" + inputNickName
        );
        console.log(res.data)
        setValuableName(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, [inputNickName]);
  
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <TopNumber page={4} />
        <MainText maintitle={`회원님을 표현할\n닉네임을 알려주세요`} />
        <InputNickName
          isSelected={isSelected}
          onClick={ChangeBarColor}
          value={inputNickName}
          onChange={handleInputChange}
          maxLength={8}
          valuableName={valuableName}
        />
        <LetterLen>
          {letterCnt.current}/{8}
        </LetterLen>
        <JoinButton
          btnName={"다음"}
          handleClick={() => handleNickName()}
          isNextPage={isNextPage}
        />
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default NickName;
