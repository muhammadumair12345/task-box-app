import TaskBoxContainer from "./TaskBoxContainer";

export default {
  title: "Task Box Container",
  component: TaskBoxContainer,
};

export const Containers1X = () => (
  <TaskBoxContainer borderWidth="2px" width="50vw" />
);
export const Containers2X = () => (
  <TaskBoxContainer borderWidth="3px" width="60vw" />
);
export const Containers3X = () => (
  <TaskBoxContainer borderWidth="4px" width="70vw" />
);
