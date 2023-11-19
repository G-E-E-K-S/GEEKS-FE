import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import InputSelf from "../../components/Main/InputSelf";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import Camera from "../../assets/img/MyPage/camera.svg";
import profileImg from "../../assets/img/MyPage/basicProfile.svg";
import save from "../../assets/img/MyPage/save.svg";

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
const ExampleBox = styled.div`
position: relative;
  width: 100%;
  height: 264px;
  border-radius: 12px;
  background: #f7f7f7;
  padding: 20px;
  margin-top: 25px;
  &::before {
    content: '';
	position: absolute;
	top: 0;
	left: 25.5px;
	border: 23px solid transparent;
	border-bottom-color: #F7F7F7;
	border-top: 0;
	margin-top: -10px;
  }
`;
const ExampleText = styled.div`
  color: #707070;
  font-size: ${(props) => (props.isFirst ? "14px" : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  white-space: pre-wrap;
`;
const ShowExampleBox = styled.div`
  width: 100%;
  height: 134px;
  border-radius: 12px;
  background: #fff;
  margin: 2.36vh 0px;
  padding: 20px 16px;
`;
const ExampleProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
const ExampleNickName = styled.div`
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
const ExampleInfo = styled.div`
  color: #949494;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 4px;
`;
const ExampleIntroduce = styled.div`
  border-radius: 8px;
  border: 1px solid #ecaa00;
  background: #f7f7f7;
  display: flex;
  width: 238px;
  padding: 10px 16px;
  margin-top: 16px;
  align-items: center;
  margin-right: 8px;
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const ExampleSave = styled.img`
  margin-top: 21px;
  width: 28px;
  height: 28px;
`;
const EditProfile = () => {
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
        <InputSelf totalLen={8} />
        {/* input introduce self */}
        <SubTitle>나를 대표하는 한 줄</SubTitle>
        <InputSelf totalLen={25} />
        {/* Show profile example */}
        <ExampleBox>
          <ExampleText isFirst={true}>
            ‘룸메이트 찾기’ 프로필에 적힐 문장을 적어주세요.
          </ExampleText>
          <ShowExampleBox>
            <c.Flex>
              <ExampleProfile src={profileImg} />
              <div>
                <ExampleNickName>긱스관리자</ExampleNickName>
                <ExampleInfo>커뮤니케이션디자인전공 · 20학번</ExampleInfo>
              </div>
            </c.Flex>
            <c.Flex>
              <ExampleIntroduce>늦게 일어나는 편이에요~</ExampleIntroduce>
              <ExampleSave src={save} />
            </c.Flex>
          </ShowExampleBox>
          <ExampleText isFirst={false}>
            {`내가 누군지, 어떤 습관을 지녔는지 등 나에 대한 설명을 적으면\n더 빠르게 룸메이트를 찾을 수 있어요!`}
          </ExampleText>
        </ExampleBox>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default EditProfile;
