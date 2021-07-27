import React, { FC } from "react";
import { Input } from "./TaskBoxInput.style";

const TaskBoxInput: FC<TaskBoxInputProps> = ({ width }) => {
  return <Input type="text" width={width} placeholder="Enter your name" />;
};

export default TaskBoxInput;
