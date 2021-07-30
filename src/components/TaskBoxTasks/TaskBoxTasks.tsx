import React, { FC, useState } from "react";
import { Item, TaskItem, TaskList } from "./TaskBoxTasks.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import TaskBoxEmpty from "../TaskBoxEmpty/TaskBoxEmpty";

const TaskBoxTasks: FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    "Clean Room",
    "Wash Clothes",
    "Make Food",
    "Drink Water",
    "Bath",
    "Sleep",
    "Watching Movie",
  ]);

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  return (
    <TaskList>
      {tasks.length !== 0 ? (
        tasks.map((task: string, index: number) => (
          <TaskItem key={index}>
            <Item>
              <FontAwesomeIcon icon={faStar} size="sm" color="#ded4d4" />
            </Item>
            <Item>
              <h3>{task}</h3>
            </Item>
            <Item>
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                onClick={() => deleteTask(index)}
              />
            </Item>
          </TaskItem>
        ))
      ) : (
        <TaskBoxEmpty />
      )}
    </TaskList>
  );
};

export default TaskBoxTasks;
