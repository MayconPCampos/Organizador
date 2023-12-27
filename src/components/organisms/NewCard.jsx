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

const NewCard = ({ children }) => {
  return <Styled>{children}</Styled>;
};

NewCard.defaultProps = {
  children: undefined,
};

NewCard.propTypes = {
  children: propTypes.node,
};

export default NewCard;
