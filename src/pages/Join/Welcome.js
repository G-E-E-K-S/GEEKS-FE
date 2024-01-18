import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import JoinButton from '../../components/Join/JoinButton';
import GeeksLogo from '../../assets/img/Join/geeksLogo.svg';

const TopLogo = styled.img`
    margin-top: 6.63vh;
    margin-bottom: 4.73vh;
`;

const StartMent = styled.div`
    color: #333;
    font-size: 1.75rem;
    font-weight: 700;
    white-space: pre-wrap;
`;

const SubMent = styled.div`
    color: #949494;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 1.89vh;
`;

const TopImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginButton = styled.div`
    width: 89.74vw;
    height: 60px;
    border-radius: 12px;
    border: 1px solid #E2E2E2;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    bottom: calc(60px + 10.18vh + 12px);
    cursor: pointer;
    color: #333;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 24px;
`;
const Welcome = () => {
    const navigator = useNavigate();
    
    const nextPage = () => {
        navigator('/inputemail');
    }
  
    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <TopLogo src={GeeksLogo}/>
                <StartMent>{`기숙사 생활 걱정 끝,\n긱스에 오신 걸 환영해요!`}</StartMent>
                <SubMent>{`이메일 가입으로 바로 시작해보세요`}</SubMent>
                <TopImg>
                    {/* Input img */}
                </TopImg>
                <LoginButton onClick={()=>navigator('/login')}>로그인</LoginButton>
                <JoinButton btnName={'이메일 회원가입'} handleClick={nextPage} isNextPage={true}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Welcome;
