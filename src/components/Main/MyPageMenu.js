import React from 'react';
import styled from 'styled-components';
import * as c from '../../components/Common/CommonStyle';
import MenuArrow from '../../assets/img/MyPage/menuArrow.svg';

const TotalMenu = styled.div`
    height: 8.53vh;
    width: 100%;
    padding: 2.36vh 0px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;
const MenuImg = styled.img`
    margin-right: 16px;
`;
const MenuName = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
const MyPageMenu = (props) => {
    return(
        <TotalMenu onClick={props.onClick}>
            <c.Flex>
                <MenuImg src={props.menuImg}></MenuImg>
                <MenuName>{props.menuName}</MenuName>
            </c.Flex>
            <img src={MenuArrow}/>
        </TotalMenu>
    )
}
export default MyPageMenu;