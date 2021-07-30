import React, { FC } from "react";
import { TaskItem, TaskList } from "./TaskBoxTasks.style";

const TaskBoxTasks: FC = () => {
  return (
    <TaskList>
      <TaskItem>1</TaskItem>
      <TaskItem>2</TaskItem>
      <TaskItem>3</TaskItem>
      <TaskItem>4</TaskItem>
      <TaskItem>5</TaskItem>
      <TaskItem>6</TaskItem>
      <TaskItem>7</TaskItem>
    </TaskList>
  );
};

export default TaskBoxTasks;
