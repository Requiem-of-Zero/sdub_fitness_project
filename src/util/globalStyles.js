import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial;
    }
    h1, h2, h3, ul, li {
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle;