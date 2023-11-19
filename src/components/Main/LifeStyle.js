import React,{useState,useEffect} from "react";
import styled from "styled-components";
import * as c from "../Common/CommonStyle";

const LifeStyleTxt = styled.div`
  color: #b7b7b7;
  font-size: 14px;
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
  white-space: nowrap;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${(props)=> props.checked ? '#FFC700' : '#efefef'};
  cursor: pointer;

  color: ${(props)=> props.checked ? '#333' : '#707070'};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  useEffect(()=>{
    setSelectedOption(null);
  },[props.resetStat]);

  return (
    <>
      <LifeStyleTxt>{props.lifeStyleText}</LifeStyleTxt>
      <Flex>
        {props.lifeStyle.map((option, index) => (
          <label key={index}>
            <InputRadio
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <SubLifeStyle checked={selectedOption === option}>{option}</SubLifeStyle>
          </label>
        ))}
      </Flex>
      {props.noShowLine ? <OnlyMargin/> : <Line/>}
    </>
  );
};
export default LifeStyle;
