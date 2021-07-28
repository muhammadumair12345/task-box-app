import TaskBoxApp from "./TaskBoxApp";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Task Box App",
  component: TaskBoxApp,
} as Meta;

const Template: Story<TaskBoxAppProps> = (args) => <TaskBoxApp {...args} />;

export const TaskBoxAppPurple = Template.bind({});

export const TaskBoxAppBlue = Template.bind({});
TaskBoxAppBlue.args = {
  backgroundColor: "#242575",
};

export const TaskBoxAppGreen = Template.bind({});
TaskBoxAppGreen.args = {
  backgroundColor: "#24753b",
};