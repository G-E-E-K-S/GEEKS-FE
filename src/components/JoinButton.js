import styled from "styled-components";

const TotalButton = styled.div`
    position: fixed;
    bottom: 12.32%;
    width: 350px;
    height: 7.10%;
    background-color: #FFC700;
    display: flex;
    justify-content: center;
    align-items: center;    
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