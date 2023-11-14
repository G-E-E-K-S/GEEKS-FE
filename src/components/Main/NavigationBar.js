import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Home from '../../assets/img//Navigation/home.svg';
import FillHome from '../../assets/img//Navigation/fillHome.svg';
import Roommate from '../../assets/img//Navigation/roommate.svg';
import FillRoommate from '../../assets/img//Navigation/fillRoommate.svg';
import Chat from '../../assets/img//Navigation/chat.svg';
import FillChat from '../../assets/img//Navigation/fillChat.svg';
import Community from '../../assets/img//Navigation/community.svg';
import FillCommunity from '../../assets/img//Navigation/fillCommumnity.svg';
import Mypage from '../../assets/img/Navigation/myPage.svg';
import FillMyPage from '../../assets/img//Navigation/fillMyPage.svg';

const TotalNavigationBar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 390px;
  padding: 1.42vh 25px 4.73vh 25px;
  height: 11.84vh;
  border-radius: 12px 12px 0px 0px;
  border-top: 1px solid #EFEFEF;
  background: #FFF;
`;

const Icons = styled.div`
  color: ${(props) => (props.isSelected ? '#333' : '#B7B7B7')};
  width: 48px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const IconText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const NavigationBar = () => {
  const [isHome, setIsHome] = useState(true);
  const [isRoommate, setIsRoommate] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMy, setIsMy] = useState(false);

  let navigate = useNavigate();

  const handlePage = (pageName) => {
    setIsHome(false);
    setIsRoommate(false);
    setIsChat(false);
    setIsCommunity(false);
    setIsMy(false);

    switch (pageName) {
      case 'isHome':
        setIsHome(true);
        navigate('/home');
        break;
      case 'isRoommate':
        setIsRoommate(true);
        break;
      case 'isChat':
        setIsChat(true);
        break;
      case 'isCommunity':
        setIsCommunity(true);
        break;
      case 'isMy':
        setIsMy(true);
        navigate('/mypage');
        break;
      default:
        break;
    }
  };

  return (
    <TotalNavigationBar>
      <Icons isSelected={isHome} onClick={() => handlePage('isHome')}>
        {isHome ? <Icon src={FillHome} /> : <Icon src={Home} />}
        <IconText>홈</IconText>
      </Icons>
      <Icons isSelected={isRoommate} onClick={() => handlePage('isRoommate')}>
        {isRoommate ? <Icon src={FillRoommate} /> : <Icon src={Roommate} />}
        <IconText>룸메찾기</IconText>
      </Icons>
      <Icons isSelected={isChat} onClick={() => handlePage('isChat')}>
        {isChat ? <Icon src={FillChat} /> : <Icon src={Chat} />}
        <IconText>대화</IconText>
      </Icons>
      <Icons isSelected={isCommunity} onClick={() => handlePage('isCommunity')}>
        {isCommunity ? <Icon src={FillCommunity} /> : <Icon src={Community} />}
        <IconText>커뮤니티</IconText>
      </Icons>
      <Icons isSelected={isMy} onClick={() => handlePage('isMy')}>
        {isMy ? <Icon src={FillMyPage} /> : <Icon src={Mypage} />}
        <IconText>마이</IconText>
      </Icons>
    </TotalNavigationBar>
  );
};

export default NavigationBar;
