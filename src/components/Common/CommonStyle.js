import styled from "styled-components";

export const Totalframe = styled.div`
  // width: 390px;
  width: 100vw;
  height: 100vh;
  border: 1px solid #eceeef;
  margin: 0 auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background: ${(props) => props.main ? '#FAFAFA' : '#fff'}
`;

export const ScreenComponent = styled.div`
  padding: 0px 5.12vw;
`;

export const SubScreen = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 12.84vh);
  &::-webkit-scrollbar{
    display:none;
  }
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