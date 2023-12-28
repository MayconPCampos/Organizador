import React from "react";
import Button from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

export const Primary = {
  render: () => (
    <Button>
      <button>Primary</button>
    </Button>
  ),
};

export const Submit = {
  render: () => (
    <Button submit>
      <button>Submit</button>
    </Button>
  ),
};
