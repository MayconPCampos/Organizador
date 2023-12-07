import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  min-width: 300px;
  grid-column: 1 / 3;
  grid-row: 2 / 5;
`;

const SideBar = ({ children }) => {
  return <Container></Container>;
};

export default SideBar;
