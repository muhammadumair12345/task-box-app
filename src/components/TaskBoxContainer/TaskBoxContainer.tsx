import React, { FC } from "react";
import TaskBoxTasks from "../TaskBoxTasks/TaskBoxTasks";
import { Container } from "./TaskBoxContainer.style";

const TaskBoxContainer: FC<TaskBoxContainerProps> = ({
  background = "linear-gradient(#fc6e51,#f58e79)",
  width = "550",
}) => {
  return (
    <Container background={background} width={width}>
      <TaskBoxTasks />
    </Container>
  );
};

export default TaskBoxContainer;
