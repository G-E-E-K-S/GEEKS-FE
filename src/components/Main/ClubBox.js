import React from "react";
import styled from 'styled-components';
import Typography from "../Common/Layouts/Typography";
import Row from "../Common/Layouts/Row";

const TotalClubBox = styled.div`
    padding: 1.7vh 20px;
    width: 200px;
    
    border-radius: 12px;
    background: #FCEDE8;
    margin-right: 16px;
`;
const Profiles = styled.div`
    display: flex;
`;
const ProfileImg = styled.img`
    width: 16px;
    height: 16px;
    border-radius: 50%;
`;
const NickName = styled.div`
    margin-left: 4px;
    color: #707070;

    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
`;
const ClubTitle = styled.div`
    margin-top: 1.42vh;
    margin-bottom: 1.89vh;
    overflow: hidden;
    color: #333;

    font-size: 1.12rem;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;
const Join = styled.div`
    display:flex;
`;
const SubJoin = styled.div`
    color: #D68D00;

    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
`;
const TotalJoin = styled.div`
    color: #707070;

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;
const ClubBox = (props) => {
    return(
        <TotalClubBox>
           <Row horizonAlign="center" verticalAlign="center"></Row>
            <Profiles>
                <ProfileImg src={props.profileImg}></ProfileImg>
                <NickName>{props.nickName}</NickName>
            </Profiles>
            <ClubTitle>{props.clubTitle}</ClubTitle>
            <Join>
                <SubJoin>{props.JoinPerson}</SubJoin>
                <TotalJoin>/12명 참여중</TotalJoin>
            </Join>
        </TotalClubBox>
    )
}

export default ClubBox;