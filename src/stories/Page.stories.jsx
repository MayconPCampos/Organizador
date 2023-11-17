import Workspace from "../components/Workspace";
import Title from "../components/Title";
import Board from "../components/Board";

export default {
  title: "Page",
};

export const Main = {
  render: () => (
    <>
      <Title></Title>
      <Workspace>
        <Board></Board>
      </Workspace>
    </>
  ),
};
