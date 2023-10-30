import styled from "styled-components";

const TotalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    bottom: 10.32vh;
    width: 350px;
    height: 8.10vh;
    background-color: #FFC700;
    border-radius: 12px;

    /*font*/
    color: #333;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`;
const JoinButton = (props) => {
    return(
        <TotalButton onClick={props.nextPage}>{props.btnName}</TotalButton>
    )
}
export default JoinButton;