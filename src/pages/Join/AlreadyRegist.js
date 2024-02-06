import React, { useState, useRef } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import JoinButton from "../../components/Join/JoinButton";

const NoticeTitle = styled.div`
  white-space: pre-wrap;
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  margin-top: 36px;
`;
const EnrollDate = styled.div`
  color: #b7b7b7;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
  margin-top: 40px;
`;
const UserEmail = styled.div`
  border-radius: 12px;
  background: #f7f7f7;
  width: 100%;
  padding: 12px 5.12vw;
  align-items: center;
  color: #707070;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 64px;
`;
const ForgetPWD = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
`;
const FindPWD = styled.div`
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  width: max-content;
  padding: 12px 5.12vw;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #333;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const AlreadyRegist = () => {
  const [isEmailSelected, setIsEmailSelected] = useState("false");
  const [isNextPage, setIsNextPage] = useState(false);
  const emailVal = useRef();
  const passwordVal = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailVal = () => {
    let EmailLen = emailVal.current.value.length;
    EmailLen > 0 ? setIsNextPage(true) : setIsNextPage(false);
  };

  const handleEmail = () => {
    console.log(
      emailVal.current.value + "@sangmyung.kr",
      passwordVal.current.value
    );
    async function fetchLogin() {
      try {
        const res = await API.post("/login/login", {
          email: emailVal.current.value + "@sangmyung.kr",
        });
        if (res.data === "success") navigate("/home");
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogin();
  };
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <NoticeTitle>{`아래 이메일로\n이미 가입한 이력이 있어요`}</NoticeTitle>
        <EnrollDate>{`2023년 9월 23일 가입`}</EnrollDate>
        <UserEmail>{location.state?.userEmail + '@sangmyung.kr'}</UserEmail>
        <ForgetPWD>{`비밀번호를 잊어버리셨나요?`}</ForgetPWD>
        <FindPWD onClick={()=>navigate('/forgetemail')}>{`비밀번호 찾기`}</FindPWD>
        <JoinButton onClick={() => handleEmail()} isNextPage={true} btnName={`메일 받기`}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default AlreadyRegist;
