import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import TopNumber from '../../components/Join/TopNumber';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';

const TotalSendMail= styled.div`
    display: flex;
    margin-top: 2.25vh;
`;

const SendMailText = styled.div`
    margin-right: 8px;
    color: #949494;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;

const ReSnedBtn = styled.div`
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    color: #525252;
    border-radius: 6px;
    background-color: #EFEFEF;
    cursor: pointer;
    
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

const InputNumber = styled.div`
    display: flex;
    margin-top: 6.99vh;
`;

const Code = styled.input`
    border: none;
    outline: none;
    width: 72px;
    height: 48px;
    padding: 7px 0px 8px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 2px solid ${(props)=>props.isSelected ? '#ECAA00' : '#EFEFEF'};
    margin-right: 20px;
    font-style: normal;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 32px; /* 66.667% */
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const InputCode = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [isSelected, setIsSelected] = useState(false);
    const navigator = useNavigate();
    let num = "";

    const handleInputChange = (index, event) => {
        const nextIndex = index + 1;
    
        num += event.target.value;
    
        if (event.target.value.length === 1 && nextIndex < inputRefs.length) {
          inputRefs[nextIndex].current.focus();
        }

    };

    const ChangeBarColor = () => {
        setIsSelected(true);
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <TopNumber/>
                <MainText maintitle={`수신된 메일에 적힌\n4자리 코드를 입력해 주세요`}/>
                <TotalSendMail>
                    <SendMailText>메일이 도착하지 않았나요?</SendMailText>
                    <ReSnedBtn>인증 메일 재전송</ReSnedBtn>
                </TotalSendMail>
                <InputNumber>
                {inputRefs.map((ref, index) => (
                    <Code
                        isSelected={isSelected}
                        key={index}
                        ref={ref}
                        type="number"
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e)}
                        onFocus={()=>ChangeBarColor()}/>
                    ))}
                </InputNumber>
                <JoinButton btnName={'코드 확인하기'} select={()=>ChangeBarColor()}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default InputCode;
