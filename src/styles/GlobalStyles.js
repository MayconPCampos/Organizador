import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/bg.avif";
import fontLight from "../fonts/main/DMSans_18pt-Light.ttf";
import fontMedium from "../fonts/main/DMSans_18pt-Medium.ttf";
import fontBold from "../fonts/main/DMSans_18pt-Bold.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "DMSans";
        src: url(${fontLight});
        font-weight: 300;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${fontMedium});
        font-weight: 500;
    }

    @font-face {
        font-family: "DMSans";
        src: url(${fontBold});
        font-weight: 700;
    }

    *{
        box-sizing: border-box;
    }

    html{
        font-family: ${(props) => props.theme.font.main};
        font-weight: 300;
    }

    body{
        background: url(${backgroundImage}), rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }

    /* barra de rolagem */

    /* width */
    ::-webkit-scrollbar {
        width: 14px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        border: 4px solid rgba(0, 0, 0, 0);
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: rgba(200, 200, 200, .8);
    }

`;

export default GlobalStyles;
