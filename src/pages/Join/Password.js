import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import TopNumber from '../../components/Join/TopNumber';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';
import NoneCheck from '../../assets/img/noneCheck.svg';
import Check from '../../assets/img/Check.svg';

const SubText = styled.div`
    color: #949494;
    margin-top: 2.25vh;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`;
const InputPassword = styled.input`
    width: 100%;
    border: none;
    outline: none;
    height: 48px;
    padding: 0px 0px 0.94vh 0px;
    border-bottom: 2px solid ${(props)=>props.isSelected ? '#ECAA00' : '#EFEFEF'};
    margin-top: 6.16vh;
    margin-bottom: 3.90vh;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const PwdCondition = styled.div`
    display: flex;
    margin-bottom: 1.42vh;
`;
const ConditionTxt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    color: ${(props)=> props.isOk ? '#149D9D' : '#525252'};

    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

const Password = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [inputval, setInputval] = useState('');
    const [pwdLen, setPwdLen] = useState(false);
    const [pwdSpecial, setpwdSpecial] = useState(false);
    const [pwdSame, setpwdSame] = useState(false);
    const navigator = useNavigate();

    const ChangeBarColor = () => {
        setIsSelected(true);
    }
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputval(value);

        const length = value.length;
        const specialCharRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\=\(\'\"]/;
        const sameCharRegex =  /(.)\1{3,}/;
        // pwd len
        length >=8 && length <=15 ? setPwdLen(true) : setPwdLen(false);
        //pwd 특수문자
        specialCharRegex.test(value) ? setpwdSpecial(true) : setpwdSpecial(false);
        //pwd 4번반복여부
        sameCharRegex.test(value) ? setpwdSame(false) : setpwdSame(true);
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <TopNumber/>
                <MainText maintitle={`로그인 때 사용할\n비밀번호를 입력해 주세요`}/>
                <SubText>로그인 아이디는 이메일 주소를 입력하면 돼요</SubText>
                <InputPassword placeholder='비밀번호'
                type='password'
                isSelected={isSelected} onClick={ChangeBarColor}
                value={inputval} onChange={handleInputChange} maxLength={15}/>
                <PwdCondition>
                    {pwdLen ? <img src={Check}/> : <img src={NoneCheck}/>}
                    <ConditionTxt isOk={pwdLen} >8자 이상, 15자 이하로 설정해 주세요</ConditionTxt>
                </PwdCondition>
                <PwdCondition>
                    {pwdSpecial ? <img src={Check}/> : <img src={NoneCheck}/>}
                    <ConditionTxt isOk={pwdSpecial}>특수 문자를 사용해 주세요</ConditionTxt>
                </PwdCondition>
                <PwdCondition>
                    {pwdSame ? <img src={Check}/> : <img src={NoneCheck}/>}
                    <ConditionTxt isOk={pwdSame}>똑같은 문자가 4번 반복되면 안돼요</ConditionTxt>
                </PwdCondition>
                <JoinButton btnName={'다음'}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Password;
