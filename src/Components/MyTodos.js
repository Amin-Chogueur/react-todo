import Todo from "./Todo";
function MyTodods({
  myTasks,
  deleteTask,
  doneTask,
  setIsEdit,
  isEdit,
  updateTask,
}) {
  return (
    <ol>
      {myTasks.map((task) => (
        <Todo
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          doneTask={doneTask}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          updateTask={updateTask}
        />
      ))}
    </ol>
  );
}

export default MyTodods;
