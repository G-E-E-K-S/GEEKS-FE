import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import JoinHeader from "../../components/Join/JoinHeader";
import AccessList from "../../components/Join/AccessList";
import JoinButton from "../../components/Join/JoinButton";

const SelectPermissions = styled.div`
  color: #b7b7b7;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 32px;
  margin-bottom: 20px;
`;
const LimitTxt = styled.div`
  color: #b7b7b7;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  white-space: pre-wrap;
`;
const AccessRight = () => {
  const [accessLists, setAccessLists] = useState([
    { title: "알림", details: "새로운 서비스 소식을 위한 푸시 알림 메시지 발송"},
    { title: "사진", details: "서비스 내 사진 첨부 및 저장" },
    { title: "카메라", details: "사진 촬영 후 서비스 내에 공유" },
    { title: "위치", details: "사용자 위치에 따른 기숙사 외박 신청 알림 기능" },
  ]);
  const navigate = useNavigate();
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <JoinHeader
          marginTop={`11.37vh;`}
          joinHeaderTxt={`앱 사용을 위해\n다음의 접근 권한이 필요해요`}/>
        <SelectPermissions>{`선택 권한`}</SelectPermissions>
        {accessLists.length !== 0 &&
          accessLists?.map((list, index) => (
            <AccessList
              isLast={accessLists.length === index + 1}
              accessName={list.title}
              accessDetail={list.details}/>
          ))}
        <LimitTxt>{`선택 권한의 경우 허용하지 않아도 서비스를 이용할 수 있으나\n일부 서비스 이용이 제한될 수 있습니다.`}</LimitTxt>
        <JoinButton
          btnName={`확인`}
          isNextPage={true}
          handleClick={() => navigate("/welcome")}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default AccessRight;
