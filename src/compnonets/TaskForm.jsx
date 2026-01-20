import { useState } from "react"
export default function TaskForm({addTask}) {
    const [task , setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');

 

    const handleSubmit = (e) => {
      e.preventDefault();

        addTask({
            text: task,
            Priority: priority,
            Category: category,
            completed: false
        });

        setTask("");
        setPriority('medium');
        setCategory('general');
    }
  return (
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-row">
        <input type="text" 
        className="task-input"
        placeholder="Enter your task" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" type="submit">ADD</button>
        </div>
      
        <div className="form-row">
            <select 
            className="select"
            value={priority}
            onChange={(e) => {setPriority(e.target.value)}} > 
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select 
            className="select"
            value={category} 
            onChange={(e) => {setCategory(e.target.value)}}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
      </form>
  )
}
