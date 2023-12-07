import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 300px;
  height: 100vh;
`;

const SideBar = ({ children }) => {
  return <Container></Container>;
};

export default SideBar;
