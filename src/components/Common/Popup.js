import React, {useEffect} from "react";
import styled from "styled-components";

const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
`;
const PopupBox = styled.div`
  width: 89.74vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: ${(props) => props.bottom - 8.3 + 'vh'};
  top: ${(props)=>props.top && '0%'};
  border-radius: 12px;
  background: #525252;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin: auto 0;
  opacity: 0;

  ${(props)=> props.top != null && 'transition: top 0.8s ease, opacity 0.5s ease;'};
  ${(props)=> props.bottom != null && 'transition: bottom 0.8s ease, opacity 0.5s ease;'};

  &.active {
    bottom: ${(props) => props.bottom+'vh'};
    top: ${(props)=>props.top+'vh'};
    opacity: 1;
  }

  &:not(.active) {
    opacity: 0;
  }
`;
const Popup = (props) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      props.setShowPopup(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, [props.isShowPopup]);

  return (
    <TotalBox>
      <PopupBox bottom={props.bottom} top={props.top} className={props.isShowPopup ? 'active' : ''}>{props.message}</PopupBox>
    </TotalBox>
  );
};
export default Popup;
