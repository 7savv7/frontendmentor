interface Props {
  filter: string[];
  remove: (val: string) => void;
  clear: () => void;
}

function Filter({ filter, remove, clear }: Props) {
  return (
    <div className="relative top-[-35px] px-5 md:px-20 lg:px-40">
      <div className="bg-white rounded-sm px-4 shadow-lg w-full flex items-center md:px-0">
        <div className="p-5 flex flex-wrap flex-1 gap-3">
          {filter.map((f) => (
            <div key={f} className="flex rounded-sm w-fit overflow-hidden">
              <p className="bg-green400/10 py-1 px-2 text-green400 font-bold">
                {f}
              </p>

              <div
                onClick={() => remove(f)}
                className="cursor-pointer bg-green400 flex items-center justify-center p-2 hover:bg-green900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="pr-5">
          <button
            onClick={clear}
            className="cursor-pointer font-bold text-gray400 hover:text-green400 hover:underline"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
