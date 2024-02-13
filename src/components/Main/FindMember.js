import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const FindMemberTotal = styled.div`
  padding: 20px 0 24px 0;
`;
const UserName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;
const Major = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #949494;
  margin-top: 2px;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
`;
const FindMember = (props) => {
  return (
    <FindMemberTotal onClick={props.onClick}>
      <c.Flex>
        <ProfileImg src={props.profileImg.length === 0 ? BasicProfile : process.env.REACT_APP_BUCKET_BASEURL + props.profileImg} />
        <div>
          <UserName>{props.userName}</UserName>
          <Major>{props.major}</Major>
        </div>
      </c.Flex>
    </FindMemberTotal>
  );
};
export default FindMember;
