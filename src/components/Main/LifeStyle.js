import React,{useState,useEffect} from "react";
import styled from "styled-components";
import * as c from "../Common/CommonStyle";

const LifeStyleTxt = styled.div`
  color: #b7b7b7;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const InputRadio = styled.input`
  display: none;
`;
const SubLifeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 8px 16px;
  border-radius: 20px;
  background: ${(props)=> props.checked ? '#FFC700' : '#efefef'};
  cursor: pointer;

  color: ${(props)=> props.checked ? '#333' : '#707070'};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
`;
const Line = styled.div`
  width: 350px;
  height: 1px;
  background: #efefef;
  margin: 24px 0px;
`;
const OnlyMargin = styled.div`
  margin: 24px 0px;
`;
const LifeStyle = (props) => {
  const handleOptionChange = (key,value) => {
    // setSelectedOption(key);
    props.lifeStyleSection(value);
  };

  return (
    <>
      <LifeStyleTxt>{props.lifeStyleText}</LifeStyleTxt>
      <Flex>
      {props.lifeStyle.map((value)=>(
        <label>
          <InputRadio
            onClick={() => handleOptionChange(Object.keys(value)[0], Object.values(value)[0])}/>
          <SubLifeStyle checked={Object.values(value)[0] === props.isState}>{Object.keys(value)}</SubLifeStyle>
        </label>
      ))}
      </Flex>
      {props.noShowLine ? <OnlyMargin/> : <Line/>}
    </>
  );
};
export default LifeStyle;