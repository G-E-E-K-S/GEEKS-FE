import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from '../../components/Join/GoBack';
import JoinButton from '../../components/Join/JoinButton';
import MainText from '../../components/Join/MainText';
import GenderBox from '../../components/Join/GenderBox';

const GenderTotal = styled.div`
    display: flex;
    & > :first-child {
        margin-right: 8px;
    }
`;

const Gender = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isgirl, setIsgirl] = useState(false);
    const [isboy, setIsboy] = useState(false);
    const [isNextPage, setIsNextPage] = useState(false);
    const navigator = useNavigate();

    const ChangeColor = () => {
        setIsSelected(true);
    }

    const SelectGender = (gender) => {
        if(gender=='여자'){
            setIsgirl(true);
            setIsboy(false);
            localStorage.setItem('mode', 2);
        }else{
            setIsgirl(false);
            setIsboy(true);
            localStorage.setItem('mode', 1);
        }
        setIsNextPage(true);
    }

    const checkGender = () => {
        const CurGender = isgirl ? 2 : 1;
        async function fetchGenderPage(){
            try{
                axios.defaults.withCredentials=true; // allow cookies
                const res = await axios.get("http://localhost:8080/member/gender?gender="+ CurGender);
                console.log(res)
            }catch(error){
              console.error(error);
            }
        }
        fetchGenderPage();
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <GoBack/>
                <MainText maintitle={`성별을 알려주세요`}/>
                <GenderTotal>
                    <GenderBox gender={'남자'} onClick={()=>SelectGender('남자')} isSelected={isboy}></GenderBox>
                    <GenderBox gender={'여자'} onClick={()=>SelectGender('여자')} isSelected={isgirl}></GenderBox>
                </GenderTotal>
                <JoinButton btnName={'다음'} handleClick={()=>checkGender()} isNextPage={isNextPage}/>
            </c.ScreenComponent>
        </c.Totalframe>
    );
};

export default Gender;
