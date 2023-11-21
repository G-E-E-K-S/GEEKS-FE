import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import JoinButton from '../../components/Join/JoinButton';
import Home from '../../assets/img/Join/joinFinalPage.svg';

const WelcomeText = styled.div`
    margin-top: 14.21vh;
    color: #333;
    text-align: center;

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
`;

const SubText = styled.div`
    margin-top:2.84vh;
    color: #949494;
    text-align: center;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    white-space: pre-wrap;
`;
const TopImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainImg = styled.img`
    margin-top: 8.29vh;
`;
const FinalPage = () => {
    const navigator = useNavigate();
    
    const nextPage = () => {
        console.log('next page')
    }
  
    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <WelcomeText>환영합니다!</WelcomeText>
                <SubText>{`이제부터 긱스와 함께\n행복한 기숙사 생활 해봐요`}</SubText>
                <TopImg>
                    <MainImg src={Home}/>
                </TopImg>
                <JoinButton btnName={'룸메이트 찾으러 가기'} nextPage={nextPage} isNextPage={true}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default FinalPage;
