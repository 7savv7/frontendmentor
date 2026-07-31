import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Options from "./components/Options";

function App() {
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [mode, setMode] = useState<string>("Timed (60s)");

  return (
    <div className="wrapper">
      <Header />
      <Options
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        mode={mode}
        setMode={setMode}
      />
      <Main difficulty={difficulty} />
    </div>
  );
}

export default App;

/*
  <!-- Passage -->

  <!-- Test Complete Start -->

  Test Complete!
  Solid run. Keep pushing to beat your high score.

  WPM: <!-- WPM -->
  Accuracy: <!-- Accuracy -->
  Characters: <!-- Correct/Incorrect -->

  Go Again
  
  <!-- Test Complete End --> */
