import React from "react";
import { BuildingLayer } from "./Building";

export default {
  title: "buildingScene",
  component: BuildingLayer,
};

const Template = (args) => <BuildingLayer {...args} />;

export const Scene = Template.bind({});