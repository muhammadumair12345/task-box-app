import TaskBoxApp from "./TaskBoxApp";

export default {
  title: "Task Box App",
  component: TaskBoxApp,
};

export const LightApp = () => <TaskBoxApp />;
export const DarkApp = () => <TaskBoxApp backgroundColor="dark" />;
export const GrayApp = () => <TaskBoxApp backgroundColor="gray" />;
