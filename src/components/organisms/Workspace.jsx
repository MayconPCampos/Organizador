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

  /* barra de rolagem */

  /* width */
  ::-webkit-scrollbar {
    width: 14px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border: 4px solid rgba(0, 0, 0, 0);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: rgba(200, 200, 200, 0.8);
  }
`;

const Workspace = ({ children }) => <Container>{children}</Container>;

Workspace.propTypes = {
  children: propTypes.node,
};

export default Workspace;
