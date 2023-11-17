import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/bg.avif";
import titleFontLight from "../fonts/DMSans_18pt-Light.ttf";
import titleFontBold from "../fonts/DMSans_18pt-Bold.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "DMSans";
        src: url(${titleFontLight});
        font-weight: 300;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${titleFontBold});
        font-weight: 700;
    }

    html{
        font-family: "DMSans";
        font-weight: 300;
    }

    body{
        background: url(${backgroundImage}), rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
`;

export default GlobalStyles;
