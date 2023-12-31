import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import GoBack from "../../components/Join/GoBack";
import PageName from "../../components/Main/PageName";
import UserInfo from '../../components/Main/UserInfo';
import MyPageMenu from "../../components/Main/MyPageMenu";
import NavigationBar from "../../components/Main/NavigationBar";
import basicProfile from '../../assets/img/MyPage/basicProfile.svg';
import rightArrow from '../../assets/img/MyPage/rightArrow.svg';
import enrollLifeStyle from '../../assets/img/MyPage/enrollLIfeStyle.svg';
import saveList from '../../assets/img/MyPage/saveList.svg';
import rommateApply from '../../assets/img/MyPage/rommateApply.svg';
import userInfo from '../../assets/img/MyPage/userInfo.svg';
import notice from '../../assets/img/MyPage/notice.svg';
import announce from '../../assets/img/MyPage/announce.svg';
import question from '../../assets/img/MyPage/question.svg';
import inquiry from '../../assets/img/MyPage/inquiry.svg';

const UserInfoTop = styled.div`
    margin-top: 4.50vh;
`;
const SelfIntro = styled.div`
    border-radius: 8px;
    background: #F7F7F7;
    display: flex;
    width: 89.74vw;
    padding: 10px 16px;
    align-items: center;
    margin-top: 1.42vh;

    color: #333;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
`;
const ShowMyProfile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4.14vh;
    margin-bottom: 2.72vh;
`;
const ShowProfileTxt = styled.div`
    color: #333;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
const ShowProfileSubtxt = styled.div`
    color: #949494;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-top: 0.71vh;
`;
const ToggleBtn = styled.button`
    width: 64px;
    height: 32px;
    border-radius: 24px;
    padding: 4px 5px;
    border: 1px solid ${(props) => (props.toggle ? '#EFEFEF' : '#FEE384')};
    cursor: pointer;
    background-color: ${(props) => (props.toggle ? '#EFEFEF' : '#FFF4CD')};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
    background-color: ${(props) => (props.toggle ? '#949494' : '#FFC700')};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    transition: all 0.5s ease-in-out;
    ${(props) =>
    props.toggle &&
    `
        transform: translate(-30px, 0);
        transition: all 0.5s ease-in-out;
    `}
`;
const SortLine = styled.div`
    position: relative;
    z-index: 10;
    width: 100vw;
    height: 1.41vh;
    background: #F7F7F7 !important;
` 
const WelcomeKit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8.05vh;
    padding: 0px 24px 0px 20px;
    margin: 2.36vh 0px;
    border-radius: 12px;
    background: #FFC700;
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    white-space: pre-wrap;
    line-height: 18px; /* 128.571% */
`;
const MyPage = () => {
    const [toggle, setToggle] = useState(false);
    const clickedToggle = () => {
        setToggle((prev) => !prev);
      };
    const navigate = useNavigate();
    return(
        <c.Totalframe>
            <c.ScreenComponent>
                <c.SubScreen>
                    <c.Flex>
                        <GoBack/>
                        <PageName pageName={`마이`}/>
                    </c.Flex>
                    <UserInfoTop>
                        <UserInfo pageName={`마이`} profileImg={basicProfile} userName={`은진`}
                            userMajor={`커뮤니케이션디자인`} UserId={`20학번`}/>
                    </UserInfoTop>
                    <SelfIntro>늦게 일어나는 편이에요~</SelfIntro>
                    <ShowMyProfile>
                        <div>
                            <ShowProfileTxt>내 프로필 노출하기</ShowProfileTxt>
                            <ShowProfileSubtxt>룸메이트가 맺어지면 내 프로필이 숨겨져요</ShowProfileSubtxt>
                        </div>
                        <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                            <Circle toggle={toggle} />
                        </ToggleBtn>
                    </ShowMyProfile>
                    <SortLine/>
                    <WelcomeKit>
                        {`긱스 사용 후기 작성하고\n기숙사 웰컴 키트 받아가세요!`}
                        <img src={rightArrow}/>    
                    </WelcomeKit>
                    <MyPageMenu menuImg={enrollLifeStyle} menuName={`생활 습관 등록하기`} onClick={()=>navigate('/lifestyle')}/>
                    <MyPageMenu menuImg={saveList} menuName={`룸메이트 저장 목록`} onClick={()=>navigate('/savelist')}/>
                    <MyPageMenu menuImg={rommateApply} menuName={`룸메이트 신청 목록`}/>
                    <SortLine/>
                    <MyPageMenu menuImg={userInfo} menuName={`회원 정보 설정`} onClick={()=>navigate('/settinguserinfo')}/>
                    <MyPageMenu menuImg={notice} menuName={`알림 설정`}/>
                    <MyPageMenu menuImg={announce} menuName={`공지사항`} onClick={()=>navigate('/notice')}/>
                    <MyPageMenu menuImg={question} menuName={`자주 묻는 질문`} onClick={()=>navigate('/faq')}/>
                    <MyPageMenu menuImg={inquiry} menuName={`문의하기`}/>
                </c.SubScreen>
            </c.ScreenComponent>
            <NavigationBar type={`mypage`}/>
        </c.Totalframe>
    )
};
export default MyPage;
