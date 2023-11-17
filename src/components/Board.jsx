import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Board = ({ children }) => <Container>{children}</Container>;

export default Board;
