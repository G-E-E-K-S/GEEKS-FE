import styled from "styled-components";

const DormitoryTotalBox = styled.div`
    height: 9vh;
    border-radius: 12px;
    background: #EFEFEF;
    color: #707070;
    padding-left: 20px;
    margin-bottom: 1.89vh;
`;
const Dormitory = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
`;
const DormitoryBox = (props) => {
    return(
        <DormitoryTotalBox>
            <Dormitory>{props.dormitory}</Dormitory>
        </DormitoryTotalBox>
    )
}
export default DormitoryBox;