import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ShowMaintext = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    white-space: pre-wrap;
    margin-top: 3.79vh;
`;
const MainText = (props) => {
    return(
        <ShowMaintext>{props.maintitle}</ShowMaintext>
    )
}
export default MainText