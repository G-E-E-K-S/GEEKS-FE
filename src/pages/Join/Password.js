import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import TopNumber from "../../components/Join/TopNumber";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import NoneCheck from "../../assets/img/Join/noneCheck.svg";
import Check from "../../assets/img/Join/Check.svg";
import NoShowPwd from "../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../assets/img/Join/ShowPwd.svg";
import Loading from "../Loading";

const SubText = styled.div`
  color: #949494;
  margin-top: 2.25vh;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const InputPasswordTotal = styled.div`
  display: flex;
  border-bottom: 2px solid ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
  padding: 0px 0px 0.94vh 0px;
  margin-top: 6.16vh;
  margin-bottom: 3.9vh;
`;
const InputPassword = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 48px;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder{
		color: #D0D0D0;
	}
`;

const PwdCondition = styled.div`
  display: flex;
  margin-bottom: 1.42vh;
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

const Password = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [inputval, setInputval] = useState("");
  const [pwdLen, setPwdLen] = useState(false);
  const [pwdSpecial, setpwdSpecial] = useState(false);
  const [pwdSame, setpwdSame] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ChangeBarColor = () => {
    setIsSelected(true);
  };

  const handlePwd = () => {
    setShowPwd(!showPwd);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputval(value);

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

        // 하단 버튼색 바뀜유무
        const isNextPage = isPwdLen && hasPwdSpecial && !hasPwdSame;
        setIsNextPage(isNextPage);

        resolve(); // Resolve the Promise immediately
      });
    };

    validatePassword().then(() => {});
  };

  const checkPassword = () => {
    async function fetchPassword() {
      setLoading(true);
      try {
        const res = await API.post("/member/password", {
          password: inputval,
        });
        if(res.data === 'success') navigate('/nickname');
      } catch (error) {
        console.error(error);
      }
    }
    fetchPassword();
  };

  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <TopNumber page={3} />
        <MainText maintitle={`로그인 때 사용할\n비밀번호를 입력해 주세요`} />
        <SubText>로그인 아이디는 이메일 주소를 입력하면 돼요</SubText>
        <InputPasswordTotal isSelected={isSelected}>
          <InputPassword
            placeholder="비밀번호 입력"
            type={showPwd ? "text" : "password"}
            onClick={ChangeBarColor}
            value={inputval}
            onChange={handleInputChange}
            maxLength={15}
          />
          <img src={showPwd ? ShowPwd : NoShowPwd} onClick={handlePwd} />
        </InputPasswordTotal>
        <PwdCondition>
          {pwdLen ? <img src={Check} /> : <img src={NoneCheck} />}
          <ConditionTxt isOk={pwdLen}>
            8자 이상, 15자 이하로 설정해 주세요
          </ConditionTxt>
        </PwdCondition>
        <PwdCondition>
          {pwdSpecial ? <img src={Check} /> : <img src={NoneCheck} />}
          <ConditionTxt isOk={pwdSpecial}>
            특수 문자를 사용해 주세요
          </ConditionTxt>
        </PwdCondition>
        <PwdCondition>
          {pwdSame ? <img src={Check} /> : <img src={NoneCheck} />}
          <ConditionTxt isOk={pwdSame}>
            똑같은 문자가 4번 반복되면 안돼요
          </ConditionTxt>
        </PwdCondition>
        <JoinButton
          btnName={"다음"}
          handleClick={() => checkPassword()}
          isNextPage={isNextPage}/>
      </c.ScreenComponent>
    </c.Totalframe>

    )
  );
};

export default Password;
