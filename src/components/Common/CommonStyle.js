import styled from "styled-components";

export const Totalframe = styled.div`
  width: 390px;
  height: 100vh;
  border: 1px solid #eceeef;
  margin: 0 auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative; 
`;

export const ScreenComponent = styled.div`
  padding: 0px 20px;
`;

export const SubScreen = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 15.40vh);
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