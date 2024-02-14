import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import mainLogo from '../../assets/img/Join/mainLogo.svg';

const IntroLogo = styled.div`
    height: 100vh;
    min-height: -webkit-fill-available; 
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Intro = () => {
    const navigation = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation('/welcome'); // 경로에 시작 슬래시 추가
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <c.Totalframe>
            <IntroLogo>
                <img src={mainLogo} alt="Main Logo" />
            </IntroLogo>
        </c.Totalframe>
    );
};

export default Intro;
