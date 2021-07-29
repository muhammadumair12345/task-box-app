import { Meta, Story } from "@storybook/react";
import TaskBoxHeader from "./TaskBoxHeader";

export default {
  title: "Avatar",
  component: TaskBoxHeader,
} as Meta;

const Template: Story = (args) => <TaskBoxHeader />;

export const TaskAvatar = Template.bind({});
