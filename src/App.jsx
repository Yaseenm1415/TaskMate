import { useState , useEffect} from "react";
import TaskForm from "./compnonets/TaskForm";
import TaskList from "./compnonets/TaskList";
import ProgressTracker from "./compnonets/ProgressTracker";
import "./Style.css";

export default function App() {

  const [tasks, setTask] = useState([]);

   useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTask([...tasks, task]);
  }
  
  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTask(newTask);
  }

  const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTask([]);
  }

  return(
    <div className="app">
      <header>
      <h1 className="title">TaskMate</h1>
      <p className="tagline">Our friendly TaskManager</p>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks}/>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={() => {clearTasks()}}>
        CLEAR
        </button>)}
    </div>
  )
}