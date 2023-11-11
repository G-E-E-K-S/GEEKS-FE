import React from "react";
import styled from 'styled-components';

const SubTitleText = styled.div`
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    white-space: pre-wrap;
`;
const SubTitle = (props) => {
    return(
        <SubTitleText>{props.subtitle}</SubTitleText>
    )
}
export default SubTitle;