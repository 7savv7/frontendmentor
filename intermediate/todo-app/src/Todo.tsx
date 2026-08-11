import { useState } from "react";
import useTodo from "./store";
import CheckBox from "./CheckBox";
import Item from "./Item";

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

  const filtered = todos
    .map((todo, index) => ({ todo, index }))
    .filter(({ todo }) =>
      filter === "All"
        ? true
        : filter === "Active"
          ? !todo.completed
          : todo.completed,
    );

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gray50 dark:bg-navy900 pl-5 rounded-sm flex items-center gap-5 shadow-lg md:shadow-none">
        <CheckBox
          completed={completed}
          toggleCompleted={() => setCompleted((prev) => !prev)}
        />

        <input
          className="h-full w-full py-5 outline-none text-[18px] text-navy850 dark:text-purple300"
          type="text"
          value={task}
          placeholder="Create a new todo..."
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleSubmit}
        />
      </div>

      <div className="mt-4 rounded-sm overflow-hidden bg-gray50 dark:bg-navy900 shadow-lg md:shadow-2xl">
        {filtered.map(({ todo, index }) => (
          <Item
            key={index}
            todo={todo}
            index={index}
            toggleCompleted={() => toggleCompleted(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}

        <div className="flex p-4 justify-between bg-gray50 dark:bg-navy900 text-gray600 dark:text-purple600 font-semibold">
          <p>{filtered.length} items left</p>

          <div
            className="flex gap-4 absolute w-full top-[calc(100%+15px)] left-0 bg-gray50 dark:bg-navy900
           p-4 justify-center rounded-sm md:relative md:p-0 md:w-fit shadow-lg md:shadow-none"
          >
            {["All", "Active", "Completed"].map((option) => (
              <p
                key={option}
                onClick={() => setFilter(option as Filter)}
                className={`cursor-pointer ${filter === option ? "text-blue500" : "hover:text-navy850 dark:hover:text-purple300"}`}
              >
                {option}
              </p>
            ))}
          </div>

          <p
            onClick={clearCompleted}
            className="cursor-pointer hover:text-navy850 dark:hover:text-purple300"
          >
            Clear Completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
