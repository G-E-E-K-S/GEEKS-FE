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
`;
const GoBack = (props) => {
    let navigate = useNavigate();
    return(
        <GoBackTotal src={GoBackImg} onClick={() => navigate(-1)}/>
    )
}
export default GoBack;