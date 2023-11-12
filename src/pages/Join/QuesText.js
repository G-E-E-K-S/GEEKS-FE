import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import TopNumber from '../../components/Join/TopNumber';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';
import Chick from '../../assets/img/Join/chick.svg';

const CenterImg = styled.div`
    width: 100%;
    margin-top: 5.46vh;
    display: flex;
    justify-content: center;
    align-itmes: center;
`;


const QuesText = () => {
    const navigator = useNavigate();

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <TopNumber/>
                <MainText maintitle={`은진 님 반가워요!\n\n기숙사 생활을 위한\n몇 가지만 여쭤볼게요`}/>
                <CenterImg>
                    <img src={Chick}/>
                </CenterImg>
                <JoinButton btnName={'다음'} isNextPage={true}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default QuesText;
