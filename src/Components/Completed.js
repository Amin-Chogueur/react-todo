function Completed({ task, deleteDoneTask }) {
  return (
    <li>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Completed on: {task.fullTime}</p>
      </div>
      <div className="task-btn">
        <button className="delete-btn" onClick={() => deleteDoneTask(task.id)}>
          ❌
        </button>
      </div>
    </li>
  );
}

export default Completed;
