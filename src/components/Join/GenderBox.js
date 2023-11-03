import styled from "styled-components";
import genderCheck from "../../assets/img/genderCheck.svg";

const GenderTotalBox = styled.div`
    width: 171px;
    height: 27.01vh;
    border-radius: 16px;
    border-radius: 16px;
    margin-top: 6.16vh;
    background-color: ${(props)=>props.isSelected ? '#FFF4CD' : '#EFEFEF'};
    padding: 2.36vh 20px 0px 20px;
    cursor: pointer;
    color: ${(props)=>props.isSelected ? '#865800' : '#707070'}
`;

const GenderCheck = styled.div`
    display:flex;
    justify-content: space-between;
`;
const Gender = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
`;
const GenderBox = (props) => {
    return(
        <GenderTotalBox onClick={props.onClick} isSelected={props.isSelected}>
            <GenderCheck>
                <Gender>{props.gender}</Gender>
                {props.isSelected ? <img src={genderCheck}/> : null}
            </GenderCheck>
        </GenderTotalBox>
    )
}
export default GenderBox;