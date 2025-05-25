import { useState } from "react";
import "./AddTaskForm.css";

function AddTaskForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What is your task?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;