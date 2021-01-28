import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: #C6FFDD;
        background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        height: 100vh;
        width: 100vw;
    }

`;


export default GlobalStyle;