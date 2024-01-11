import React from "react";
import styled from "styled-components";
import UnderArrow from "../../assets/img/Join/arrow_under.svg";

const MajorTotal = styled.div`
  margin-top: ${(props) => (props.edit ? "2.01vh" : "6.16vh")};
  padding: 7px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #efefef;
  cursor: pointer;
`;

const MajorText = styled.div`
  color: #d0d0d0;
  font-size: ${(props) => (props.edit ? "1.125rem" : "1.5rem")};
  font-style: normal;
  font-weight: 600;
`;
const ArrowImg = styled.img`
  width: ${(props) => (props.edit ? "20px" : "1.5rem")};
  height: ${(props) => (props.edit ? "20px" : "1.5rem")};
`;
const StudentIdTotal = styled.div`
  margin-top: 1.77vh;
  padding: 7px 0px 8px 0px;
  display: flex;
  width: 88px;
  justify-content: space-between;
  border-bottom: 2px solid #efefef;
`;
const Major = (props) => {
  return (
    <div>
      <MajorTotal edit>
        <MajorText edit>학과/전공</MajorText>
        <ArrowImg edit src={UnderArrow} />
      </MajorTotal>
      <StudentIdTotal>
        <MajorText edit>학번</MajorText>
        <ArrowImg edit src={UnderArrow} />
      </StudentIdTotal>
    </div>
  );
};

export default Major;
