import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid";

function TaskList({ tasks, handleDelete }) {
  const displayTasks = tasks.map((task) => 
      <Task key={nanoid()} 
      text={task.text} 
      category={task.category}
      handleDelete={handleDelete}
       />
    )
    // console.log(displayTasks)
    

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
