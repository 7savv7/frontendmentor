"use client";

import Image from "next/image";
import data from "@/app/data.json";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [drop, setDrop] = useState<boolean>(false);
  const [region, setRegion] = useState("");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <main className="p-5 text-text lg:p-20 lg:pt-15">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center justify-between">
        <div className="flex items-center gap-5 bg-elements shadow-sm rounded-md pl-5">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
            <path
              className="fill-input"
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>

          <input
            className="p-4 pl-0 outline-none w-100 placeholder:text-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            aria-label="Search for a country..."
            placeholder="Search for a country..."
          />
        </div>

        <div className="relative w-fit font-[600]">
          <button
            type="button"
            aria-expanded={drop}
            onClick={() => setDrop((prev) => !prev)}
            className="cursor-pointer flex items-center justify-between bg-elements shadow-sm rounded-md p-4 w-40"
          >
            <p>{region ? region : "Filter by region"}</p>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
              <path
                className="fill-text"
                d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
              />
            </svg>
          </button>

          {drop && (
            <div className="flex flex-col gap-1 absolute z-5 p-4 rounded-md shadow-sm top-full left-0 w-full bg-elements mt-1">
              {regions.map((r) => (
                <button
                  type="button"
                  key={r}
                  className={`cursor-pointer text-left p-1 ${r === region && "shadow-sm"} hover:shadow-sm`}
                  onClick={() => {
                    setRegion((prev) => (prev === r ? "" : r));
                    setDrop(false);
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-20 lg:mt-15">
        {data
          .filter(
            (country) =>
              (country.region === region || region === "") &&
              (country.name.toLowerCase().includes(search.toLowerCase()) ||
                country.capital?.toLowerCase().includes(search.toLowerCase())),
          )
          .map((country) => (
            <Link
              className="m-auto w-full max-w-80 lg:max-w-full"
              href={`/${country.alpha3Code}`}
              key={country.alpha3Code}
            >
              <div
                className="overflow-hidden flex flex-col w-full h-80 bg-elements shadow-sm rounded-md 
              transition duration-[400ms] hover:-translate-y-5"
              >
                <div className="relative overflow-hidden h-full">
                  <Image
                    className="object-cover object-center"
                    src={country.flag}
                    alt=""
                    fill
                  />
                </div>

                <div className="h-[80%] p-5 flex flex-col gap-2">
                  <p className="font-[800] text-[1.2em]">{country.name}</p>

                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-[600]">Population:</span>{" "}
                      {country.population.toLocaleString("en-US")}
                    </p>
                    <p>
                      <span className="font-[600]">Region:</span>{" "}
                      {country.region}
                    </p>
                    <p>
                      <span className="font-[600]">Capital:</span>{" "}
                      {country.capital}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
