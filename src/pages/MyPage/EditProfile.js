import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../axios/BaseUrl";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
import InputSelf from "../../components/Main/InputSelf";
import BottomSheet from "../../components/Common/BottomSheet";
import Br from "../../components/Common/Br";
import Department from "../../components/Join/Department";
import Modal from "../../components/Common/Modal";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import Camera from "../../assets/img/MyPage/camera.svg";
import MiniQeustion from "../../assets/img/MyPage/miniQuestion.svg";
import Close from "../../assets/img/Join/closeModal.svg";
import UnderArrow from "../../assets/img/Join/arrow_under.svg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  width: 50px;
  background: ${(props)=>props.isChange ? '#FFC700' : '#efefef'};
  color: ${(props)=>props.isChange ? '#333' : '#949494'};
  font-size: 1rem;
  font-weight: 600;
  &:active{
    background: ${(props)=> props.isChange && '#ECAA00'}
  }
`;
const UploadProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HiddenFileInput = styled.input`
  position: absolute;
  bottom: -5px;
  right: 33.66vw;
  width: 28px;
  height: 28px;
  opacity: 0;
  z-index: 20;
`;

const ProfileImg = styled.img`
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  object-fit: ${(props)=>props.isProfile && 'cover'};
`;
const CameraIcons = styled.div`
  position: absolute;
  bottom: -5px;
  right: 33.66vw;
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
  margin-top: 32px;
  color: #707070;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
`;
const AlreadyUse = styled(SubTitle)`
  color: #CB3D0B;
  font-size: 0.75rem;
`;
const IntroOneLine = styled(SubTitle)`
  margin-top: 28px;
`;
const QuestionMark = styled.img`
  margin-top: 28px;
  margin-left: 4px;
`;
const StudentIdTotal = styled.div`
  margin-top: 4px;
  padding: 13px 0px 10px 0px;
  display: flex;
  width: 12.05vw;
  border-bottom: 2px solid ${(props) => (props.isSelected ? "#ECAA00" : "#efefef")};
`;
const InputStudentId = styled.input`
  outline: none;
  border: none;
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  &::placeholder {
    color: #d0d0d0;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 24px;
  }
`;
const MajorBtsTxt = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 20px;
`;
const MajorTotal = styled.div`
  margin-top: 4px;
  padding: 7px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #efefef;
`;
const MajorText = styled.div`
  color: ${(props)=>props.major ? "#d0d0d0" : '#333333'};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
`;
const CloseImg = styled.img`
  width: 28px;
  height: 28px;
`;
const BottomBtn = styled.div`
  height: 17.29vh;
`;
const SelectDone = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 12px;
  background: #F7F7F7;
  color: #B7B7B7;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DormitroyBox = styled.div`
  margin-top: 12px;
  width: max-content;
  padding: 8px 20px;
  text-align: center;
  margin-right: 2.05vw;
  border-radius: 29px;
  background: ${(props)=>props.isSelect ? '#FFC700' : '#EFEFEF'};
  color: ${(props)=>props.isSelect ? '#333333' : '#707070'};
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
`;
const IntroMySelf = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 8px;
`;
const IntroSub = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  white-space: pre-wrap;
  color: #707070;
  margin-bottom: 20px;
`;
const ExampleBox = styled.div`
  width: 274px;
  height: 134px;
  padding: 20px 16px;
  border-radius: 12px;
  background: #FAFAFA;
