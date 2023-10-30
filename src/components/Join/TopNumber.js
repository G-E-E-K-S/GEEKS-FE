import styled from "styled-components";

const TotalNumber = styled.div`
    display: flex;
    margin-top: 4.26vh;
`;

const Number = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #EFEFEF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    color: #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;
const TopNumber = () => {
    return(
        <TotalNumber>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
        </TotalNumber>
    )
}
export default TopNumber;