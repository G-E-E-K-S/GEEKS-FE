import React from "react";
import styled from 'styled-components';

const TotalClubCategory = styled.div`
    width: max-content;
    height: 4.02vh;
    padding: 0.94vh 16px;
    border-radius: 24px;
    background: #EFEFEF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.89vh;
    margin-right: 8px;
    cursor: pointer;

    color: #525252;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;
const ClubCategory = (props) => {
    return(
        <TotalClubCategory>{props.clubCategory}</TotalClubCategory>
    );
};

export default ClubCategory;