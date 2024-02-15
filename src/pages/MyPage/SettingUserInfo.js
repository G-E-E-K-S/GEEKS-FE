import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../axios/BaseUrl";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import Popup from "../../components/Common/Popup";
import Loading from "../Loading";

const SubTitleBox = styled.div`
  margin-top: 6.64vh;
  margin-left: 8px;
`;
const AccountInfoTxt = styled.div`
  margin-top: 40px;
  color: #949494;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;
const AccountInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;
const AccountTitle = styled.div`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;
const AccountBtn = styled.div`
  width: max-content;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: #fff;
  height: 48px;
  padding: 12px 16px;
  float: right;
`;
const AccountInfo = styled.div`
  color: #949494;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;
const SettingUserInfo = () => {
  const [userData, setUserData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setShowPopup(location.state?.prev === "change");

    async function fetchUserInfo() {
      try {
        const res = await API.get("/member/information");
        setUserData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

      window.history.replaceState({ prev: "" }, "", "/settinguserinfo");
    }
    fetchUserInfo();
  }, []);
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`회원 정보 설정`} />
        <AccountInfoTxt>계정 정보</AccountInfoTxt>
        {/* Email */}
        <AccountInfoBox>
          <AccountTitle>아이디(이메일)</AccountTitle>
          <AccountInfo>{userData?.email}</AccountInfo>
        </AccountInfoBox>
        {/* Password */}
        <AccountInfoBox>
          <AccountTitle>비밀번호</AccountTitle>
          <AccountBtn onClick={() => navigate("/changepassword")}>
            변경하기
          </AccountBtn>
        </AccountInfoBox>
        <AccountInfoTxt>계정 정보</AccountInfoTxt>
        {/* when we account */}
        <AccountInfoBox>
          <AccountTitle>인증 날짜</AccountTitle>
          <AccountInfo>
            {moment(userData?.createdDate).format("YYYY.MM.DD")}
          </AccountInfo>
        </AccountInfoBox>
        {/* Account school */}
        <AccountInfoBox>
          <AccountTitle>인증 학교</AccountTitle>
          <AccountInfo>상명대학교 천안캠퍼스</AccountInfo>
        </AccountInfoBox>
        {/* <AccountBtn>재인증하기</AccountBtn> */}
        <Popup
          bottom={`9.95`}
          isShowPopup={showPopup}
          setShowPopup={setShowPopup}
          message={`비밀번호가 변경되었습니다`}
        />
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};
export default SettingUserInfo;
