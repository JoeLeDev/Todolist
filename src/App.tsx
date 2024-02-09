import "./index.css"
import { useState } from "react";
import AddTodoForm from "./composants/AddToDoForm";
import TodoItem from "./composants/Task";

interface Item {
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Item[]>([
        { id: 1, text: "Jonathan luembe", completed: false },
    ]);

    const addTodo = (text: string) => {
        const newTodo: Item = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (id: number, text: string) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, text } : todo
            )
        );
    };

    return (
        <div className="main-container">
            <div className="Todo">

                <h1>Todo List</h1>
                <AddTodoForm onAdd={addTodo} />
                <ul>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                            onUpdate={updateTodo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App
