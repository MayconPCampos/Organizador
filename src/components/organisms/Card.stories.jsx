import React from "react";
import Card from "./Card";
import Title from "../atoms/Title";
import CardIcon from "../atoms/CardIcon";

import commentaryIcon from "../../assets/comments-solid.svg";
import descriptionIcon from "../../assets/file-lines-regular.svg";
import cardImage from "../../assets/img01.jpg";

export default {
  title: "components/Organisms/Card",
  component: Card,
};

export const Simple = {
  render: () => (
    <Card background={(props) => props.theme.colors.cards.green}>
      <Title>
        <h4>Card title</h4>
      </Title>
      <CardIcon>
        <img src={descriptionIcon} alt="" />
        <img src={commentaryIcon} alt="" />
      </CardIcon>
    </Card>
  ),
};

export const WithImage = {
  render: () => (
    <Card background={(props) => props.theme.colors.cards.pink}>
      <img src={cardImage} alt="" />
      <Title>
        <h4>Card title</h4>
      </Title>
      <CardIcon>
        <img src={descriptionIcon} alt="" />
        <img src={commentaryIcon} alt="" />
      </CardIcon>
    </Card>
  ),
};
