import { useState } from "react";
function Todo({ task, deleteTask, doneTask, setIsEdit, isEdit, updateTask }) {
  const [editTitleTask, setEditTitleTask] = useState("");
  const [editDescriptionTask, setEditDescriptionTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
    updateTask(task.id, editTitleTask, editDescriptionTask);
  }
  function handleEdit(idToEdit) {
    setIsEdit(idToEdit);
    setEditTitleTask(task.title);
    setEditDescriptionTask(task.description);
  }
  if (isEdit === task.id) {
    return (
      <form className="edit-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Edit your task"
            value={editTitleTask}
            onChange={(e) => setEditTitleTask(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Edit the descriptions"
            value={editDescriptionTask}
            onChange={(e) => setEditDescriptionTask(e.target.value)}
          ></input>
        </div>
        <button>EDIT</button>
      </form>
    );
  } else {
    return (
      <li>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="task-btn">
          <button title="Completed" onClick={() => doneTask(task.id)}>
            ✔
          </button>
          <button title="Edit" onClick={() => handleEdit(task.id)}>
            🖊
          </button>
          <button
            title="Delete"
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            ❌
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
