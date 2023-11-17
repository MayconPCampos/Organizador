import Workspace from "../components/Workspace";
import Title from "../components/Title";
import Header from "../components/Header";
import Board from "../components/Board";
import Card from "../components/Card";
import Button from "../components/Button";

export default {
  title: "Layout/Page",
};

export const Main = {
  render: () => (
    <>
      <Header>
        <Title>
          <h1>Kapple</h1>
        </Title>
      </Header>
      <Workspace>
        <Board>
          <Title>
            <h3>✈️ Travel to Paris</h3>
          </Title>
          <Card background="#44bbff">
            <Title>
              <h4>Visit Eifel Tower</h4>
            </Title>
          </Card>
          <Button text="+ Add new card" />
        </Board>
        <Button text="+ Add new Board"></Button>
      </Workspace>
    </>
  ),
};
