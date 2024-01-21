import styled from "styled-components";
import genderCheck from "../../assets/img/Join/genderCheck.svg";

const GenderTotalBox = styled.div`
    width: 43.84vw;
    height: 220px;
    border-radius: 16px;
    margin-top: 6.16vh;
    background-color: ${(props)=>props.isSelected ? '#FFF4CD' : '#EFEFEF'};
    border: ${(props)=>props.isSelected && '1px solid #ECAA00'};
    padding: 2.36vh 20px 0px 20px;
    cursor: pointer;
    color: ${(props)=>props.isSelected ? '#865800' : '#707070'}
`;

const GenderCheck = styled.div`
    display:flex;
    justify-content: space-between;
`;
const GenderImg = styled.img`
  height: 148px;
  width: 148px;
`;
const GenderTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <GenderTotal>
                <GenderImg src={props.isSelected ? props.SelectGender : props.GenderImg}/>
            </GenderTotal>
        </GenderTotalBox>
    )
}
export default GenderBox;