`;
const BasicProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
const ExNickName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
`;
const ExMajor = styled(ExNickName)`
  color: #949494;
  margin-top: 4px;
`;
const ExSub = styled.div`
  width: 100%;
  height: 38px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #ECAA00;
  background: linear-gradient(0deg, #FFFBEE, #FFFBEE);
  margin-top: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
`;
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [prevNickname, setPrevNickname] = useState(null);
  const [photo, setPhoto] = useState('');
  const [introduction, setIntroduction] = useState(null);
  const [prevIntroduction, setPrevIntroduction] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [dormitory, setDormitory] = useState('');
  const [prevDormitory, setPrevDormitory] = useState('');
  const DormitoryKind = ["구관", "신관", "행복기숙사"];
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [studentID,setStudentID] = useState(null);
  const [prevStudentID,setPrevStudentID] = useState(null);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [department, setDepartment] = useState('');
  const [prevMajor, setPrevMajor] = useState('');
  const [major,setMajor] = useState(null);
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [gender,setGender] = useState('');
  const navigate = useNavigate();
  const handleMajor = (major) =>{
    setMajor(major);
    setIsDepartmentOpen(!department);
  }
  const DepartmentList = ["글로벌인문학부대학","디자인대학","예술대학","융합기술대학","공과대학"];
  const DepartmentMajors = {
    "글로벌인문학부대학": ["글로벌지역학부", "한국언어문화전공", "일본어권지역학전공", "중국어권지역학전공","영어권지역학전공","프랑스어권지역학전공","독일어권지역학전공","러시아어권지역학전공"],
    "디자인대학": ["디자인학부", "커뮤니케이션디자인전공", "패션디자인전공", "텍스타일디자인전공", "스페이스디자인전공","세라믹디자인전공","인더스트리얼디자인전공","AR·VR미디어디자인전공"],
    "예술대학" : ["영화영상전공","연극전공","무대미술전공","사진영상미디어전공","디지털만화영상전공","문화예술경영전공","디지털콘텐츠전공"],
    "융합기술대학" : ["글로벌금융경영학부","식물식품공학과","그린스마트시티학과","간호학과","스포츠경영전공","스포츠융합학부","사회체육전공"],
    "공과대학" : ["전자공학과","소프트웨어학과","스마트정보통신공학과","경영공학과","그린화학공학과","건설시스템공학과","정보보안공학과","시스템반도체공학과","휴먼지능로봇공학과","지능형로봇학과"],
  }; 
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const res = await API.get("/member/myPage");
        console.log(res.data);
        setUserInfo(res.data);
        setNickname(res.data.nickname);
        setPrevNickname(res.data.nickname);
        setPhoto(res.data.photoName);
        setIntroduction(res.data.introduction);
        setPrevIntroduction(res.data.introduction);
        setStudentID(res.data.studentID);
        setPrevStudentID(res.data.studentID);
        setMajor(res.data.major);
        setPrevMajor(res.data.major);
        setDormitory(res.data.type === 'NEW' ? '신관' : res.data.type === 'OLD' ? '구관' : '행복기숙사');
        setPrevDormitory(res.data.type === 'NEW' ? '신관' : res.data.type === 'OLD' ? '구관' : '행복기숙사');
        setGender(res.data.gender);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (nickname === prevNickname) return;

    const timeId = setTimeout(() => {
      fetchCheckNickName();
    }, 800);

    return () => {
      clearTimeout(timeId);
    };

    async function fetchCheckNickName() {
      try {
        const res = await API.get(
          "/member/check/nickname?nickname=" + nickname
        );

        if (res.data === "duplicate") {
          setIsDuplicate(true);
        } else{
          setIsDuplicate(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [nickname]);

  const handleFile = (event) => {
    setFile(event.target.files);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFileUrl(imageUrl);
    }
  }

  const hadleEditProfile = () => {
    if(isChange === false) return;
    const formData = new FormData();
    
    const postData = {
      'nickname': nickname,
      'major': major,
      'type': dormitory === '구관' ? 'OLD' : (dormitory === '신관' ? 'NEW' : 'HAPPY'),
      'studentID': studentID,
      'introduction': introduction
    }

      formData.append(
        "dto",
        new Blob([JSON.stringify(postData)],{type: "application/json"})
      );

      if(file !== null){
        Object.values(file).forEach((f)=> {
          formData.append('file',f);
        });     
      }

      async function fetchProfile() {
        try {
          const res = await API.post("/member/edit/profile", formData,{
              headers:{
                  'Content-Type': `multipart/form-data`
              }
          });

          if(res.data === 'success') {
            navigate('/mypage');
          }
        } catch (error) {
          console.error(error);
        }
      }
      fetchProfile();
  };

  const handleFocus = (state) => {
    setIsSelected(state);
  };
  const handleBottomSheet = () => {
    setIsMajorOpen(!isMajorOpen);
  };
  const handleStudentId = (ID) => {
    setStudentID(ID);
  };
  const openBottomSheet = (department) => {
    setIsMajorOpen(!isMajorOpen);
    setIsDepartmentOpen(!isDepartmentOpen);
    setDepartment(department);
  };

  useEffect(()=>{
    if(!isDuplicate && (prevNickname !== nickname || prevMajor !== major || prevStudentID !== studentID || prevDormitory !== dormitory || prevIntroduction !== introduction || file !== null) ) setIsChange(true);
    else setIsChange(false);
    
  },[nickname,major, studentID, prevNickname, dormitory, introduction, file, isDuplicate])

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header>
          <GoBack/>
          <EditBtn onClick={hadleEditProfile} isChange={isChange}>{`수정`}</EditBtn>
        </Header>
        <UploadProfile>
          <ProfileImg key={1} src={fileUrl !== null ? fileUrl : photo.length !== 0 ? process.env.REACT_APP_BUCKET_BASEURL + photo : Profile} isProfile={fileUrl !== null}/>
          <HiddenFileInput type="file" accept="image/*" onChange={handleFile}/>
          <CameraIcons>
            <img src={Camera} />
          </CameraIcons>
        </UploadProfile>
        {/* input nickname */}
        <c.SpaceBetween>
          <SubTitle>닉네임</SubTitle>
          {isDuplicate && <AlreadyUse>{`이미 사용 중인 닉네임이에요`}</AlreadyUse>}
        </c.SpaceBetween>
        {nickname !== null &&
        <InputSelf
          borderColor={isDuplicate ? '#CB3D0B' : nickname.length > 0 ? '#ECAA00' : '#EFEFEF'}
          setIsDuplicate={setIsDuplicate}
          isDuplicate={isDuplicate}
          totalLen={8}
          placeholder={`닉네임 입력`}
          value={nickname}
          disabled={true}
          changeValue={setNickname}/>}

        {/* choose major */}
        <SubTitle>전공/학번</SubTitle>
        <MajorTotal onClick={() => handleBottomSheet()}>
          <MajorText major={major === null}>{major === null ? '학과/전공' : major}</MajorText>
          <img src={UnderArrow} />
        </MajorTotal>
        <BottomSheet height={`487px`} padding={`24px 5.12vw 0px 5.12vw`} isOpen={isMajorOpen} interaction={true}>
            <c.SpaceBetween>
              <MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
              <CloseImg src={Close} onClick={() => handleBottomSheet()} />
            </c.SpaceBetween>
            {DepartmentList.map((department) => (
              <Department
                department={department}
                onClick={()=>openBottomSheet(department)}
                isDepartment={true}/>
            ))}
          </BottomSheet>
        {isDepartmentOpen && (
          <BottomSheet height={`630px`} padding={`24px 5.12vw 0px 5.12vw`} isOpen={isDepartmentOpen}>
            <c.SpaceBetween>
              <MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
              <CloseImg src={Close} onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} />
            </c.SpaceBetween>
            {DepartmentMajors[department].map((major) => (
              <Department department={major} onClick={() => handleMajor(major)}/>
            ))}
          </BottomSheet>
        )}
        <StudentIdTotal
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          isSelected={isSelected}>
          <InputStudentId placeholder="학번" onChange={(e)=>handleStudentId(e.target.value)} maxlength={'2'} value={studentID}/>
        </StudentIdTotal>
        <SubTitle>{`기숙사`}</SubTitle>
        <c.Flex>
          {DormitoryKind.map((kind) => (
            (gender === 'MALE' && kind === "구관") ? null : (
              <DormitroyBox onClick={()=>setDormitory(kind)} isSelect={dormitory === kind}>{kind}</DormitroyBox>
            )
          ))}
        </c.Flex>
        <Br marginTop={`3.31vh`}/>
        {/* input introduce self */}
        <c.Flex>
          <IntroOneLine>나를 소개하는 한 줄</IntroOneLine>
          <QuestionMark
            src={MiniQeustion}
            onClick={() => setIsModalOpen(true)}/>
        </c.Flex>
        <InputSelf
          borderColor={isFocus ? '#ECAA00' : '#EFEFEF'}
          totalLen={25}
          placeholder={`나를 소개하는 한 줄을 써주세요`}
          isrepresent={true}
          value={introduction}
          changeValue={setIntroduction}/>
        {isModalOpen &&
          <Modal padding={`20px`} isClose={true} onClick={()=>setIsModalOpen(false)}>
            <IntroMySelf>{`미래의 룸메이트에게\n나를 소개해 주세요!`}</IntroMySelf>
            <IntroSub>{`내가 누군지, 어떤 습관을 가졌는지 등\n나에 대한 설명을 적으면\n더 빠르게 룸메이트를 찾을 수 있어요`}</IntroSub>
            <ExampleBox>
              <c.Flex>
                <BasicProfile src={Profile}/>
                <div>
                  <ExNickName>{`긱스`}</ExNickName>
                  <ExMajor>{`경영학과 · 20학번`}</ExMajor>
                </div>
              </c.Flex>
              <ExSub>{`늦게 일어나는 편이에요~`}</ExSub>
            </ExampleBox>
          </Modal>
        }
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default EditProfile;
