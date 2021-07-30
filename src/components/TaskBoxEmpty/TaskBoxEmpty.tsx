import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Empty } from "./TaskBoxEmpty.style";

const TaskBoxEmpty: FC = () => {
  return (
    <Empty>
      <FontAwesomeIcon icon={faCheck} size="5x" color="#fb937d" />
      <h2>Empty Tasks...</h2>
    </Empty>
  );
};

export default TaskBoxEmpty;
