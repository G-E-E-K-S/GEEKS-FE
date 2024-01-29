import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Error from "../../assets/img/Common/error.svg";

const TotalBox = styled.div`
  width: 100%;
`;

const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const PopupBox = styled.div`
  width: 89.74vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${(props) => props.bottom - 8.3 +'vh'};
  top: ${(props) => props.top};
  border-radius: 12px;
  background: #fcede8;

  color: #cb3d0b;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin: auto 0;
  opacity: 0;

  transition: bottom 0.8s ease, opacity 0.5s ease;

  &.active {
    bottom: ${(props) => props.bottom+'vh'};
    opacity: 1;
    animation: vibrate 0.5s ease;
  }

  &:not(.active) {
    opacity: 0;
  }

  @keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(-1.5px); }
    50% { transform: translateX(1.5px); }
    75% { transform: translateX(-1.5px); }
    100% { transform: translateX(1.5px); }
  }
`;

const ErrorPopup = (props) => {

  useEffect(() => {
    console.log('popup');
    const timeId = setTimeout(() => {
      props.setShowPopup(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, [props.isShowPopup]);

  return (
    <PopupBox bottom={props.bottom} top={props.top} className={props.isShowPopup ? 'active' : ''}>
        <ErrorIcon src={Error} />
        {props.message}
      </PopupBox>
  );
};
export default ErrorPopup;
