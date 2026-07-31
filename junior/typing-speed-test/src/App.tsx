import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Options from "./components/Options";

function App() {
  const [start, setStart] = useState<boolean>(false);

  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [mode, setMode] = useState<string>("Timed (60s)");
  const [tries, setTries] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  return (
    <div className="wrapper">
      <Header />
      <Options
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        mode={mode}
        setMode={setMode}
        tries={tries}
        correct={correct}
        start={start}
      />
      <Main
        difficulty={difficulty}
        setTries={setTries}
        setCorrect={setCorrect}
        start={start}
        setStart={setStart}
      />
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
