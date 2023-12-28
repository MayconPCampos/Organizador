import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styled = styled.div`
  button {
    background: transparent;
    border: none;
    color: #1f3043;
    cursor: pointer;
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    margin: 16px 0 8px;
  }
`;

const StyledSubmit = styled.div`
  button {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: #777;
    cursor: pointer;
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    margin: 16px 0 8px;
    border-radius: 5px;
    padding: 10px 25px;
    margin-top: 50px;
  }
`;

const Button = ({ children, submit }) => {
  if (submit) {
    return <StyledSubmit>{children}</StyledSubmit>;
  } else {
    return <Styled>{children}</Styled>;
  }
};

Button.propTypes = {
  text: propTypes.node,
};

export default Button;
