import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import InputSelf from "../../components/Main/InputSelf";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import Camera from "../../assets/img/MyPage/camera.svg";

const Finish = styled.div`
  margin-top: 6.64vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  width: 50px;
  background: #efefef;
  color: #949494;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;
const UploadProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ProfileImg = styled.img`
  width: 104px;
  height: 104px;
`;
const CameraIcons = styled.div`
  position: absolute;
  bottom: 0px;
  right: 123px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 50%;
  cursor: pointer;
`;
const SubTitle = styled.div`
  margin-top: 5.45vh;
  color: #707070;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const EditProfile = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            <GoBack />
            <Finish>완료</Finish>
          </c.SpaceBetween>
          <UploadProfile>
            <ProfileImg src={Profile} />
            <CameraIcons>
              <img src={Camera} />
            </CameraIcons>
          </UploadProfile>
          {/* input nickname */}
          <SubTitle>닉네임</SubTitle>
          <InputSelf totalLen={8}/>
          {/* input introduce self */}
          <SubTitle>나를 대표하는 한 줄</SubTitle>
          <InputSelf totalLen={25}/>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default EditProfile;
