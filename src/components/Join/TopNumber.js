import styled from "styled-components";
import NumCheck from "../../assets/img/Join/NumCheck.svg";

const TotalNumber = styled.div`
    display: flex;
    margin-top: 4.26vh;
`;

const Number = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props)=>props.isPage ? '#FFC700' : '#EFEFEF'};
    color: ${(props)=>props.isPage? '#865800': '#949494'};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;
const NumberCheck = styled.img`
    margin-right: 8px;
`;
const TopNumber = (props) => {
    const Num = [1,2,3,4];
    return(
        <TotalNumber>
            {Num.map((num)=>(props.page > num ? <NumberCheck src={NumCheck}/> : <Number isPage={num == props.page}>{num}</Number>))}
        </TotalNumber>
    )
}
export default TopNumber;