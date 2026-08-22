import type { Weather } from "../App";

interface Props {
  weather: Weather | null;
  icon: (code: number) => string;
  loading: boolean;
}

function DailyWeather({ weather, icon, loading }: Props) {
  const days = Array.from({ length: 7 }, (_, i) => ({
    date: weather?.daily.time[i],
    weatherCode: weather?.daily.weathercode[i],
    max: weather?.daily.temperature_2m_max[i],
    min: weather?.daily.temperature_2m_min[i],
  }));

  function getDay(dateString: string) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(new Date(dateString));
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-[500]">Daily forecast</h2>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
        {days.map((day) => (
          <div
            key={day.date}
            className="flex flex-col justify-between items-center min-h-50 gap-2 bg-neutral800 
            border border-neutral600 rounded-lg p-4"
          >
            {!loading && (
              <>
                <p>{getDay(day.date as string)}</p>

                <img
                  className="w-20 h-20"
                  src={`/images/${icon(day.weatherCode as number)}.webp`}
                  alt={icon(day.weatherCode as number)}
                />

                <div className="flex items-center justify-between w-full">
                  <p>{Math.round(day.max as number)}°</p>
                  <p>{Math.round(day.min as number)}°</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyWeather;
