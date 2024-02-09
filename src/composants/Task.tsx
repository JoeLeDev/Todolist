import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Item {
    id: number;
    text: string;
    completed: boolean;
}

const Task = ({ todo, onToggle, onDelete, onUpdate }: { todo: Item, onToggle: (id: number) => void, onDelete: (id: number) => void, onUpdate: (id: number, text: string) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="Task">
        <li  style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {isEditing ? (
                <input style={{width : "fit-content"}} type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
            ) : (
                <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
            )}
            <div className="icon">
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(todo.id)} />
                {isEditing && <button onClick={handleSave}>Save</button>}
            </div>
        </li>
        </div>
    );
};

export default Task
