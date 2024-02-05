import React from "react";
import { Link } from "react-router-dom";
import * as c from '../Common/CommonStyle';
import styled from "styled-components";

const Users = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
const UserInfos = styled.div`
  margin-left: 12px;
`;
const UserName = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 4px;
`;
const UserMajorId = styled.div`
  color: #707070;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;
const Edit = styled.div`
  display: inline-flex;
  padding: 1.41vh 5.12vw;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: #fff;

  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;
const UserInfo = (props) => {
  return (
    <Users>
      <c.Flex>
        <ProfileImg src={props.profileImg}></ProfileImg>
        <UserInfos>
          <UserName>{props.userName}</UserName>
          <>
            <UserMajorId>
              {props.userMajor} · {props.UserId}
            </UserMajorId>
          </>
        </UserInfos>
      </c.Flex>
      <Link to={'/myprofile'}>
        <Edit>{`내 프로필`}</Edit>
      </Link>      
    </Users>
  );
};
export default UserInfo;
