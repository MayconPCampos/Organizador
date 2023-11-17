import React from "react";
import Board from "../components/Board";
import Title from "../components/Title";

export default {
  title: "Components/Board",
  component: Board,
};

export const Main = {
  render: () => (
    <Board>
      <Title>
        <h3>✈️ travel to Paris</h3>
      </Title>
    </Board>
  ),
};
