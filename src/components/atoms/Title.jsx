import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import mainTitleFont from "../../fonts/main/McLaren-Regular.ttf";

const Styles = styled.div`
  @font-face {
    font-family: "McLaren";
    src: url(${mainTitleFont});
  }

  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.text.light};

  h1 {
    font-family: "McLaren";
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.text.dark};
    padding: 8px;
  }

  h4 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.text.dark};
  }

  h5 {
    font-weight: 700;
  }

  h6 {
    font-weight: 700;
  }
`;

const Title = ({ children }) => <Styles>{children}</Styles>;

Title.propTypes = {
  children: propTypes.node,
};

export default Title;
