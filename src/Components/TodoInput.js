import { useState } from "react";

export default function TodoInput({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    if (!description) return;

    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
    };
    addNewTask(newTask);
    setDescription("");
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="input-box">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          placeholder="Enter your descriptions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <button>ADD</button>
    </form>
  );
}
