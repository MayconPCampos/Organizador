import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 50px;
`;

const Toolbar = ({ children }) => {
  return <Container></Container>;
};

export default Toolbar;
