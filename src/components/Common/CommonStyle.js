import styled from "styled-components";

export const Totalframe = styled.div`
  // width: 390px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background: ${(props) => props.background};
`;

export const ScreenComponent = styled.div`
  padding: 0px 5.12vw;
  touch-action: none;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display:none;
  }
  height: calc(100vh - 11.84vh);
`;

export const SubScreen = styled.div`
  // height: calc(100vh - 11.84vh);
`;

export const ScreenJoin = styled.div`
  padding-top: ${(props)=>props.email ? '90px' : '13.86vh'};
  display: flex;
  flex-direction: column;
`

export const Flex = styled.div`
  display:flex;
`

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DirectionCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;