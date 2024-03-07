import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 56px;
  background-color: ${(props) =>
    props.btnName === '처리 중' ? '#FCEDE8' : props.btnName === '처리 완료' ? '#EDF7FD' : '#F7F7F7'};
  color: ${(props) =>
    props.btnName === '처리 중' ? '#AA3106' : props.btnName === '처리 완료' ? '#184B96' : '#707070'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
`;

const ProcessBar = (props) => {
  return (
    <Button btnName={props.btnName}>{props.btnName}</Button>
  )
};
export default ProcessBar;