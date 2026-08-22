import { useEffect, useState } from "react";
import type { Weather } from "../App";

interface Props {
  weather: Weather | null;
  icon: (code: number) => string;
  loading: boolean;
}

function HourlyWeather({ weather, icon, loading }: Props) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [day, setDay] = useState<string>("-");
  function getDayName(dateString: string) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "UTC",
    }).format(new Date(dateString));
  }
  function groupByDay(weather: Weather) {
    const { time, temperature_2m, weathercode } = weather.hourly;

    const days: Record<string, any[]> = {};

    for (let i = 0; i < time.length; i++) {
      const date = new Date(time[i]);
      const dayKey = date.toISOString().split("T")[0];

      if (!days[dayKey]) days[dayKey] = [];

      days[dayKey].push({
        time: time[i],
        temp: temperature_2m[i],
        code: weathercode[i],
      });
    }

    return Object.entries(days).map(([date, hours]) => ({
      date,
      dayName: getDayName(date),
      hours,
    }));
  }
  function formatHour(dateString: string) {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: "UTC",
    }).format(new Date(dateString));
  }
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [group, setGroup] = useState<any[] | null>(null);

  useEffect(() => {
    if (weather) {
      setGroup(groupByDay(weather));
      console.log(group);
    }
  }, [weather]);

  useEffect(() => {
    if (!weather) return;

    if (loading) {
      setDay("-");
    } else {
      setDay(getDayName(weather.current.time));
    }
  }, [weather, loading]);

  return (
    <div className="flex flex-col gap-4 bg-neutral800 rounded-lg p-4 w-full min-h-full">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-[600]">Hourly forecast</h2>

        <div className="relative">
          <div
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setDropdown((prev) => !prev);
              }
            }}
            onClick={() => setDropdown((prev) => !prev)}
            className="cursor-pointer bg-neutral600 rounded-md hover:bg-neutral700 flex items-center gap-2 p-2 px-4"
          >
            <p>{day}</p>

            <img src="/images/icon-dropdown.svg" alt="dropdown" />
          </div>

          {dropdown && (
            <div
              className="flex flex-col mt-2 gap-2 absolute top-[100%] right-0 bg-neutral800 
              border border-neutral600 w-50 rounded-lg p-2"
            >
              {days.map((d, i) => (
                <div
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setDay(d);
                      setDropdown(false);
                    }
                  }}
                  key={`${d}-${i}`}
                  onClick={() => {
                    setDay(d);
                    setDropdown(false);
                  }}
                  className={`cursor-pointer p-2 ${d === day ? "bg-neutral700" : "hover:bg-neutral700"} rounded-md`}
                >
                  <p>{d}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        tabIndex={-1}
        className="flex flex-col gap-2 max-h-152 w-full overflow-y-auto scrollbar-none"
      >
        {group
          ?.find((d) => d.dayName === day)
          ?.hours.map((hour: any) => (
            <div
              key={hour.time}
              className="flex items-center justify-between gap-2 bg-neutral700 rounded-md 
              w-full p-2 border border-neutral600 min-h-15"
            >
              {!loading && (
                <>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-8 "
                      src={`/images/${icon(hour.code)}.webp`}
                      alt={icon(hour.code)}
                    />

                    <p>{formatHour(hour.time)}</p>
                  </div>

                  <p>{hour.temp}</p>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HourlyWeather;
