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
    align-items: center
`;
const MenuImg = styled.img`
    margin-right: 16px;
    width: 28px;
    height: 28px;
`;
const MenuName = styled.div`
    display: flex;
    align-items: center;
    color: ${(props)=>props.isShow ? '#D0D0D0' : props.isSecession ? '#CB3D0B' : '#333'};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
`;
const Arrow = styled.img`
    width:20px;
    height: 20px;
`;
const RedCircle = styled.div`
    width: 8px;
    height: 8px;
    background-color: #CB3D0B;
    border-radius: 50%;
    margin-right: 1.53vw;
`;
const Arrows = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MyPageMenu = (props) => {
    return(
        <TotalMenu onClick={props.onClick}>
            <c.Flex>
                <MenuImg src={props.menuImg}></MenuImg>
                <MenuName isShow={props.isShow} isSecession={props.isSecession}>{props.menuName}</MenuName>
            </c.Flex>
            <Arrows>
                {props.enrollLifeStyle && <RedCircle/>}
                <Arrow src={MenuArrow}/>
            </Arrows>
        </TotalMenu>
    )
}
export default MyPageMenu;