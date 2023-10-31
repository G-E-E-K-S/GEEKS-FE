import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import TopNumber from '../../components/Join/TopNumber';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';

const InputEmailText = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    white-space: pre-wrap;
    margin-top: 3.79vh;
`;

const InputInfos = styled.div`
    display: flex;
    margin-top: 7.10vh;
    padding: 7px 0px 8px 0px;
    border-bottom: 2px solid ${(props) => (props.isSelected ? '#707070' : '#EFEFEF')};
    color: #C4C7C7;
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
`;

const Univ = styled.div`
    width: 100%;
    text-align: right;
`;

const InputEmail = () => {
    const [isSelected, setIsSelected] = useState(false);
    const navigator = useNavigate();

    const ChangeColor = () => {
        setIsSelected(true);
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <TopNumber flag={1}/>
                <MainText maintitle={`재학생 인증을 위해\n학교 이메일 주소를 입력해 주세요`}/>
                <InputInfos isSelected={isSelected}>
                    <Input maxLength={9} onClick={()=>ChangeColor()} />
                    <Univ>@sangmyung.kr</Univ>
                </InputInfos>
                <JoinButton btnName={'인증 메일 받기'} />
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default InputEmail;
