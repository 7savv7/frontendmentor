import type { City, Weather } from "../App";

interface Props {
  icon: (code: number) => string;
  unit: "Imperial" | "Metric";
  city: City;
  weather: Weather | null;
  loading: boolean;
}

function CurrentWeather({ icon, unit, city, weather, loading }: Props) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  const info = [
    {
      title: "Feels Like",
      data: weather?.current.apparent_temperature,
      symbol: "°",
    },
    {
      title: "Humidity",
      data: weather?.current.relative_humidity_2m,
      symbol: "%",
    },
    {
      title: "Wind",
      data: weather?.current.wind_speed_10m,
      symbol: unit === "Imperial" ? " mph" : " km/h",
    },
    {
      title: "Precipitation",
      data: weather?.current.precipitation,
      symbol: unit === "Imperial" ? " in" : " mm",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <div className="h-[286px] w-full bg-neutral800 rounded-2xl p-5 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-neutral200 rounded-full animate-b [animation-delay:0ms]" />
            <div className="w-3 h-3 bg-neutral200 rounded-full animate-b [animation-delay:250ms]" />
            <div className="w-3 h-3 bg-neutral200 rounded-full animate-b [animation-delay:500ms]0" />
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        <div
          className="h-[286px] w-full bg-[url(/images/bg-today-small.svg)] bg-no-repeat 
          bg-cover bg-center rounded-2xl p-8 flex flex-col items-center justify-between 
          md:flex-row md:bg-[url(/images/bg-today-large.svg)]"
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[1.6em] font-[600] text-center">
              {city.name}, {city.country}
            </p>

            <p className="text-neutral200">
              {weather && formatDate(weather.current.time)}
            </p>
          </div>

          <div className="flex items-center justify-between w-full gap-2 md:w-fit md:gap-10">
            {weather && (
              <img
                className="w-20 h-20"
                src={`/images/${icon(weather.current.weathercode)}.webp`}
                alt={icon(weather.current.weathercode)}
              />
            )}
            <p className="text-[4em] font-[700]">
              {weather?.current.temperature_2m}°
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {info.map((i) => (
          <div
            key={i.title}
            className="bg-neutral800 border border-neutral600 rounded-lg p-4 flex flex-col gap-5"
          >
            <p className="text-neutral200">{i.title}</p>

            {loading ? (
              <p className="text-[2em] text-neutral200">-</p>
            ) : (
              <p className="text-[1.5em]">
                {i.data}
                {i.symbol}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
