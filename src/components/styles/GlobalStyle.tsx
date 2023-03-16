import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    color: white;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .border-radius {
    border-radius: 5px;
  }
`;
