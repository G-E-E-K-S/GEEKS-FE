import React, { useState, useRef } from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #efefef;
`;
const InputNickName = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 47px;
  padding: 7px 0px 8px 0px;

  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const LetterLen = styled.div`
  color: #b7b7b7;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  margin-top: 24px;
`;
const InputSelf = (props) => {
  const [inputVal, setInputVal] = useState("");
  const letterCnt = useRef(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    const length = value.length;
    letterCnt.current = length;
  };

  return (
    <Flex>
      <InputNickName
        value={inputVal}
        onChange={handleInputChange}
        maxLength={props.totalLen}
      />
      <LetterLen>
        {letterCnt.current}/{props.totalLen}
      </LetterLen>
    </Flex>
  );
};
export default InputSelf;
