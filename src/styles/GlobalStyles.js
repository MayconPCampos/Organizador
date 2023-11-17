import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/bg.avif";

const GlobalStyles = createGlobalStyle`

    body{
        background: url(${backgroundImage}), rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyles;
