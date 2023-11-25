import React from "react";
import Header from "./Header";
import Title from "../atoms/Title";

export default {
  title: "Components/Molecules/Header",
  component: Header,
};

export const Main = {
  render: () => (
    <>
      <Header>
        <Title>
          <h1>Kapple</h1>
        </Title>
      </Header>
    </>
  ),
};
