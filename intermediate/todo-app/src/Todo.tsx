import { useState } from "react";
import useTodo from "./store";
import CheckBox from "./CheckBox";

type Filter = "All" | "Active" | "Completed";

function Todo() {
  const [filter, setFilter] = useState<Filter>("All");
  const [task, setTask] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const { todos, addTodo, deleteTodo, clearCompleted, toggleCompleted } =
    useTodo();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(task, completed);
      setTask("");
      setCompleted(false);
    }
  };

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-navy900 pl-4 rounded-sm flex items-center gap-2">
        <CheckBox
          completed={completed}
          toggleCompleted={() => setCompleted((prev) => !prev)}
        />

        <input
          className="h-full w-full py-4 outline-none text-[18px] text-purple300"
          type="text"
          value={task}
          placeholder="Create a new todo..."
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleSubmit}
        />
      </div>

      <div className="mt-4 rounded-sm overflow-hidden bg-navy900">
        {todos
          .map((todo, index) => ({ todo, index }))
          .filter(({ todo }) =>
            filter === "All"
              ? true
              : filter === "Active"
                ? !todo.completed
                : todo.completed,
          )
          .map(({ todo, index }) => (
            <div
              key={index}
              className="group flex justify-between items-center bg-navy900 p-4 w-full border-b border-purple800"
            >
              <div className="flex items-center">
                <CheckBox
                  completed={todo.completed}
                  toggleCompleted={() => toggleCompleted(index)}
                />

                <p
                  className={`ml-2 text-[18px] text-purple300 ${todo.completed && "line-through text-purple600"}`}
                >
                  {todo.task}
                </p>
              </div>

              <svg
                className="cursor-pointer justify-self-end md:hidden md:group-hover:block"
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

        <div className="flex p-4 justify-between bg-navy900 text-purple600 font-semibold">
          <p>{todos.length} items left</p>

          <div className="flex gap-4 absolute w-full top-[calc(100%+15px)] left-0 bg-navy900 p-4 justify-center rounded-sm md:relative md:p-0 md:w-fit">
            {["All", "Active", "Completed"].map((option) => (
              <p
                key={option}
                onClick={() => setFilter(option as Filter)}
                className={`cursor-pointer ${filter === option ? "text-blue500" : "hover:text-purple300"}`}
              >
                {option}
              </p>
            ))}
          </div>

          <p
            onClick={clearCompleted}
            className="cursor-pointer hover:text-purple300"
          >
            Clear Completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
