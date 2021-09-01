import React from "react";
import { action } from "@storybook/addon-actions";

import HumidexGraph from "../components/HumidexGraph";

export default {
  title: "Humidex Graph",
  component: HumidexGraph,
  argTypes: {
    backgroundColor: {
      control: "color"
    },
  }
};

const Template = (args) => <HumidexGraph {...args} />;

export const Exists = Template.bind({});
Exists.args = {};

export const Clickable = Template.bind({});
Clickable.args = {};