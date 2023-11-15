import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import Header from '../../components/Main/Header';
import NavigationBar from '../../components/Main/NavigationBar';
import SubTitle from "../../components/Main/SubTitle";
import ClubCategory from "../../components/Main/ClubCategory";
import ClubBox from "../../components/Main/ClubBox";
import checklist from '../../assets/img/Home/checkList.svg';
import rule from '../../assets/img/Home/Rule.svg';
import stayOut from '../../assets/img/Home/stayOut.svg';
import dormiNoti from '../../assets/img/Home/dormiNoti.svg';
import forwardArrow from '../../assets/img/Home/forwardArrow.svg';
import addCircle from '../../assets/img/Home/addCircle.svg';
import chick from '../../assets/img/Join/chick.svg';

const System = styled.div`
    width: 100%;
    display: flex;
    margin: 4.26vh 5px 0 5px;
    &>:last-child {
        margin-right: 0; /* 마지막 이미지에는 간격을 적용하지 않음 */
    }
`;
const Icons = styled.div`
    width: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 28px;
    cursor: pointer;
`;
const Icon = styled.img`
    margin-bottom: 8px;
`;
const IconText = styled.div`
    color: #333;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`;
const Roommate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5.68vh;
`;
const EnrollHabit = styled.div`
    height: 21.8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #fff;
    margin-top: 2.36vh;
`;
const EnrollText = styled.div`
    color: #707070;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    white-space: pre-wrap;
    margin-top: 16px;
`;
const Club = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8.53vh;
    margin-bottom: 2.36vh;
`;
const Post = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8.53vh;
    margin-botton: 2.36vh;
`;
const Home = () => {
    const navigate = useNavigate();
    const handlePage = () => {
        navigate('/liverule');
    }
    return (
        <c.Totalframe main={true}>
            <c.ScreenComponent>
                <c.SubScreen>
                    <Header/>
                    <System>
                        <Icons>
                            <Icon src={checklist}/>
                            <IconText>체크리스트</IconText>
                        </Icons>
                        <Icons onClick={() => handlePage()}>
                            <Icon src={rule}/>
                            <IconText>생활 규칙</IconText>
                        </Icons>
                        <Icons>
                            <Icon src={stayOut}/>
                            <IconText>외박 신청</IconText>
                        </Icons>
                        <a href={'https://www.smu.ac.kr/dormi2/board/notice.do'} target="_blank">
                            <Icons>
                                <Icon src={dormiNoti} />
                                <IconText>기숙사 공지</IconText>
                            </Icons>
                        </a>
                    </System>
                    <Roommate>
                        <SubTitle subtitle={`은진님과 딱 맞는\n룸메이트를 찾았어요`}/>
                        <img src={forwardArrow}/>
                    </Roommate>
                    <EnrollHabit>
                        <img src={addCircle}/>
                        <EnrollText>{`생활 습관을 등록하고\n나와 딱 맞는 룸메이트를 찾아보세요!`}</EnrollText>
                    </EnrollHabit>
                    <Club>
                        <SubTitle subtitle={`현재 가장 인기있는 모임이에요`}/>
                        <img src={forwardArrow}/>
                    </Club>
                    <ClubCategory clubCategory={`배달`}></ClubCategory>
                    <ClubBox profileImg={chick} nickName={`이소윤`} clubTitle={`같이 신전떡볶이 시키실 분 구해요`} JoinPerson={`8명`}/>
                    <Post>
                        <SubTitle subtitle={`이런 글은 어떠세요?`}/>
                        <img src={forwardArrow}/>
                    </Post>
                </c.SubScreen>
            </c.ScreenComponent>
            <NavigationBar type={`home`}/>
        </c.Totalframe>
    )
};
export default Home;