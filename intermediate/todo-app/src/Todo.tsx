import { useState } from "react";
import useTodo from "./store";

function Todo() {
  const [task, setTask] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const { todos, addTodo, deleteTodo, clearCompleted, toggleCompleted } =
    useTodo();

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted((prev) => !prev)}
        />
        <input
          type="text"
          value={task}
          placeholder="Type"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo(task, completed)}
        />
      </div>

      <div>
        {todos.map((todo, index) => (
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            <p>{todo.task}</p>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              onClick={() => deleteTodo(index)}
            >
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
