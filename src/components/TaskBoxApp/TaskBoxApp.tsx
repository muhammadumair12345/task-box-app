import React, { FC } from "react";
import TaskBoxContainer from "../TaskBoxContainer/TaskBoxContainer";
import { App, GlobalStyle } from "./TaskBoxApp.style";

const TaskBoxApp: FC<TaskBoxAppProps> = ({ backgroundColor = "#a02f8a" }) => {
  return (
    <>
      <GlobalStyle />
      <App backgroundColor={backgroundColor}>
        <TaskBoxContainer />
      </App>
    </>
  );
};

export default TaskBoxApp;
