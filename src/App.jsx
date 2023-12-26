import React from "react";
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
import cardImage from "./assets/img01.jpg";

const App = () => {
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
            <NewCard></NewCard>
            <Board>
              <Title>
                <h3>✈️ Travel to Paris</h3>
              </Title>
              <Card background={(props) => props.theme.colors.cards.blue}>
                <Title>
                  <h4>Visit Eifel Tower</h4>
                </Title>
                <CardIcon>
                  <img src={descriptionIcon} alt="" />
                  <img src={commentaryIcon} alt="" />
                </CardIcon>
              </Card>
              <Card background="#ff4c78">
                <img src={cardImage} alt="" />
                <Title>
                  <h4>Card title</h4>
                </Title>
                <CardIcon>
                  <img src={descriptionIcon} alt="" />
                  <img src={commentaryIcon} alt="" />
                </CardIcon>
              </Card>
              <Button>
                <button>+ Add new card</button>
              </Button>
            </Board>
            <Button>
              <button>+ Add new board</button>
            </Button>
          </Workspace>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
