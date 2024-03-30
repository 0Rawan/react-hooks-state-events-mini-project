import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  const tasksList = tasks?.map((task)=> (    
    <Task
    key={task.text}
    text={task.text}
    category={task.category}
    deleteTask={deleteTask}
  />
  ));
  
      /* display a list of tasks using Task component */
  return <div className="tasks">{tasksList}</div>;
}

export default TaskList;