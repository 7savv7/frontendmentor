import { useSortable } from "@dnd-kit/react/sortable";
import CheckBox from "./CheckBox";
import type { Todo } from "./store";

interface Props {
  todo: Todo;
  index: number;
  toggleCompleted: () => void;
  deleteTodo: () => void;
}

function Item({ todo, index, toggleCompleted, deleteTodo }: Props) {
  const { ref } = useSortable({ id: index, index });
  return (
    <div
      ref={ref}
      className="cursor-grab group flex justify-between items-center bg-navy900 p-4 w-full border-b border-purple800"
    >
      <div className="flex items-center">
        <CheckBox
          completed={todo.completed}
          toggleCompleted={toggleCompleted}
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
        onClick={deleteTodo}
      >
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
}

export default Item;
