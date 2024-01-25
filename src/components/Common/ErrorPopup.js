import React, { useEffect } from "react";
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
  width: calc(100% - 12.25vw);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  border-radius: 12px;
  background: #fcede8;

  color: #cb3d0b;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin: auto 0;
`;

const ErrorPopup = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setShowPopup(false);
    }, 2000);
  }, [props.setShowPopup]);
  return (
    <TotalBox>
      <PopupBox bottom={props.bottom} top={props.top}>
        <ErrorIcon src={Error} />
        {props.message}
      </PopupBox>
    </TotalBox>
  );
};
export default ErrorPopup;
