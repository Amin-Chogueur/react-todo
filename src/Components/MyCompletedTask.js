import Completed from "./Completed";
function MyCompletedTask({ completedTask, deleteDoneTask }) {
  return (
    <ol>
      {completedTask.map((task) => (
        <Completed task={task} key={task.id} deleteDoneTask={deleteDoneTask} />
      ))}
    </ol>
  );
}

export default MyCompletedTask;
