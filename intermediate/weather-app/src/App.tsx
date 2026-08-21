import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [unit, setUnit] = useState<"Imperial" | "Metric">("Imperial");

  return (
    <div className="min-h-svh p-5 md:min-h-screen">
      <Header unit={unit} setUnit={setUnit} />

      <Search />
    </div>
  );
}

export default App;
