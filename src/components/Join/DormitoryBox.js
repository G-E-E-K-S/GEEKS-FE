import styled from "styled-components";
import genderCheck from "../../assets/img/Join/genderCheck.svg";

const DormitoryTotalBox = styled.div`
    height: 9vh;
    border-radius: 12px;
    border: ${(props)=>props.state ? '#F7F7F7' :  props.isSelected && '1px solid #ECAA00'};
    background: ${(props)=>props.state ? '#F7F7F7' : props.isSelected ? '#FFF4CD' :'#EFEFEF'};
    color: ${(props)=>props.state ? '#B7B7B7' : props.isSelected ? '#865800' : '#707070'};
    pointer-events: ${(props)=>props.state && 'none'};
    padding:0px 20px;
    margin-bottom: 1.89vh;
`;
const DormitoryCheck = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    display:flex;
    justify-content: space-between;
`;
const Dormitory = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
`;
const DormitoryBox = (props) => {
    return(
        <DormitoryTotalBox onClick={props.onClick} state={props.disable} isSelected={props.isSelected}>
            <DormitoryCheck>
                <Dormitory>{props.dormitory}</Dormitory>
                {props.isSelected ? <img src={genderCheck}/> : null}
            </DormitoryCheck>
        </DormitoryTotalBox>
    )
}
export default DormitoryBox;