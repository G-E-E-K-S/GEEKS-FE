import styled from "styled-components";
import GoBackImg from "../../assets/img/goback.svg";

const GoBackTotal = styled.img`
    margin-top: 6.64vh;
    cursor: pointer;
`;
const GoBack = () => {
    return(
        <GoBackTotal src={GoBackImg}/>
    )
}
export default GoBack;