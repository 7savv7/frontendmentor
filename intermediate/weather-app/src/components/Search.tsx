import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { City } from "../App";

interface Props {
  setCity: Dispatch<SetStateAction<City>>;
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

function Search({ setCity, cities, setCities, setError }: Props) {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const getCities = async (city: string) => {
    if (city.trim() === "") return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
      );
      const data = await res.json();
      setCities(data.results || []);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCities("Berlin");
  }, []);

  return (
    <div className="w-full text-white text-center flex flex-col items-center pb-10">
      <h1 className="text-[2.5em] w-[80%] leading-[1.2em] my-10 font-[700]">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col gap-4 w-full md:flex-row md:w-[50%] md:max-w-[800px]">
        <div className="group relative w-full">
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                inputRef.current?.focus();
              }
            }}
            className="cursor-pointer flex items-center gap-1 bg-neutral800 pl-6 overflow-hidden w-full rounded-lg 
            hover:bg-neutral700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            <img
              className="w-[21px] h-[21px]"
              src="/images/icon-search.svg"
              alt="search"
            />

            <input
              className="flex-1 p-2 py-3 outline-none"
              tabIndex={-1}
              ref={inputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search for a city, e.g., New York"
            />
          </label>

          {(cities.length > 0 || loading) && (
            <div
              className={`absolute ${loading ? "flex" : "hidden group-focus-within:flex hover:flex active:flex"} 
              flex-col gap-2 left-0 top-[100%] border border-neutral600 mt-2 rounded-lg p-2 w-full bg-neutral800`}
            >
              {loading ? (
                <div className="flex items-center gap-3 p-2">
                  <img
                    className="animate-spin"
                    src="/images/icon-loading.svg"
                    alt="loading"
                  />

                  <p>Search in progress</p>
                </div>
              ) : (
                cities.map((city) => (
                  <p
                    key={city.id}
                    onClick={() => setCity(city)}
                    className="cursor-pointer hover:bg-neutral700 border border-transparent hover:border-neutral600 
                    rounded-md p-2 text-left"
                  >
                    {city.name}, {city.country}
                  </p>
                ))
              )}
            </div>
          )}
        </div>

        <button
          type="submit"
          onClick={() => {
            getCities(text);
            inputRef.current?.focus();
          }}
          className="cursor-pointer w-full bg-blue500 rounded-lg p-3 px-5 md:w-fit hover:opacity-60 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:theme(colors.blue.500)]"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
