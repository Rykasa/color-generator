import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --dark-color: #2A324B;
    --dark-gray: #767B91;
    --gray: #C7CCDB;
    --light-gray: #E1E5EE;
    --beige: #F7C59F;
  }

  body {
    font-family: 'roboto', sans-serif;
  }
`;