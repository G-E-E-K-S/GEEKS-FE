import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ColHeaderMenu from "../../components/Common/ColHeaderMenu";
import Round from "../../assets/gif/round.gif";
import MakeGroup from "../../assets/gif/makeGroup.png";
import MakeGroupPost from "../../assets/gif/makeGroupPost.svg";

const OpenTxt = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  margin-top: 20px;
  white-space: pre-wrap;
`;
const FullScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gif = styled.img`
  width: 280px;
  height: 280px;
`;
const WithDormitory = styled(OpenTxt)`
  margin-top: 32px;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28x;
  margin-bottom: 24px;
`;
const NotAlone = styled(OpenTxt)`
  font-size: 0.875rem;
  line-height: 20px;
  margin-top: 12px;
  margin-bottom: 24px;
  color: #707070;
`;

const OpenGroup = () => {
  const navigate = useNavigate();
  return (
    <>
      <c.Totalframe
        background={`linear-gradient(180deg, rgba(239, 250, 231, 0.8) 0%, rgba(250, 250, 250, 0.1) 100%)`}
      >
        <c.ScreenComponent>
          <ColHeaderMenu>
            <OpenTxt>{`긱스에서 모임 기능이\n곧 오픈돼요`}</OpenTxt>
          </ColHeaderMenu>
          <FullScreen>
            <Gif src={Round} />
          </FullScreen>
          <WithDormitory>{`내가 원하는 모임을 만들어\n기숙사생들과 함께 할 수 있어요`}</WithDormitory>
          <img src={MakeGroup}/>
        </c.ScreenComponent>
      </c.Totalframe>
      <c.Totalframe background={`#F7F7F7`}>
        <c.ScreenComponent>
          <WithDormitory>{`모임이 필요할 때마다\n같은 기숙사에서 빠르게 구해보세요`}</WithDormitory>
          <NotAlone>{`이제 더이상 혼자 하지 않아도 돼요`}</NotAlone>
          <FullScreen>
            <img src={MakeGroupPost}/>
          </FullScreen>
        </c.ScreenComponent>
      </c.Totalframe>
    </>
  );
};
export default OpenGroup;
