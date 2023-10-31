import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import TopNumber from '../../components/Join/TopNumber';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';

const InputNickName = styled.input`
    width: 100%;
    border: none;
    outline: none;
    height: 48px;
    padding: 0px 0px 0.94vh 0px;
    border-bottom: 2px solid ${(props)=>props.isSelected ? '#707070' : '#EFEFEF'};
    margin-top: 6.16vh;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const LetterLen = styled.div`
    color: #B7B7B7;

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    margin-top: 8px;
`;
const NickName = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [inputval, setInputval] = useState('');
    const letterCnt = useRef(0);
    const navigator = useNavigate();

    const ChangeBarColor = () => {
        setIsSelected(true);
    }
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputval(value);

        // Calculate the length of the input value
        const length = value.length;
        // You can limit it to 8 characters if needed
        const maxLength = 8;
        // Update the letter count
        letterCnt.current = length;
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <TopNumber/>
                <MainText maintitle={`회원님을 표현할\n닉네임을 알려주세요`}/>
                <InputNickName isSelected={isSelected} onClick={ChangeBarColor}
                value={inputval} onChange={handleInputChange} maxLength={8}/>
                <LetterLen>{letterCnt.current}/{8}</LetterLen>
                <JoinButton btnName={'다음'}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default NickName;
