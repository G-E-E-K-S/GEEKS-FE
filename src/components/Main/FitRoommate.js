import React from "react";
import styled from 'styled-components';

const TotalFitRoommate = styled.div`
    width: 100%;
    height: 9.95vh;
    background: #fff;
    padding: 0px 20px;
    display: flex;
`;
const UserProfile = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 14px;
`;
const NickNames = styled.div`
    display: flex;
`;
const NickName = styled.div`
    margin-right: 8px;
    color: #333;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
const IsSmoke = styled.div`
    width: 37px;
    height: 2.13vh;
    border-radius: 6px;
    background: #EFEFEF;

    color: #707070;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`;
const Major = styled.div`
    color: #707070;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`;
const FitRoommate = (props) => {
    return(
        <TotalFitRoommate>
            <UserProfile img={props.userprofile}/>
            <>
                <NickNames>
                    <NickName>{props.nickName}</NickName>
                    <IsSmoke>{props.isSmoke}</IsSmoke>
                </NickNames>
                <Major>{props.major} · {props.id}</Major>
            </>
        </TotalFitRoommate>
    )
}

export default FitRoommate;