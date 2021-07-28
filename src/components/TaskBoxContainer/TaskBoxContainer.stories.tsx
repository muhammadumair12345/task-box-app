import TaskBoxContainer from "./TaskBoxContainer";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Task Box Container",
  component: TaskBoxContainer,
} as Meta;

const Template: Story<TaskBoxContainerProps> = (args) => (
  <TaskBoxContainer {...args} />
);

export const Containers1X = Template.bind({});

export const Containers2X = Template.bind({});
Containers2X.args = {
  background: "linear-gradient(#242575, #4c78d891)",
  width: "600",
};

export const Containers3X = Template.bind({});
Containers3X.args = {
  background: "linear-gradient(#24753b, #5bdd4aa7)",
  width: "650",
};
