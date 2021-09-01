import React from "react";
import { action } from "@storybook/addon-actions";

import TempGraph from "../components/TempGraph";

export default {
  title: "Temp Graph",
  component: TempGraph,
  argTypes: {
    backgroundColor: {
      control: "color"
    },
  }
};

const Template = (args) => <TempGraph {...args} />;

export const Exists = Template.bind({});
Exists.args = {};

export const Clickable = Template.bind({});
Clickable.args = {};