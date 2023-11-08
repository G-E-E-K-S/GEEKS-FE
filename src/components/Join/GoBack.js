import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import GoBackImg from "../../assets/img/goback.svg";

const GoBackTotal = styled.img`
    margin-top: 6.64vh;
    cursor: pointer;
`;
const GoBack = () => {
    let navigate = useNavigate();
    return(
        <GoBackTotal src={GoBackImg} onClick={() => navigate(-1)}/>
    )
}
export default GoBack;