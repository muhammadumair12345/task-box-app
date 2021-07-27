import React, { FC } from "react";
import { PrimaryBtn } from "../TaskBoxButton/TaskBoxButton.stories";
import { Input1X } from "../TaskBoxInput/TaskBoxInput.stories";
import { Container } from "./TaskBoxContainer.style";

const TaskBoxContainer: FC<TaskBoxContainerProps> = ({
  borderWidth,
  width,
}) => {
  return (
    <Container borderWidth={borderWidth} width={width}>
      <Input1X />
      <PrimaryBtn />
    </Container>
  );
};

export default TaskBoxContainer;
