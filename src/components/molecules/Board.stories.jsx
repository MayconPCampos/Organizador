import React from "react";
import Board from "./Board";
import Title from "../atoms/Title";

export default {
  title: "Components/Molecules/Board",
  component: Board,
};

export const Main = {
  render: () => (
    <Board>
      <Title>
        <h3>✏️ board title</h3>
      </Title>
    </Board>
  ),
};
