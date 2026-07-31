import { useState } from "react";
import "./Options.css";

function Options() {
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [diffDrop, setDiffDrop] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("Timed (60s)");
  const [modeDrop, setModeDrop] = useState<boolean>(false);
  const data = {
    stats: [
      { label: "WPM", value: "0" },
      { label: "Accuracy", value: "100%" },
      { label: "Time", value: "0:60" },
    ],
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

  return (
    <section>
      <ul className="stats">
        {data.stats.map((stat, i) => (
          <>
            <li key={i}>
              {stat.label}: <span>{stat.value}</span>
            </li>
            {i < data.stats.length - 1 && <div className="separator"></div>}
          </>
        ))}
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
