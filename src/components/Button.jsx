import React from "react";
import styled from "styled-components";

const Styles = styled.button`
  background: transparent;
  border: none;
  color: #bbb;
  cursor: pointer;
  text-align: start;
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0 8px;
`;

const Button = ({ text }) => <Styles>{text}</Styles>;

export default Button;
