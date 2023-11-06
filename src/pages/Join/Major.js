import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';
import BottomSheet from '../../components/Join/BottmSheet';
import UnderArrow from '../../assets/img/arrow_under.svg';

const MajorTotal = styled.div`
    margin-top: 6.16vh;
    padding: 7px 0px 8px 0px;
    display: flex;
    justify-content: space-between;
    width:100%;
    border-bottom: 2px solid #EFEFEF;
`;

const MajorText = styled.div`
    color: #D0D0D0;

    font-size: 24px;
    font-style: normal;
    font-weight: 600;
`;

const StudentIdTotal = styled.div`
    margin-top: 1.77vh;
    padding: 7px 0px 8px 0px;
    display: flex;
    width: 88px;
    justify-content: space-between;
    border-bottom: 2px solid #EFEFEF;
`;
const Major = () => {
    const [isSelected, setIsSelected] = useState(false);
    const navigator = useNavigate();

    const ChangeBarColor = () => {
        setIsSelected(true);
    }
    

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <MainText maintitle={`전공 학과와 학번을 알려주세요`}/>
                <BottomSheet/>
                <MajorTotal>
                    <MajorText>학과/전공</MajorText>
                    <img src={UnderArrow}/>
                </MajorTotal>
                <StudentIdTotal>
                    <MajorText>학번</MajorText>
                    <img src={UnderArrow}/>
                </StudentIdTotal>
                <JoinButton btnName={'다음'}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Major;
