import React from "react";
import styled from "styled-components";
import mainTitleFont from "../fonts/McLaren-Regular.ttf";

const Styles = styled.div`
  @font-face {
    font-family: "McLaren";
    src: url(${mainTitleFont});
  }

  font-family: "DMSans";
  color: #fff;

  h1 {
    font-family: "McLaren";
  }

  h2 {
    font-weight: 500;
  }

  h3 {
    font-weight: 500;
  }

  h4 {
    font-weight: 500;
  }

  h5 {
    font-weight: 500;
  }

  h6 {
    font-weight: 500;
  }
`;

const Title = ({ children }) => <Styles>{children}</Styles>;

export default Title;
