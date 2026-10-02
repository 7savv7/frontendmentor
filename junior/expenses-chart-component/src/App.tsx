import { useState } from "react";
import data from "./data.json";

function App() {
  const [open, setOpen] = useState<string[]>([]);
  return (
    <div className="min-h-svh lg:min-h-screen bg-red-100 p-5 flex justify-center items-center">
      <div className="w-full flex flex-col gap-5 max-w-120">
        <div className="bg-red-500 rounded-xl p-5 flex justify-between">
          <div className="text-white flex flex-col justify-between gap-1">
            <p>My balance</p>

            <p className="font-bold text-[1.5em]">$921.48</p>
          </div>

          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="bg-white p-5 rounded-xl">
          <h1 className="text-brown-950 font-bold text-[1.5em]">
            Spending - Last 7 days
          </h1>

          <div className="pb-5 pt-15 flex gap-3 items-end">
            {data.map((d) => (
              <div
                key={d.day}
                className="relative text-center flex-1 flex flex-col items-center gap-2 group"
              >
                <div
                  className={`${open.includes(d.day) ? "flex" : "hidden"} group-hover:flex absolute bottom-full mb-2 bg-brown-950 text-white rounded-sm p-2 text-[0.8em]`}
                >
                  ${d.amount}
                </div>

                <div
                  className={`cursor-pointer w-full rounded-sm hover:opacity-50 ${open.includes(d.day) && "opacity-50"} ${
                    d.day ===
                    new Date()
                      .toLocaleDateString("en-US", { weekday: "short" })
                      .toLowerCase()
                      ? "bg-blue-300"
                      : "bg-red-500"
                  }`}
                  onClick={() =>
                    setOpen((prev) =>
                      prev.includes(d.day)
                        ? prev.filter((p) => p !== d.day)
                        : [...prev, d.day],
                    )
                  }
                  style={{ height: 180 * (d.amount / data[2].amount) }}
                />

                <p className="text-brown-400 text-[0.8em]">{d.day}</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-red-100 pt-5">
            <p className="text-brown-400 text-[0.8em]">Total this month</p>

            <div className="flex items-center justify-between">
              <p className="font-bold text-[2em] text-brown-950">$478.33</p>

              <div className="text-right text-[0.8em]">
                <p className="font-bold text-brown-950">+2.4%</p>
                <p className="text-brown-400">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
