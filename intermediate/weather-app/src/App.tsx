import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";

export interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  feature_code: string;
  country_code: string;
  timezone: string;
  country: string;
}

export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    weathercode: number;
  };

  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    precipitation: string;
    weathercode: string;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
  };

  hourly_units: {
    time: string;
    temperature_2m: string;
    weathercode: string;
  };

  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };

  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
}

function App() {
  const Berlin = {
    id: 2950159,
    name: "Berlin",
    latitude: 52.52437,
    longitude: 13.41053,
    feature_code: "PPLC",
    country_code: "DE",
    timezone: "Europe/Berlin",
    country: "Germany",
  };
  const [unit, setUnit] = useState<"Imperial" | "Metric">("Metric");
  const [cities, setCities] = useState<City[]>([]);
  const [city, setCity] = useState<City>(Berlin);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function getWeatherIcon(code: number): string {
    if (code <= 2) return "icon-partly-cloudy";
    if (code === 3) return "icon-overcast";

    if (code === 45 || code === 48) return "icon-fog";

    if (code >= 51 && code <= 57) return "icon-drizzle";

    if (code >= 61 && code <= 67) return "icon-rain";

    if (code >= 71 && code <= 77) return "icon-snow";

    if (code >= 80 && code <= 82) return "icon-rain";

    if (code === 85 || code === 86) return "icon-snow";

    if (code >= 95 && code <= 99) return "icon-storm";

    return "icon-overcast";
  }

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          unit === "Metric"
            ? `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weathercode&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min`
            : `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weathercode&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`,
        );

        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getWeather();
  }, [city, unit]);

  useEffect(() => console.log(weather, error), [weather]);

  return (
    <div className="min-h-svh text-white p-5 md:p-20 md:py-14 max-w-400 m-auto md:min-h-screen">
      <Header unit={unit} setUnit={setUnit} />

      {error ? (
        <div className="w-full p-6 py-20 flex flex-col gap-4 items-center text-center">
          <img className="w-10 h-10" src="/images/icon-error.svg" alt="error" />

          <h1 className="text-[2em] font-[700]">Something went wrong</h1>

          <p className="text-neutral200 md:w-[40%]">
            We couldn't connect to the server (API Error). Please try again in a
            few moments.
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="cursor-pointer flex items-center gap-2 bg-neutral700 
            p-2 px-4 rounded-md hover:bg-neutral600"
          >
            <img src="/images/icon-retry.svg" alt="retry" />
            <p>Retry</p>
          </button>
        </div>
      ) : (
        <>
          <Search
            setCity={setCity}
            cities={cities}
            setCities={setCities}
            setError={setError}
          />

          {cities.length === 0 ? (
            <p className="text-center font-[600]">No search result found!</p>
          ) : (
            <main className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-col flex-1 gap-8">
                <CurrentWeather
                  icon={getWeatherIcon}
                  unit={unit}
                  city={city}
                  weather={weather}
                  loading={loading}
                />

                <DailyWeather
                  weather={weather}
                  icon={getWeatherIcon}
                  loading={loading}
                />
              </div>

              <div className="w-full md:w-[35%] min-h-full">
                <HourlyWeather
                  weather={weather}
                  icon={getWeatherIcon}
                  loading={loading}
                />
              </div>
            </main>
          )}
        </>
      )}
    </div>
  );
}

export default App;
