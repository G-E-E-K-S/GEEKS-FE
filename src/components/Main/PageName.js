import React from "react";
import styled from 'styled-components';

const MainText = styled.div`
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-top: 6.64vh;
    margin-left: 8px;
`;
const pageName = (props) => {
    return(
        <MainText>{props.pageName}</MainText>
    )
}
export default pageName;