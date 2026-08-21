import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  unit: "Imperial" | "Metric";
  setUnit: Dispatch<SetStateAction<"Imperial" | "Metric">>;
}

function Header({ unit, setUnit }: Props) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const units = [
    {
      title: "Temperature",
      items: [
        { name: "Celsius (°C)", unit: "Metric" },
        { name: "Fahrenheit (°F)", unit: "Imperial" },
      ],
    },
    {
      title: "Wind Speed",
      items: [
        { name: "km/h", unit: "Metric" },
        { name: "mph", unit: "Imperial" },
      ],
    },
    {
      title: "Precipitation",
      items: [
        { name: "Millimeters (mm)", unit: "Metric" },
        { name: "Inches (in)", unit: "Imperial" },
      ],
    },
  ];

  return (
    <header className="flex justify-between items-center text-white">
      <img className="w-[35%] max-w-[197px]" src="/images/logo.svg" alt="logo" />

      <div className="relative">
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className="cursor-pointer flex justify-between items-center gap-2 p-3 py-2 rounded-lg 
          bg-neutral800 hover:bg-neutral700"
        >
          <img src="/images/icon-units.svg" alt="units" />

          <p>Units</p>

          <img src="/images/icon-dropdown.svg" alt="dropdown" />
        </div>

        <div
          className={`${dropdown ? "flex" : "hidden"} flex-col absolute z-10 top-[100%] right-0 w-[200%] 
          mt-3 bg-neutral800 rounded-xl border border-neutral600 p-2`}
        >
          <button
            type="button"
            onClick={() =>
              setUnit((prev) => (prev === "Imperial" ? "Metric" : "Imperial"))
            }
            className="cursor-pointer p-2 hover:bg-neutral700 rounded-lg w-full text-left"
          >
            Switch to {unit === "Imperial" ? "Metric" : "Imperial"}
          </button>

          {units.map((item, index) => (
            <div
              key={item.title}
              className={`${index !== 0 && "border-t-2 border-neutral600"} ${index !== units.length - 1 && "pb-2"} 
              flex flex-col gap-2 pt-2 `}
            >
              <p className="text-neutral300 text-[0.9em] px-2">{item.title}</p>

              {item.items.map((i) => (
                <div
                  key={i.name}
                  className={`flex justify-between items-center p-2 ${unit === i.unit && "bg-neutral700"} rounded-lg`}
                >
                  <p>{i.name}</p>

                  {unit === i.unit && (
                    <img src="/images/icon-checkmark.svg" alt="checkmark" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
