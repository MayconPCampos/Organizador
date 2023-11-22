import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import CardIcon from "../components/CardIcon";

import commentaryIcon from "../assets/comments-solid.svg";
import descriptionIcon from "../assets/file-lines-regular.svg";

export default {
  title: "components/Card",
  component: Card,
};

export const Main = {
  render: () => (
    <Card background="#fff">
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
