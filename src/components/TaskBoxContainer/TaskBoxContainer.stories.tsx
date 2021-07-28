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
Containers1X.args = {
  background: "purple",
  width: "50vw",
};

export const Containers2X = Template.bind({});
Containers2X.args = {
  background: "blue",
  width: "60vw",
};

export const Containers3X = Template.bind({});
Containers3X.args = {
  background: "green",
  width: "70vw",
};
