import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-Regular.woff2') format('font-woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-SemiBold.woff2') format('font-woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-Bold.woff2') format('font-woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-ExtraBold.woff2') format('font-woff2');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
      font-family: 'Pretendard';
      src: url('../assets/fonts/Pretendard-Medium.woff2') format('font-woff2');
      font-weight: 500;
      font-style: normal;
  }

    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: #fff;
    }    

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    .react-calendar {
      border: none !important;
      margin-bottom: 1rem;
    }
`;

export default GlobalStyle;
