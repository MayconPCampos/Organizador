import Workspace from "../organisms/Workspace";
import Toolbar from "../organisms/Toolbar";
import Title from "../atoms/Title";
import Header from "../molecules/Header";
import SideBar from "../templates/SideBar";
import Board from "../molecules/Board";
import Card from "../organisms/Card";
import CardIcon from "../atoms/CardIcon";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Marker from "../atoms/Marker";

//svg images
import commentaryIcon from "../../assets/comments-solid.svg";
import descriptionIcon from "../../assets/file-lines-regular.svg";
import maximizeIcon from "../../assets/window-maximize-regular.svg";
import cardImage from "../../assets/img01.jpg";

export default {
  title: "Layout/Pages/Page",
};

export const Main = {
  render: () => (
    <>
      <Grid col={12}>
        <Header>
          <Title>
            <h1>Kapple</h1>
          </Title>
        </Header>
        <Toolbar />
        <SideBar>
          <p>Dashboards</p>
          <ul>
            <li>Organization</li>
            <li>Project</li>
            <li>Study</li>
          </ul>
        </SideBar>
        <Workspace>
          <Board>
            <Title>
              <h3>✏️ Board title</h3>
            </Title>
            <Card background={(props) => props.theme.colors.cards.white}>
              <Marker color={(props) => props.theme.colors.cards.blue} />
              <Title>
                <h4>Card title</h4>
              </Title>
              <CardIcon>
                <img src={descriptionIcon} alt="" />
                <img src={commentaryIcon} alt="" />
                <img src={maximizeIcon} alt="" />
              </CardIcon>
            </Card>
            <Card background={(props) => props.theme.colors.cards.white}>
              <Marker color={(props) => props.theme.colors.cards.pink} />
              <img src={cardImage} alt="" />
              <Title>
                <h4>Card title</h4>
              </Title>
              <CardIcon>
                <img src={descriptionIcon} alt="" />
                <img src={commentaryIcon} alt="" />
                <img src={maximizeIcon} alt="" />
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
    </>
  ),
};
