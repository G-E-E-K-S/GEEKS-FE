import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';
import DormitoryBox from '../../components/Join/DormitoryBox';

const DormitoryTotal = styled.div`
    margin-top: 6.16vh;
    & > :last-child {
        margin-bottom: 0px;
    }
`;

const Dormitory = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isgirl, setIsgirl] = useState(false);
    const [isboy, setIsboy] = useState(false);
    const navigator = useNavigate();

    const ChangeColor = () => {
        setIsSelected(true);
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <MainText maintitle={`어떤 기숙사에서 생활하시나요?`}/>
                <DormitoryTotal>
                    <DormitoryBox dormitory={'신관'}/>
                    <DormitoryBox dormitory={'구관'}/>
                    <DormitoryBox dormitory={'천안 행복기숙사'}/>
                </DormitoryTotal>
                <JoinButton btnName={'다음'} />
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Dormitory;
