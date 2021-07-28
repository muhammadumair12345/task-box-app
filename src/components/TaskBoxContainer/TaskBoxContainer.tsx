import React, { FC } from "react";
import { Container } from "./TaskBoxContainer.style";

const TaskBoxContainer: FC<TaskBoxContainerProps> = ({
  background = "linear-gradient(#a02f8a,#cc7ad4b0)",
  width = "550",
}) => {
  return <Container background={background} width={width}></Container>;
};

export default TaskBoxContainer;
