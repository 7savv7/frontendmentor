"use client";

import Image from "next/image";
import data from "@/app/data.json";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [drop, setDrop] = useState<boolean>(false);
  const [region, setRegion] = useState("Filter by region");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <main className="p-20 pt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 bg-white shadow-sm rounded-md pl-5">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
          </svg>

          <input
            className="p-4 pl-0 outline-none w-100"
            type="text"
            placeholder="Search for a country..."
          />
        </div>

        <div className="relative">
          <div
            onClick={() => setDrop((prev) => !prev)}
            className="cursor-pointer flex items-center justify-between bg-white shadow-sm rounded-md p-4 w-40"
          >
            <p>{region}</p>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
            </svg>
          </div>

          {drop && (
            <div className="flex flex-col gap-2 absolute z-5 p-4 rounded-md shadow-sm top-full left-0 w-full bg-white mt-1">
              {regions.map((r) => (
                <div
                  key={r}
                  className="cursor-pointer"
                  onClick={() =>
                    setRegion((prev) => (prev === r ? "Filter by region" : r))
                  }
                >
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-20 mt-10">
        {data.map((country) => (
          <Link href={`/${country.alpha3Code}`} key={country.alpha3Code}>
            <div
              className="overflow-hidden flex flex-col w-full h-80 bg-white shadow-sm rounded-md 
              transition duration-[400ms] hover:-translate-y-5"
            >
              <div className="relative overflow-hidden h-full">
                <Image
                  className="object-cover object-center"
                  src={country.flag}
                  alt={`${country.name}-flag`}
                  fill
                  loading="eager"
                  priority
                />
              </div>

              <div className="h-[80%] p-5 flex flex-col gap-3">
                <p>{country.name}</p>

                <div>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
