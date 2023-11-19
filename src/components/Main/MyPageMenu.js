import React from 'react';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import MenuArrow from '../../assets/img/MyPage/menuArrow.svg';

const TotalMenu = styled.div`
    height: 72px;
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
`;
const MenuImg = styled.img`
    margin-right: 16px;
    width: 28px;
    height: 28px;
`;
const MenuName = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
const Arrow = styled.img`
    width:20px;
    height: 20px;
`;
const MyPageMenu = (props) => {
    return(
        <TotalMenu onClick={props.onClick}>
            <c.Flex>
                <MenuImg src={props.menuImg}></MenuImg>
                <MenuName>{props.menuName}</MenuName>
            </c.Flex>
            <Arrow src={MenuArrow}/>
        </TotalMenu>
    )
}
export default MyPageMenu;