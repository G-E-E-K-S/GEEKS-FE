import styled from "styled-components";

const TotalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    bottom: 10.18vh;
    width: 89.74vw;
    height: 60px;
    background-color: ${(props) => (props.isNextPage ? '#FFC700' : '#F7F7F7')};
    pointer-events : ${(props) => props.isNextPage ? 'auto' : 'none'};
    border-radius: 12px;

    color: ${(props)=> (props.isNextPage ? '#333' : '#B7B7B7')};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
    z-index: 10;
    &:active{
        background: #ECAA00;
    }
`;


const JoinButton = (props) => {
    return(
        <TotalButton onClick={props.handleClick} isNextPage={props.isNextPage}>{props.btnName}</TotalButton>
    )
}
export default JoinButton;