import React from "react";
import { PersilMap } from "./Persil";

export default {
  title: "persilMap",
  component: PersilMap,
};

const Template = (args) => <PersilMap {...args} />;

export const Map = Template.bind({});