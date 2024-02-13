import React from "react";
import styled from 'styled-components';

const MainText = styled.div`
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-left: 8px;
    margin-top: 8px;
    white-space: nowrap;
    display: ${(props)=>props.handleShow ? 'none' : 'block'};
`;
const pageName = (props) => {
    return(
        <MainText handleShow={props.handleShow}>{props.pageName}</MainText>
    )
}
export default pageName;