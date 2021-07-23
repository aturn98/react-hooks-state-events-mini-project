import React, { useState } from "react";
import { nanoid } from "nanoid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState("")
  const [category, setCategory] = useState("Code")
  
  const categoryOptions = categories.filter((category) => category !== "All")
  // console.log(categoryOptions)
  
  const displayOptions = categoryOptions.map((category) =>
    <option key={nanoid()} value={category}>{category}</option>  
  )
  // console.log(displayOptions)

  function handleTaskInput(e) {
    setNewTask(e.target.value)
  }

  function handleCategoryInput(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTaskData = {text: newTask, category: category}
    onTaskFormSubmit(newTaskData)
    setNewTask("")
    setCategory("Code")
    console.log(newTask)
    console.log(category)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskInput} value={newTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryInput} value={category} >
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
