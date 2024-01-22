import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ForwardArrow from "../../assets/img/Join/forwardArrow.svg";

const DepartmentBox = styled.div`
  height: 64px;
  padding: 20px 0px;
  width: 100%;
`;
const DepartmentTxt = styled.div`
  color: #525252;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
`;
const Department = (props) => {
  return (
    <DepartmentBox onClick={props.onClick}>
      <c.SpaceBetween>
        <DepartmentTxt>{props.department}</DepartmentTxt>
        {props.isDepartment && <img src={ForwardArrow}/>}
      </c.SpaceBetween>
    </DepartmentBox>
  );
};
export default Department;
