import React, { FC } from "react";
import { Container } from "./TaskBoxContainer.style";

const TaskBoxContainer: FC<TaskBoxContainerProps> = ({
  background = "linear-gradient(#fc6e51,#f58e79)",
  width = "550",
}) => {
  return <Container background={background} width={width}></Container>;
};

export default TaskBoxContainer;
