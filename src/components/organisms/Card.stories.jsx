import React from "react";
import Card from "./Card";
import Title from "../atoms/Title";
import CardIcon from "../atoms/CardIcon";
import Marker from "../atoms/Marker";

import commentaryIcon from "../../assets/comments-solid.svg";
import descriptionIcon from "../../assets/file-lines-regular.svg";
import maximizeIcon from "../../assets/window-maximize-regular.svg";
import cardImage from "../../assets/img01.jpg";

export default {
  title: "components/Organisms/Card",
  component: Card,
};

export const Simple = {
  render: () => (
    <Card>
      <Marker color="#ff4c78" />
      <Title>
        <h4>Card title</h4>
      </Title>
      <CardIcon>
        <img src={descriptionIcon} alt="" />
        <img src={commentaryIcon} alt="" />
        <img src={maximizeIcon} alt="" />
      </CardIcon>
    </Card>
  ),
};

export const WithImage = {
  render: () => (
    <Card>
      <Marker color="#ff4c78" />
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
  ),
};
