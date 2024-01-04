import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  padding: 16px;
  display: flex;
  height: 825px;
  min-width: 1200px;
  gap: 16px;
  align-items: flex-start;
  grid-column: 3 / -1;
  grid-row: 4 / 5;
  overflow: scroll;
`;

const Workspace = ({ children }) => <Container>{children}</Container>;

Workspace.propTypes = {
  children: propTypes.node,
};

export default Workspace;
