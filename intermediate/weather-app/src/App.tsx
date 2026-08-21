import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

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
  const [unit, setUnit] = useState<"Imperial" | "Metric">("Imperial");
  const [city, setCity] = useState<City>(Berlin);
  const [cities, setCities] = useState<City[]>([]);

  return (
    <div className="min-h-svh p-5 md:min-h-screen">
      <Header unit={unit} setUnit={setUnit} />

      <Search setCity={setCity} cities={cities} setCities={setCities} />

      {cities.length === 0 ? <p>No search result found!</p> : <div>Hey</div>}
    </div>
  );
}

export default App;
