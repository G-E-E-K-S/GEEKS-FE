import React, { useState, useRef } from "react";
import styled from "styled-components";

const InputInfos = styled.div`
  display: flex;
  margin-top: 7.1vh;
  padding: 7px 0px 8px 0px;
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? "#ECAA00" : "#EFEFEF")};
  color: #c4c7c7;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
`;

const Input = styled.input`
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  font-size: 24px;
  &::placeholder {
    color: #d0d0d0;
  }
`;

const Univ = styled.div`
  width: 100%;
  text-align: right;
`;
const StudentEmail = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const emailVal = useRef();

  const ChangeColor = () => {
    setIsSelected(true);
  };

  return (
    <InputInfos isSelected={props.isSelected}>
      <Input
        maxLength={9}
        placeholder="학번"
        onClick={()=>ChangeColor()}
        ref={emailVal}
        onChange={props.handleEmailVal}
      />
      <Univ>@sangmyung.kr</Univ>
    </InputInfos>
  );
};
export default StudentEmail;
