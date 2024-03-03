import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import TopNumber from "../../components/Join/TopNumber";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import ErrorPopup from "../../components/Common/ErrorPopup";

const InputInfos = styled.div`
  display: flex;
  padding: 0px 0px 0.94vh 0px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
  color: #c4c7c7;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  height: 48px;
  margin-top: 6.16vh;
`;

const InputNickName = styled.input`
  width: 100%;
  border: none;
  outline: none;
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
  const [isPopup, setIsPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const letterCnt = useRef(0);
  const navigate = useNavigate();

  const ChangeBarColor = () => {
    setIsSelected(true);
  };

  const handleInputChange = (e) => {
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
    const value = e.target.value;
    if (value.length > 0 && !regex.test(value)) {
      setErrorPopup(true);
    }
    setInputNickName(value);
    const length = value.length;
    letterCnt.current = length;
    length > 0 && regex.test(value) ? setIsNextPage(true) : setIsNextPage(false);
  };

  const handleNickName = () => {
    if(!isNextPage){return};
    async function fetchNickName() {
      try {
        const res = await API.get("/member/nickname?nickname=" + inputNickName);
        if(res.data === 'success') navigate('/questiontext', {state : {inputNickName}});
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
        const res = await API.get("/member/check/nickname?nickname=" + inputNickName);
        setValuableName(res.data);
        if(res.data ==='duplicate'){
          setIsNextPage(false);
          setIsPopup(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [inputNickName]);
  
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <TopNumber page={4} />
        <MainText maintitle={`회원님을 표현할\n닉네임을 알려주세요`} />
        <InputInfos isSelected={isSelected}>
          <InputNickName
            onClick={ChangeBarColor}
            value={inputNickName}
            onChange={handleInputChange}
            maxLength={8}
            valuableName={valuableName}
          />
        </InputInfos>
        <LetterLen>
          {letterCnt.current}/{8}
        </LetterLen>

        <ErrorPopup 
        message={`이미 사용 중인 닉네임이에요`} 
        setShowPopup={setIsPopup}
        isShowPopup={isPopup} 
        bottom={'18.72'}/>
        
        <ErrorPopup 
        message={`닉네임은 한글 / 숫자 / 영어만 입력이 가능합니다`} 
        setShowPopup={setErrorPopup}
        isShowPopup={errorPopup} 
        bottom={'18.72'}/>
        <JoinButton
          btnName={"다음"}
          handleClick={() => handleNickName()}
          isNextPage={isNextPage}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default NickName;
