import React from "react";
import styled from "styled-components";
import mainTitleFont from "../fonts/McLaren-Regular.ttf";

const Styles = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  h1 {
    @font-face {
      font-family: "McLaren";
      src: url(${mainTitleFont});
    }
    color: #fff;
    font-family: "McLaren";
    padding: 24px;
    margin: 0;
  }
`;

const Title = ({ children }) => <Styles>{children}</Styles>;

export default Title;
