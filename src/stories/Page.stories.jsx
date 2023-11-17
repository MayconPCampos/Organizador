import Workspace from "../components/Workspace";
import Header from "../components/Header";
import Board from "../components/Board";

export default {
  title: "Page",
};

export const Main = {
  render: () => (
    <>
      <Header></Header>
      <Workspace>
        <Board></Board>
      </Workspace>
    </>
  ),
};
