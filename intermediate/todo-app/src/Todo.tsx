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
            <Item
              key={index}
              todo={todo}
              index={index}
              toggleCompleted={() => toggleCompleted(index)}
              deleteTodo={() => deleteTodo(index)}
            />
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
