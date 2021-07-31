import React, { FC, useState } from "react";
import { Item, TaskItem, TaskList } from "./TaskBoxTasks.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import TaskBoxEmpty from "../TaskBoxEmpty/TaskBoxEmpty";

type TaskObj = {
  task: string;
  toggle: boolean;
};

const TaskBoxTasks: FC = () => {
  const [tasks, setTasks] = useState<TaskObj[]>([
    { task: "Clean Room", toggle: false },
    { task: "Wash Clothes", toggle: false },
    { task: "Make Food", toggle: false },
    { task: "Drink Water", toggle: false },
    { task: "Bath", toggle: false },
    { task: "Sleep", toggle: false },
    { task: "Watching Movie", toggle: false },
  ]);

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const starTask = (index: number) => {
    if (!tasks[index].toggle) {
      tasks[index].toggle = true;
      setTasks([tasks[index], ...tasks.filter((task, i) => i !== index)]);
    } else {
      tasks[index].toggle = false;
      setTasks([...tasks.filter((task, i) => i !== index), tasks[index]]);
    }
  };

  return (
    <TaskList>
      {tasks.length !== 0 ? (
        tasks.map(({ task, toggle }, index: number) => (
          <TaskItem key={index}>
            <Item>
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                color={!toggle ? "#ded4d4" : "#fb937d"}
                onClick={() => starTask(index)}
              />
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
