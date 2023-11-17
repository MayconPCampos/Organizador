import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Workspace = ({ children }) => <Container>{children}</Container>;

export default Workspace;
