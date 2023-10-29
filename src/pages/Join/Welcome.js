import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import JoinButton from '../../components/JoinButton';
import HeaderLogo from '../../assets/img/headerLogo.svg';
import Chick from '../../assets/img/chick.svg';

const TopLogo = styled.img`

`;
const Intro = () => {


    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <TopLogo src={HeaderLogo}/>
                <JoinButton btnName={'시작하기'}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Intro;
