import { useState } from "react";

const AddTodoForm = ({ onAdd }: { onAdd: (text: string) => void }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="inputButtonContainer">
            <input
                type="text"
                placeholder="Veuillez entrer votre tâche"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Ajoutez tâche</button>
        </form>
    );
};

export default AddTodoForm
