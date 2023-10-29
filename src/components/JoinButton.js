import styled from "styled-components";

const TotalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    bottom: 12.32%;
    width: 350px;
    height: 8.10%;
    background-color: #FFC700;
    border-radius: 12px;
    color: #333;
    font-size: 18px;
    font-weight: 600;
`;
const JoinButton = (props) => {
    return(
        <TotalButton>{props.btnName}</TotalButton>
    )
}
export default JoinButton;