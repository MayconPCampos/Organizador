import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  min-width: 300px;
  grid-column: 1 / 3;
  grid-row: 2 / 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  p {
    color: #fff;
    font-size: 1.2rem;
    margin: 5px;
    cursor: default;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    color: #bbb;
    cursor: pointer;
    margin: 10px;
  }

  ul li:hover {
    color: #fff;
  }
`;

const SideBar = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SideBar;
