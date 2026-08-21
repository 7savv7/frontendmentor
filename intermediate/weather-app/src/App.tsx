import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [unit, setUnit] = useState<"Imperial" | "Metric">("Imperial");

  return (
    <div className="min-h-svh p-5 md:min-h-screen">
      <Header unit={unit} setUnit={setUnit} />
    </div>
  );
}

export default App;
