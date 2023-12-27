import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 5px;
  width: 300px;
  max-height: 800px;
  box-shadow: 1px 1px #888;
  padding: 8px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
`;

const Board = ({ children }) => <Container>{children}</Container>;

Board.propTypes = {
  children: propTypes.node,
};

export default Board;
