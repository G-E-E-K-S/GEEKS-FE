import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import InputSelf from "../../components/Main/InputSelf";
import Major from "../../components/Join/Major";
import ReactModal from "react-modal";
import ExampleBox from "../../components/MyPage/ExampleBox";
import Br from "../../components/Common/Br";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import Camera from "../../assets/img/MyPage/camera.svg";
import MiniQeustion from "../../assets/img/MyPage/miniQuestion.svg";

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
  margin-top: 3.31vh;
  color: #707070;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
`;
const QuestionMark = styled.img`
  margin-top: calc(3.31vh + 0.11vh);
  margin-left: 4px; 
  cursor:pointer;
`;
// we have to refactoring
const modalStyle = {
  overlay:{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 10,
  },
  content:{
      width: '124px',
      height: '152px',
      inset:'0',
      padding: '0',
      marginTop: '10.9vh',
      marginLeft: '5.12vw',
      borderRadius: '12px',
      background: '#fff',
      overflow: 'hidden'
  }
}
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
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
        <InputSelf totalLen={8} placeholder={`닉네임 입력`}/>
        {/* choose major */}
        <SubTitle>전공/학번</SubTitle>
        <Major edit={true}/>
        <Br marginTop={`3.31vh`}/>
        {/* input introduce self */}
        <c.Flex>
          <SubTitle>나를 소개하는 한 줄</SubTitle>
          <QuestionMark src={MiniQeustion} onClick={()=>setIsModalOpen(true)}/>
          <ReactModal isOpen={isModalOpen} ariaHideApp={false} style={modalStyle}>
            <ExampleBox/>
          </ReactModal>
        </c.Flex>
        <InputSelf totalLen={25} placeholder={`나를 소개하는 한 줄을 써주세요`} isrepresent={true}/>
        {/* Show profile example */}
        <ExampleBox/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default EditProfile;
