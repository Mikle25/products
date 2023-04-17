import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    height: 100vh;
    padding-bottom: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.8);
  }

  .border-radius {
    border-radius: 5px;
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal_box {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: rgb(82, 82, 82);
  }
`;
