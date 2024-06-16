import TodoControl from "./Components/TodoControl";
import TodoInput from "./Components/TodoInput";
import MyTodos from "./Components/MyTodos";
import Header from "./Components/Header";
import MyCompletedTask from "./Components/MyCompletedTask";
import MyStats from "./Components/MyStats";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTasks")) || []
  );
  const [completedTask, setCompletedTask] = useState(
    JSON.parse(localStorage.getItem("myCompleted")) || []
  );

  const [isEdit, setIsEdit] = useState();
  const taskTodoNum = tasks.length;
  const doneTaskNum = completedTask.length;
  const [isCompleted, setIseCompleted] = useState(false);
  function addNewTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }
  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  function doneTask(id) {
    let task = tasks.filter((task) => task.id === id);
    let now = new Date();
    let yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let d = now.getDate();
    let h = now.getHours();
    let m = now.getMinutes();
    let time = `${d}/${mm}/${yyyy} at ${h}:${m}`;
    let newDoneTask = task[0];
    newDoneTask.fullTime = time;
    setCompletedTask((completedTask) => [...completedTask, newDoneTask]);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    localStorage.setItem("myCompleted", JSON.stringify(completedTask));
  }
  function deleteDoneTask(id) {
    setCompletedTask((completedTask) =>
      completedTask.filter((task) => task.id !== id)
    );
  }
  function updateTask(idToEdit, newTitle, newDescrption) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === idToEdit
          ? { ...task, title: newTitle, description: newDescrption }
          : task
      )
    );
  }
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    localStorage.setItem("myCompleted", JSON.stringify(completedTask));
  }, [tasks, completedTask]);
  return (
    <div className="container">
      <Header />
      <MyStats taskTodoNum={taskTodoNum} doneTaskNum={doneTaskNum} />
      <TodoInput addNewTask={addNewTask} />
      <TodoControl
        isCompleted={isCompleted}
        setIseCompleted={setIseCompleted}
      />
      {!isCompleted && (
        <MyTodos
          myTasks={tasks}
          deleteTask={deleteTask}
          doneTask={doneTask}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          updateTask={updateTask}
        />
      )}
      {isCompleted && (
        <MyCompletedTask
          completedTask={completedTask}
          deleteDoneTask={deleteDoneTask}
        />
      )}
    </div>
  );
}

export default App;
