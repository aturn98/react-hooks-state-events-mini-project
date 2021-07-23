import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  const filterTasks = tasks.filter((task) => 
    selectedCategory === "All" || task.category === selectedCategory
  )

  function onTaskFormSubmit(data) {
    setTasks([...tasks, data])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={filterTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
