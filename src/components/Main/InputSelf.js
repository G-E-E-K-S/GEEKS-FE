import React, { useState, useRef } from "react";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => (props.borderColor ? '#ECAA00' : '#efefef')};
`;
const InputNickName = styled.input`
  width: 100%;
  height: 5.56vh;
  border: none;
  outline: none;
  padding: 7px 0px 8px 0px;
  margin-top: 4px;
  color: #333;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: #d0d0d0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
`;

const LetterLen = styled.div`
  color: #b7b7b7;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  margin-top: 6px;
`;
const Represent = styled.div`
  color: #ecaa00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  white-space: nowrap;
  margin: auto 0;
`;
const InputSelf = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [borderColor, setBorderColor] = useState(false);
  const letterCnt = useRef(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    const length = value.length;
    letterCnt.current = length;
  };
  const handleBorderColor = (state) => {
    setBorderColor(state);
  };

  return (
    <div>
      <Flex borderColor={borderColor}>
        <InputNickName
          value={inputVal}
          onChange={handleInputChange}
          maxLength={props.totalLen}
          placeholder={props.placeholder}
          onFocus={()=>handleBorderColor(true)}
          onBlur={()=>handleBorderColor(false)}
        />
        {props.isrepresent ? <Represent>대표</Represent> : null}
      </Flex>

      <LetterLen>
        {letterCnt.current}/{props.totalLen}
      </LetterLen>
    </div>
  );
};
export default InputSelf;
