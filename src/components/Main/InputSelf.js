import React, { useState } from "react";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid ${(props)=> (props.borderColor)};
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
const InputSelf = (props) => {
  const [valid, setValid] = useState(true);
  const handleInputChange = (e) => {
    const value = e.target.value;
    props.changeValue(value); 
    setValid(true);
  };

  return (
    <div>
      <Flex borderColor={props.isFocus? '#ECAA00' : '#EFEFEF'}>
        <InputNickName
          defaultValue={props.value}
          onChange={(e)=>handleInputChange(e)}
          maxLength={props.totalLen}
          placeholder={props.placeholder}
          onFocus={props.isFocus}
          onBlur={props.isBlur}
          disabled={props.disabled}
          valid={props.valid}/>
        {/* {props.isrepresent ? <Represent>대표</Represent> : null} */}
      </Flex>

      <LetterLen>
        {props.value?.length}/{props.totalLen}
      </LetterLen>
    </div>
  );
};
export default InputSelf;
