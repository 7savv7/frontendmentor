import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Options from "./components/Options";
import Completed from "./components/Completed";

function App() {
  const [start, setStart] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<string>(
    localStorage.getItem("high-score") ?? "0",
  );

  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [mode, setMode] = useState<string>("Timed (60s)");
  const [tries, setTries] = useState<number>(0);

  const [correct, setCorrect] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [chars, setChars] = useState<number>(0);

  useEffect(() => {
    setAccuracy(tries > 0 ? Math.floor((correct / tries) * 100) : 0);
  }, [tries, correct]);

  return (
    <div className="wrapper">
      <Header highScore={highScore} />
      {!finished ? (
        <>
          <Options
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            mode={mode}
            setMode={setMode}
            accuracy={accuracy}
            correct={correct}
            start={start}
            wpm={wpm}
            setWpm={setWpm}
            setStart={setStart}
            setFinished={setFinished}
          />
          <Main
            difficulty={difficulty}
            setTries={setTries}
            setCorrect={setCorrect}
            start={start}
            setStart={setStart}
            setFinished={setFinished}
            setChars={setChars}
          />
        </>
      ) : (
        <Completed
          wpm={wpm}
          accuracy={accuracy}
          correct={correct}
          chars={chars}
          setFinished={setFinished}
          setHighScore={setHighScore}
        />
      )}
    </div>
  );
}

export default App;
