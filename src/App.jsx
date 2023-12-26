import React, { useState } from "react";
import Workspace from "../src/components/organisms/Workspace";
import Toolbar from "../src/components/organisms/Toolbar";
import Title from "../src/components/atoms/Title";
import Header from "../src/components/molecules/Header";
import SideBar from "../src/components/templates/SideBar";
import Board from "../src/components/molecules/Board";
import Card from "../src/components/organisms/Card";
import CardIcon from "../src/components/atoms/CardIcon";
import Button from "../src/components/atoms/Button";
import Grid from "../src/components/atoms/Grid";
import NewCard from "../src/components/organisms/NewCard";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

//svg images
import commentaryIcon from "./assets/comments-solid.svg";
import descriptionIcon from "./assets/file-lines-regular.svg";

// boards && cards
import boards from "./data/database";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Grid col={12}>
          <Header>
            <Title>
              <h1>Kapple</h1>
            </Title>
          </Header>
          <Toolbar />
          <SideBar />
          <Workspace>
            {isVisible && (
              <NewCard>
                <Button>
                  <button onClick={handleClick}>close</button>
                </Button>
              </NewCard>
            )}

            {boards.map((board) => (
              <Board key={board.key}>
                <Title>
                  <h3>{board.title}</h3>
                </Title>

                {/* // renderiza os cards dentro dos boards */}
                {board.cards.map((card) => (
                  <Card draggable key={card.key} background={card.background}>
                    <Title>
                      <h4>{card.title}</h4>
                    </Title>
                    <img src={card.image} alt="" />
                    <CardIcon>
                      <img src={descriptionIcon} alt="" />
                      <img src={commentaryIcon} alt="" />
                    </CardIcon>
                  </Card>
                ))}
                <Button>
                  <button onClick={handleClick}>+ Add new card</button>
                </Button>
              </Board>
            ))}
            <Button>
              <button onClick={handleClick}>+ Add new board</button>
            </Button>
          </Workspace>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
