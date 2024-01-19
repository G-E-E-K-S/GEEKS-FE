import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import BottomSheet from "../../components/Common/BottomSheet";
import Department from "../../components/Join/Department";
import UnderArrow from "../../assets/img/Join/arrow_under.svg";
import Close from "../../assets/img/Join/closeModal.svg";

const MajorTotal = styled.div`
  margin-top: 6.16vh;
  padding: 7px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #efefef;
`;

const MajorText = styled.div`
  color: #d0d0d0;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
`;

const StudentIdTotal = styled.div`
  margin-top: 1.77vh;
  padding: 7px 0px 8px 0px;
  display: flex;
  width: 22.82vw;
  justify-content: space-between;
  border-bottom: 2px solid ${(props)=>props.isSelected? '#ECAA00' : '#efefef'};
`;
const InputStudentId = styled.input`
  outline: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  &::placeholder {
    color: #d0d0d0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
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
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  
  const navigator = useNavigate();

  const handleStudentId = (state) => {
    setIsSelected(state);
  };
  const handleBottomSheet = () => {
    setIsMajorOpen(!isMajorOpen);
  };

  const DepartmentList = ["글로벌인문학부대학","디자인대학","예술대학","융합기술대학","공과대학",];
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <MainText maintitle={`전공 학과와 학번을 알려주세요`} />
        <MajorTotal onClick={() => handleBottomSheet()}>
          <MajorText>학과/전공</MajorText>
          <img src={UnderArrow} />
        </MajorTotal>
        {/* open Major Bottom Sheet */}
        {isMajorOpen && (
          <BottomSheet height={`487px`} padding={`24px 5.12vw 0px 5.12vw`}>
            <c.SpaceBetween>
              <MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
              <CloseImg src={Close} onClick={() => handleBottomSheet()} />
            </c.SpaceBetween>
            {DepartmentList.map((department) => (
              <Department department={department} />
            ))}
          </BottomSheet>
        )}
        <StudentIdTotal onFocus={() => handleStudentId(true)} onBlur={()=>handleStudentId(false)} isSelected={isSelected}>
          <InputStudentId placeholder="학번 입력" />
        </StudentIdTotal>
        {/* open StudentId Bottom Sheet */}

        <JoinButton btnName={"다음"} />
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Major;
