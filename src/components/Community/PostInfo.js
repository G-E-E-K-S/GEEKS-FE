import React from "react";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const TotalUserInfo = styled.div`
    display: flex;
    margin-top: 16px;
`;
const UserProfile = styled.img`
  width: 20px;
  heigh: 20px;
  border-radius: 50%;
`;
const UserName = styled.div`
  color: #707070;

  font-size: 0.875;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  margin-left: 4px;
`;
const PostInfo = (props) => {
  return (
    <TotalUserInfo>
      <UserProfile src={props.profileImg} />
      <UserName>{props.username} · {props.uploadtime}</UserName>
    </TotalUserInfo>
  );
};

PostInfo.defaultProps = {
  profileImg: BasicProfile
};
export default PostInfo;
