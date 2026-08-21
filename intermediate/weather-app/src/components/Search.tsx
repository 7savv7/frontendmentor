function Search() {
  return (
    <div className="w-full text-white text-center flex flex-col items-center">
      <h1 className="text-[2.5em] w-[80%] leading-[1.2em] my-10 font-[700]">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col gap-4 w-full md:flex-row md:w-[50%]">
        <div className="relative w-full">
          <label
            className="cursor-pointer flex items-center gap-1 bg-neutral800 pl-6 overflow-hidden 
          w-full rounded-lg hover:bg-neutral700"
          >
            <img
              className="w-[21px] h-[21px]"
              src="/images/icon-search.svg"
              alt="search"
            />

            <input
              className="flex-1 p-2 py-3 outline-none"
              type="text"
              placeholder="Search for a city, e.g., New York"
            />
          </label>

          <div className="absolute flex flex-col gap-2 left-0 top-[100%] mt-2 rounded-lg p-2 w-full bg-neutral800">
            <p className="bg-neutral700 border border-neutral600 rounded-md p-2 text-left">
              City Name
            </p>
            <p className="bg-neutral700 border border-neutral600 rounded-md p-2 text-left">
              City Name
            </p>
            <p className="bg-neutral700 border border-neutral600 rounded-md p-2 text-left">
              City Name
            </p>
            <p className="bg-neutral700 border border-neutral600 rounded-md p-2 text-left">
              City Name
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-blue500 rounded-lg p-3 px-5 md:w-fit hover:opacity-60"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
