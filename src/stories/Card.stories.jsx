import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import CardIcon from "../components/CardIcon";

import commentaryIcon from "../assets/comments-solid.svg";
import descriptionIcon from "../assets/file-lines-regular.svg";
import cardImage from "../assets/img01.jpg";

export default {
  title: "components/Card",
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
