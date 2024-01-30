import React from "react";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const TotalUserInfo = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;
const UserProfile = styled.img`
  width: 20px;
  heigh: 20px;
  border-radius: 50%;
`;
const UserName = styled.div`
  color: ${(props)=>props.deleted ? '#D0D0D0' : '#707070'};
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 4px;
`;
const PostInfo = (props) => {
  return (
    <TotalUserInfo>
      <UserProfile src={props.profileImg}/>
      <UserName deleted={props.deleted}>{props.username} · {props.uploadtime}</UserName>
    </TotalUserInfo>
  );
};

PostInfo.defaultProps = {
  profileImg: BasicProfile
};
export default PostInfo;
