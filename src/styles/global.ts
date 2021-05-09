import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F5EBE8;
    --black: #000000;
    --white: #ffffff;
    --red: #ED4639;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('/fonts/Graphik-Regular.eot');
    src: local('Graphik Regular'), local('Graphik-Regular'),
    url('/fonts/Graphik-Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Graphik-Regular.woff2') format('woff2'),
    url('/fonts/Graphik-Regular.woff') format('woff'),
    url('/fonts/Graphik-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 7200px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: 'Graphik', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--black);
  }
`
export default GlobalStyles
