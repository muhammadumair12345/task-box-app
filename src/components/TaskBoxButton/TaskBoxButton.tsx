import React, { FC } from "react";
import { Button } from "./TaskBoxButton.style";

const TaskBoxButton: FC<TaskBoxButtonProps> = ({ varient }) => {
  return <Button varient={varient}>{varient.toLocaleUpperCase()}</Button>;
};

export default TaskBoxButton;
