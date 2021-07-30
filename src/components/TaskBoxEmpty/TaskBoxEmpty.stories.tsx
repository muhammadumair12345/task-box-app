import { Meta, Story } from "@storybook/react";
import TaskBoxEmpty from "./TaskBoxEmpty";

export default {
  title: "Empty",
  component: TaskBoxEmpty,
} as Meta;

const Template: Story = (args) => <TaskBoxEmpty />;

export const TaskEmpty = Template.bind({});
