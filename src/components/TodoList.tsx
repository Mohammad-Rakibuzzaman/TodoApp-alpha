import Todo from "./Todo";

interface TodoListProps {
  todos: string[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="divide-y">
      {todos.map((todo) => (
        <Todo key={todo} text={todo} />
      ))}
    </div>
  );
};

export default TodoList;
