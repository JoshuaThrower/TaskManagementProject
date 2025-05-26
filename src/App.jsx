import { useState, useEffect } from "react"
import TaskList from "./component/TaskList"
import AddTaskForm from "./component/AddTaskForm"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {  // Loads Tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => { // Saves Tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(tasks =>
      tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks
    ));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <h1>Lamp's Task Tracker</h1>

        <button className="toggle-dark" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <AddTaskForm onAdd={addTask} />

        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );

  
}

export default App
