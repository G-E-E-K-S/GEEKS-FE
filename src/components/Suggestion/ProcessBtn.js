import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: ${(props)=>props.btnName === '처리 중'? '#FCEDE8' : props.btnName === '처리 완료' ? '#EDF7FD' : '#fff'};
  border: ${(props)=>props.btnName === '처리 보류' && '1px solid #E2E2E2'};
  color: ${(props)=>props.btnName === '처리 중'? '#AA3106' : props.btnName === '처리 완료' ? '#184B96' : '#1A1A1A'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
`;
const Proceebtn = (props) => {
  return (
    <Button btnName={props.btnName} onClick={props.onClick}>{props.btnName}</Button>
  )
};
export default Proceebtn;
