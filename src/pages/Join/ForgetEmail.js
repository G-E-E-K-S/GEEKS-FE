import React, { useState, useRef } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import Loading from "../Loading";

const NoticeTitle = styled.div`
  white-space: pre-wrap;
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  margin-top: 32px;
`;
const Total = styled.div`
  display: flex;
  align-items: center;
  margin-top: 19px;
`;
const SendEmail = styled.div`
  color: #949494;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 8px;
`;
const ResendMail = styled.div`
  border-radius: 6px;
  background: #efefef;
  padding: 4px 12px;
  color: #525252;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  height: max-content;
  line-height: 18px;
`;
const InputInfos = styled.div`
  display: flex;
  margin-top: 6.27vh;
  margin-bottom: 18px;
  padding: 7px 0px 8px 0px;
  border-bottom: 2px solid ${(props) => props.isSelected};
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
  font-weight: 600;
  line-height: 28px;
`;
const ForgetEmail = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailVal = useRef();
  const passwordVal = useRef();
  const navigate = useNavigate();

  const handleEmailVal = () => {
    let EmailLen = emailVal.current.value.length;
    EmailLen > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  const handleEmail = () => {
    async function fetchLogin() {
      setLoading(true);
      try {
        let email = emailVal.current.value + "@sangmyung.kr";
        const res = await API.get("/mail/temporary?email=" + email)
        if (res.data === "success"){
          navigate("/login");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogin();
  };
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <NoticeTitle>{`비밀번호를 찾아드릴게요\n\n기존에 가입하셨던\n이메일 주소를 입력해 주세요`}</NoticeTitle>
        <Total>
          <SendEmail>{`비밀번호 변경 메일을 보내드려요`}</SendEmail>
          <ResendMail>{`메일 재전송`}</ResendMail>
        </Total>
        <InputInfos
          isSelected={isEmailSelected === "error" ? "#CB3D0B" : isEmailSelected ? "#ECAA00" : "#EFEFEF"}>
          <Input
            type="number"
            maxLength={9}
            placeholder="학번"
            onFocus={() => setIsEmailSelected("true")}
            onBlur={() => setIsEmailSelected("false")}
            ref={emailVal}
            onChange={() => handleEmailVal()}/>
          <Univ>@sangmyung.kr</Univ>
        </InputInfos>
        <JoinButton handleClick={() => handleEmail()} isNextPage={isNextPage} btnName={`메일 받기`}/>
      </c.ScreenComponent>
    </c.Totalframe>

    )
  );
};

export default ForgetEmail;
