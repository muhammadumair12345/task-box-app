import TaskBoxContainer from "./TaskBoxContainer";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Container",
  component: TaskBoxContainer,
} as Meta;

const Template: Story<TaskBoxContainerProps> = (args) => (
  <TaskBoxContainer {...args} />
);

export const CardContainer = Template.bind({});
CardContainer.args = {
  background: "linear-gradient(#fc6e51,#f58e79)",
  width: "550",
};
