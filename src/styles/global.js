import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 14px Popins, sans-serif;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }
`;
