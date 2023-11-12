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

const DormitoryBoxChoice = styled.div`
    height: 9vh;
    border-radius: 12px;
    background: #EFEFEF;
    color: #707070;
    padding-left: 20px;
    margin-bottom: 1.89vh;
`;

const Dormitory = () => {
    const [dormiVal, setDormiVal] = useState('');
    const navigator = useNavigate();

    const SelectDormitory = (dormitory) => {
        setDormiVal(dormitory);
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <MainText maintitle={`어떤 기숙사에서 생활하시나요?`}/>
                <DormitoryTotal>
                    <DormitoryBox disable={false} dormitory={'신관'} onClick={()=>SelectDormitory('신관')} isSelected={dormiVal == '신관'}/>
                    <DormitoryBox disable={localStorage.getItem('mode') == 1} dormitory={'구관'} onClick={()=>SelectDormitory('구관')} isSelected={dormiVal == '구관'}/>
                    <DormitoryBox disable={false} dormitory={'천안 행복기숙사'} onClick={()=>SelectDormitory('천안 행복기숙사')} isSelected={dormiVal == '천안 행복기숙사'}/>
                </DormitoryTotal>
                <JoinButton btnName={'다음'} />
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Dormitory;
