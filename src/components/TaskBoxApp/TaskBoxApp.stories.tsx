import TaskBoxApp from "./TaskBoxApp";
import { Meta, Story } from "@storybook/react";

export default {
  title: "App",
  component: TaskBoxApp,
} as Meta;

const Template: Story<TaskBoxAppProps> = (args) => <TaskBoxApp {...args} />;

export const AppBackground = Template.bind({});
AppBackground.args = {
  backgroundColor: "#f58e79",
};
