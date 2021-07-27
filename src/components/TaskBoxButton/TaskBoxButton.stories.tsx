import TaskBoxButton from "./TaskBoxButton";

export default {
  title: "Task Box Button",
  component: TaskBoxButton,
};

export const PrimaryBtn = () => <TaskBoxButton varient="primary" />;
export const SecondaryBtn = () => <TaskBoxButton varient="secondary" />;
export const DangerBtn = () => <TaskBoxButton varient="danger" />;
