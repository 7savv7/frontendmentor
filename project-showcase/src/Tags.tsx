interface Props {
  tag: string;
  removeTag: (val: string) => void;
}

function Tags({ tag, removeTag }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 px-1.5 py-1 bg-purple-200  rounded-md">
      <p className="capitalize">{tag}</p>

      <button
        className="cursor-pointer bg-white h-full p-2 rounded-sm hover:bg-black/20"
        onClick={() => removeTag(tag)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="black"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Tags;
