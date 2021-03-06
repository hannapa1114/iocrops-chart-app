import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Noto+Sans+KR:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

`;

export const detailTheme = {};
