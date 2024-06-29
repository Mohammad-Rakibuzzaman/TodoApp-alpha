import { useState } from "react";

interface TodoProps {
  text: string;
}

const Todo = ({ text }: TodoProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border-b ${
        isCompleted ? "line-through text-gray-400" : ""
      }`}
    >
      <span>{text}</span>
      <button
        className={`ml-4 px-2 py-1 rounded ${
          isCompleted ? "bg-gray-400" : "bg-green-500"
        }`}
        onClick={handleToggle}
      >
        {isCompleted ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default Todo;
