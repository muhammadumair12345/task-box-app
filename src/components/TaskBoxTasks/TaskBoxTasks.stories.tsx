import { Meta, Story } from "@storybook/react";
import TaskBoxTasks from "./TaskBoxTasks";

export default {
  title: "Tasks",
  component: TaskBoxTasks,
} as Meta;

const Template: Story = (args) => <TaskBoxTasks />;

export const DefaultTask = Template.bind({});
