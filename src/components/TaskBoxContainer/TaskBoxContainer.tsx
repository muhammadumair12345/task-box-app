import React, { FC } from "react";
import { Container } from "./TaskBoxContainer.style";

const TaskBoxContainer: FC<TaskBoxContainerProps> = ({ background, width }) => {
  return <Container background={background} width={width}></Container>;
};

export default TaskBoxContainer;
