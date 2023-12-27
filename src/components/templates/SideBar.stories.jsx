import SideBar from "./SideBar";
import React from "react";

export default {
  title: "Components/Templates/SideBar",
  component: SideBar,
};

export const Usage = {
  render: () => (
    <SideBar>
      <p>Dashboards</p>
      <ul>
        <li>Organization</li>
        <li>Project</li>
        <li>Study</li>
      </ul>
    </SideBar>
  ),
};
