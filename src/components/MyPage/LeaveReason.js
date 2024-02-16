import React, { useState, useRef } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import CircleCheck from "../../assets/img/MyPage/circleCheck.svg";
import FIllCircleCheck from "../../assets/img/MyPage/fillCircleCheck.svg";

const Total = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Check = styled.img`
  width: 20px;
  height: 20px;
`;
const Reason = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  color: #525252;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;
const ReasonBox = styled.textarea`
  outline: none;
  border: none;
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 14px 16px 14px 16px;
  margin-top: 8px;
  width: 100%;
  height: max-height;

  &::placeholder {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 18px;
    color: #949494;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const LeaveReason = (props) => {
  const [isClick, setIsClick] = useState(false);
  const detailReason = useRef(null);

  const handleClick = () => {
    if (props.onSelect) {
      props.onSelect({
        reason: props.leaveReason,
        detailReason: detailReason.current?.value,
      });
    }
  }
  return (
    <>
      <Total onClick={()=>setIsClick(!isClick)}>
        <Check src={isClick ? FIllCircleCheck : CircleCheck} />
        <Reason>{props.leaveReason}</Reason>
      </Total>
      {isClick && (
        <ReasonBox ref={detailReason} onBlur={()=>handleClick()}placeholder="(선택) 자세한 이유를 듣고 싶어요. 더 멋지게 보완할게요."/>
      )}
    </>
  );
};
export default LeaveReason;
