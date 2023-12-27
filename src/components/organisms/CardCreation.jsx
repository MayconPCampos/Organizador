import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styled = styled.div`
  width: 650px;
  height: 550px;
  background-color: #fff;
  border-radius: 5px;
  margin: 2% 20%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
`;

const CardCreation = ({ children }) => {
  return <Styled>{children}</Styled>;
};

CardCreation.defaultProps = {
  children: undefined,
};

CardCreation.propTypes = {
  children: propTypes.node,
};

export default CardCreation;
