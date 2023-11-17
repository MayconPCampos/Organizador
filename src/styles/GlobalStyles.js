import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/bg.avif";
import titleFontLight from "../fonts/DMSans_18pt-Light.ttf";
import titleFontMedium from "../fonts/DMSans_18pt-Medium.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "DMSans";
        src: url(${titleFontLight});
        font-weight: 300;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${titleFontMedium});
        font-weight: 500;
    }

    body{
        background: url(${backgroundImage}), rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyles;
