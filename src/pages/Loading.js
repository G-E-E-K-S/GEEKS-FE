import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import LoadingImg from "../assets/lottie/loading.json";

const Total = styled.div`
  background: #fff;
  opacity: 0.2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LottieImg = styled.div`
  width: 80px;
  height: 80px;
`;
const Loading = () => {
  return (
    <Total>
      <LottieImg>
        <Lottie animationData={LoadingImg} />
      </LottieImg>
    </Total>
  );
};
export default Loading;
