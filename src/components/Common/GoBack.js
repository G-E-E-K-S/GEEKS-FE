import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import GoBackImg from "../../assets/img/Join/goback.svg";

const GoBackTotal = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
    cursor: pointer;
    margin-top: ${(props)=>props.marginTop};
`;
const GoBack = (props) => {
    let navigate = useNavigate();
    return(
        <GoBackTotal marginTop={props.marginTop}src={GoBackImg} onClick={() => navigate(-1)}/>
    )
}
export default GoBack;