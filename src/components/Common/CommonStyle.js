import styled from "styled-components";

export const Totalframe = styled.div`
  // width: 390px;
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  height: -webkit-fill-available;
  height: fill-available;
  margin: 0 auto;
  overflow-y: auto;
  margin-top: env(safe-area-inset-top);
  margin-bottom: env(safe-area-inset-bottom);
  &::-webkit-scrollbar {
    display: none;
  }
  background: ${(props) => props.background};
`;

export const ScreenComponent = styled.div`
  padding: 0px 5.12vw;
  overflow-y: auto;
  user-select:none;
  touch-action: pan-y;
  &::-webkit-scrollbar{
    display:none;
  }
  height: ${(props)=>props.navigation ? 'calc(100vh - 11.84vh)' : '100vh'};
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