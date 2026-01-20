import { FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";


export default function TaskList({tasks , updateTask, deleteTask}) {
    const toggleComplete = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }
    return(
<ul className="task-list">
  {tasks.map((task, index) => (
    <li
      key={index}
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      <div className="task-info">
        <span className="task-text">
          {task.text}
          <small className="task-meta">
            ({task.Priority}, {task.Category})
          </small>
        </span>
      </div>

      <div className="task-actions">
        <button className="complete-btn" onClick={() => toggleComplete(index)}>
          {task.completed ? <FaCheckCircle />: <FaRegCircle />}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(index)}>
          <FaTrash />
        </button>
      </div>
    </li>
  ))}
</ul>
    )
}
