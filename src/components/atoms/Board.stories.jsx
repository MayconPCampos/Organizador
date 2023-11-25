import React from "react";
import Board from "./Board";
import Title from "./Title";

export default {
  title: "Components/Atoms/Board",
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
