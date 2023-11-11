import React from "react";
import styled from 'styled-components';
import downArrow from '../../assets/img/Home/downArrow.svg';
import search from '../../assets/img/Home/search.svg';
import noti from '../../assets/img/Home/noti.svg';
import edit from '../../assets/img/Home/edit.svg';

const TotalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 5.21vh;
`;
const DormitoryKind = styled.div`
    display: flex;
`;
const DormitoryText = styled.div`
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-right: 6px;
    white-space: no-wrap;
`;
const Icon = styled.div`
    display: flex;
    gap: 16px;
    cursor: pointer;
`;
const Header = () => {
    return(
        <TotalHeader>
            <DormitoryKind>
                <DormitoryText>신관</DormitoryText>
                <img src={downArrow}/>
            </DormitoryKind>
            <Icon>
                <img src={search}/>
                <img src={noti}/>
                <img src={edit}/>
            </Icon>
        </TotalHeader>
    );
};

export default Header;
