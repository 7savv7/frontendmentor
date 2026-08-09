interface Props {
  completed: boolean;
  toggleCompleted: () => void;
}

function CheckBox({ completed, toggleCompleted }: Props) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        className="peer hidden"
        type="checkbox"
        checked={completed}
        onChange={toggleCompleted}
      />

      <span
        className="flex items-center justify-center w-6 h-6 border border-gray300 dark:border-purple800 rounded-full 
          peer-checked:bg-gradient-to-r peer-checked:from-from peer-checked:to-to hover:border-from"
      >
        {completed && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </span>
    </label>
  );
}

export default CheckBox;
