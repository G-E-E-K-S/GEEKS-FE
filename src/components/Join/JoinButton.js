import styled from "styled-components";

const TotalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    bottom: 10.18vh;
    width: 89.74vw;
    height: 8.10vh;
    background-color: ${(props) => (props.isNextPage ? '#FFC700' : '#F7F7F7')};
    border-radius: 12px;

    /*font*/
    color: #333;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`;
const JoinButton = (props) => {
    return(
        <TotalButton onClick={props.handleClick} isNextPage={props.isNextPage}>{props.btnName}</TotalButton>
    )
}
export default JoinButton;