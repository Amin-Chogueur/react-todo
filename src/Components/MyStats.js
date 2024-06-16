function MyStats({ taskTodoNum, doneTaskNum }) {
  return (
    <div className="stats">
      {taskTodoNum === 0 ? (
        <p>* You have no task todo</p>
      ) : (
        <p>* You have {taskTodoNum} task todo</p>
      )}
      {doneTaskNum === 0 && taskTodoNum !== 0 && (
        <p>* You have not done any task </p>
      )}
      {doneTaskNum !== 0 && <p>* You have done {doneTaskNum} task </p>}
    </div>
  );
}

export default MyStats;
