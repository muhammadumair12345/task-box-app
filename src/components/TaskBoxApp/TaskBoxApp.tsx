import React, { FC } from "react";
import { Containers1X } from "../TaskBoxContainer/TaskBoxContainer.stories";
import { App, GlobalStyle } from "./TaskBoxApp.style";

const TaskBoxApp: FC<TaskBoxAppProps> = ({ backgroundColor = "light" }) => {
  return (
    <>
      <GlobalStyle />
      <App backgroundColor={backgroundColor}>
        <Containers1X />
      </App>
    </>
  );
};

export default TaskBoxApp;
