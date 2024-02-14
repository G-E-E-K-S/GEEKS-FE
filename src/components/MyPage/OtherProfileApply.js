import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import BasicrProfile from "../../assets/img/MyPage/basicProfile.svg";

const TotalProfile = styled.div`
  width: 100%;
  border-radius: 12px;
  background: ${(props)=>props.activeCheck ? '#FFFBEE' : '#fff'};
  border: 1px solid ${(props)=>props.activeCheck ? '#ECAA00' : 'none'};
  margin-bottom: 2.36vh;
`;
const UserProfiles = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;
const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 3.58vw;
`;
const NickName = styled.div`
  margin-bottom: 4px;
  color: #333;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
const Major = styled.div`
  color: #707070;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  line-height: 18px; /* 128.571% */
`;
const OtherProfileApply = (props) => {
  return (
    <TotalProfile activeCheck={props.activeCheck} onClick={props.onClick}>
      <c.SpaceBetween>
        <UserProfiles>
          <UserProfile src={props.userprofile === null ? BasicrProfile : process.env.REACT_APP_BUCKET_BASEURL+props.userprofile} />
          <div>
            <NickName>{props.nickName}</NickName>
            <Major>
              {props.major} · {props.id}학번
            </Major>
          </div>
        </UserProfiles>
      </c.SpaceBetween>
    </TotalProfile>
  );
};
OtherProfileApply.defaultProps={
    userprofile: BasicrProfile
}

export default OtherProfileApply;
