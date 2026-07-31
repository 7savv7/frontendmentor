import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import "./Options.css";

interface Props {
  difficulty: string;
  setDifficulty: (val: string) => void;
  mode: string;
  setMode: (val: string) => void;
  accuracy: number;
  correct: number;
  start: boolean;
  wpm: number;
  setWpm: Dispatch<SetStateAction<number>>;
  setStart: (val: boolean) => void;
  setFinished: (val: boolean) => void;
}

function Options({
  difficulty,
  setDifficulty,
  mode,
  setMode,
  accuracy,
  correct,
  start,
  wpm,
  setWpm,
  setStart,
  setFinished,
}: Props) {
  const [diffDrop, setDiffDrop] = useState<boolean>(false);
  const [modeDrop, setModeDrop] = useState<boolean>(false);
  const [time, setTime] = useState<number>(mode === "Passage" ? 0 : 60);
  const data = {
    difficulties: ["Easy", "Medium", "Hard"],
    modes: ["Timed (60s)", "Passage"],
  };

  const handleDiff = (diff: string) => {
    setDifficulty(diff);
    setDiffDrop(false);
  };

  const handleMode = (mode: string) => {
    setMode(mode);
    setModeDrop(false);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!start) return;

    setTime(mode === "Passage" ? 0 : 60);

    const interval = setInterval(() => {
      setTime((prev) => {
        if (mode === "Passage") return prev + 1;
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [start, mode]);

  useEffect(() => {
    if (!start) return;

    if (mode === "Passage") {
      setWpm(time === 0 ? 0 : Math.floor((correct / 5) * (60 / time)));
    } else {
      const elapsed = 60 - time;
      setWpm(elapsed === 0 ? 0 : Math.floor((correct / 5) * (60 / elapsed)));
    }
  }, [time, correct, mode, start]);

  useEffect(() => {
    if (mode !== "Passage" && time <= 0) {
      setStart(false);
      setFinished(true);
    }
  }, [time, mode]);

  return (
    <section>
      <ul className="stats">
        <li>
          WPM: <span>{wpm}</span>
        </li>
        <div className="separator"></div>
        <li>
          Accuracy:{" "}
          <span className={`${accuracy > 0 ? "red" : ""}`}>{accuracy}%</span>
        </li>
        <div className="separator"></div>
        <li>
          Time:{" "}
          <span className={`${start ? "yellow" : ""}`}>{formatTime(time)}</span>
        </li>
      </ul>

      <div className="opts">
        <p className="label">Difficulty:</p>
        <div className="drop-down">
          <div className="cur-diff" onClick={() => setDiffDrop(!diffDrop)}>
            <p>{difficulty}</p>
            <img src="images/icon-down-arrow.svg" alt="arrow-down" />
          </div>

          <div className={`opt opt-diff ${diffDrop ? "opt-diff-open" : ""}`}>
            {data.difficulties.map((diff, i) => (
              <div
                key={i}
                className={`diff-desk ${diff === difficulty ? "diff-desk-selected" : ""}`}
                onClick={() => handleDiff(diff)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleDiff(diff);
                }}
              >
                <div className={`radio ${diff === difficulty ? "filled" : ""}`}>
                  <div className="inner"></div>
                </div>
                <p>{diff}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="opts-separator separator"></div>

        <p className="label">Mode:</p>
        <div className="drop-down">
          <div className="cur-mode" onClick={() => setModeDrop(!modeDrop)}>
            <p>{mode}</p>
            <img src="images/icon-down-arrow.svg" alt="arrow-down" />
          </div>

          <div className={`opt opt-mode ${modeDrop ? "opt-mode-open" : ""}`}>
            {data.modes.map((m, i) => (
              <div
                key={i}
                className={`mode-desk ${m === mode ? "mode-desk-selected" : ""}`}
                onClick={() => handleMode(m)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleMode(m);
                }}
              >
                <div className={`radio ${m === mode ? "filled" : ""}`}>
                  <div className="inner"></div>
                </div>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;
