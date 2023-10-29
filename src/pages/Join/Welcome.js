import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import JoinButton from '../../components/JoinButton';
import HeaderLogo from '../../assets/img/headerLogo.svg';
import Chick from '../../assets/img/chick.svg';

const TopLogo = styled.img`
    margin-top: 6.63%;
    margin-bottom: 4.73%;
`;

const StartMent = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 700;
    white-space: pre-wrap;
`;

const SubMent = styled.div`
    color: #949494;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-top: 1.89%;
`;

const TopImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MainImg = styled.img`
    margin-top: 5.09%;
`;
const Intro = () => {

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <TopLogo src={HeaderLogo}/>
                <StartMent>{`기숙사 생활 걱정 끝,\n긱스에 오신 걸 환영해요!`}</StartMent>
                <SubMent>{`이메일 가입으로 바로 시작해보세요`}</SubMent>
                <TopImg>
                    <MainImg src={Chick}/>
                </TopImg>
                <JoinButton btnName={'시작하기'}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Intro;
