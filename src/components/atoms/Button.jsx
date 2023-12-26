import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styled = styled.div`
  button {
    background: transparent;
    border: none;
    color: #bbb;
    cursor: pointer;
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    margin: 16px 0 8px;
  }
`;

const Button = ({ children }) => {
  return <Styled>{children}</Styled>;
};

Button.propTypes = {
  text: propTypes.node,
};

export default Button;
