import "./TaskItem.css";

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="task-item">
        <span
            className={`task-text ${task.completed ? "task-completed" : ""}`}
            onClick={() => onToggle(task.id)}
        >
            {task.text}
        </span>
        <button className="task-delete" onClick={() => onDelete(task.id)}>
            Delete
        </button>
        </li>
    );
}

export default TaskItem;
