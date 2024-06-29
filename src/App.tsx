import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
