import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) return <p>You have not set any Tasks.</p>;

    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                );
            })}
        </ul>
    );
}

export default TaskList;