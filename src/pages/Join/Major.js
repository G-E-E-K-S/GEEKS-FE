import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import BottomSheet from "../../components/Common/BottomSheet";
import Department from "../../components/Join/Department";
import UnderArrow from "../../assets/img/Join/arrow_under.svg";
import Close from "../../assets/img/Join/closeModal.svg";
import Loading from "../Loading";

const MajorTotal = styled.div`
  margin-top: 6.16vh;
  padding: 7px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #efefef;
`;
const MajorText = styled.div`
  color: ${(props)=>props.major ? "#d0d0d0" : '#333333'};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
`;

const StudentIdTotal = styled.div`
  margin-top: 1.77vh;
  padding: 7px 0px 8px 0px;
  display: flex;
  justify-content: flex-start;
  width: 30.82vw;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#efefef")};
`;
const InputStudentId = styled.input`
  outline: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
  &::placeholder {
    color: #d0d0d0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const MajorBtsTxt = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 20px;
`;
const CloseImg = styled.img`
  width: 28px;
  height: 28px;
`;
const Major = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [department,setDepartment] = useState('디자인대학');
  const [major,setMajor] = useState(null);
  const [studentID,setStudentID] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFocus = (state) => {
    setIsSelected(state);
  };
  const handleBottomSheet = () => {
    setIsMajorOpen(!isMajorOpen);
  };
  const handleStudentId = (ID) => {
    if(isNaN(ID)) return;
    else{
      setIsNextPage(ID.trim() !== '');
      setStudentID(ID);
    }
  }

  const DepartmentList = ["글로벌인문학부대학","디자인대학","예술대학","융합기술대학","공과대학"];
  const DepartmentMajors = {
    "글로벌인문학부대학": ["글로벌지역학부", "한국언어문화전공", "일본어권지역학전공", "중국어권지역학전공","영어권지역학전공","프랑스어권지역학전공","독일어권지역학전공","러시아어권지역학전공"],
    "디자인대학": ["디자인학부", "커뮤니케이션디자인전공", "패션디자인전공", "텍스타일디자인전공", "스페이스디자인전공","세라믹디자인전공","인더스트리얼디자인전공","AR·VR미디어디자인전공"],
    "예술대학" : ["영화영상전공","연극전공","무대미술전공","사진영상미디어전공","디지털만화영상전공","문화예술경영전공","디지털콘텐츠전공"],
    "융합기술대학" : ["글로벌금융경영학부","식물식품공학과","그린스마트시티학과","간호학과","스포츠경영전공","스포츠융합학부","사회체육전공"],
    "공과대학" : ["전자공학과","소프트웨어학과","스마트정보통신공학과","경영공학과","그린화학공학과","건설시스템공학과","정보보안공학과","시스템반도체공학과","휴먼지능로봇공학과","지능형로봇학과"],
  }; 
  const openBottomSheet = (department) => {
    setIsMajorOpen(!isMajorOpen);
    setIsDepartmentOpen(!isDepartmentOpen);
    setDepartment(department);
  };
  const handleMajor = (major) =>{
    setMajor(major);
    setIsDepartmentOpen(!department);
  }
  const sendData = () => {
    async function fetchMjor() {
      setLoading(true);
      try {
        const res = await API.get("/member/major?major=" + `${major}` + "&studentID=" + `${studentID}`);
        if(res.data === 'success') navigate('/gender');
      } catch (error) {
        console.error(error);
      }
    }
    fetchMjor();
  }

  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`전공 학과와 학번을 알려주세요`} />
        <MajorTotal onClick={() => handleBottomSheet()}>
          <MajorText major={major === null}>{major === null ? '학과/전공' : major}</MajorText>
          <img src={UnderArrow} />
        </MajorTotal>
        {/* open Major Bottom Sheet */}
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
          {isDepartmentOpen && 
          <BottomSheet height={`630px`} padding={`24px 5.12vw 0px 5.12vw`} isOpen={isDepartmentOpen} interaction={false}>
            <c.SpaceBetween>
              <MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
              <CloseImg src={Close} onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} />
            </c.SpaceBetween>
            {DepartmentMajors[department].map((major) => (
              <Department department={major} onClick={() => handleMajor(major)}/>
            ))}
          </BottomSheet>}

        <StudentIdTotal
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          isSelected={isSelected}>
          <InputStudentId placeholder="학번 입력" type="text" maxlength={'2'} value={studentID} onChange={(e)=>handleStudentId(e.target.value)}/>
        </StudentIdTotal>

        <JoinButton btnName={"다음"} isNextPage={isNextPage} handleClick={()=>sendData()}/>
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};

export default Major;
