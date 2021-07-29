import React, { FC } from "react";
import TaskBoxContainer from "../TaskBoxContainer/TaskBoxContainer";
import TaskBoxHeader from "../TaskBoxHeader/TaskBoxHeader";
import { App, GlobalStyle } from "./TaskBoxApp.style";

const TaskBoxApp: FC<TaskBoxAppProps> = ({ backgroundColor = "#f58e79" }) => {
  return (
    <>
      <GlobalStyle />
      <App backgroundColor={backgroundColor}>
        <TaskBoxHeader />
        <TaskBoxContainer />
      </App>
    </>
  );
};

export default TaskBoxApp;
