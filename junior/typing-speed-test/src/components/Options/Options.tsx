import { useState } from "react";
import "./Options.css";

interface Props {
  difficulty: string;
  setDifficulty: (val: string) => void;
  mode: string;
  setMode: (val: string) => void;
}

function Options({ difficulty, setDifficulty, mode, setMode }: Props) {
  const [diffDrop, setDiffDrop] = useState<boolean>(false);
  const [modeDrop, setModeDrop] = useState<boolean>(false);
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

  return (
    <section>
      <ul className="stats">
        <li>
          WPM: <span>0</span>
        </li>
        <div className="separator"></div>
        <li>
          Accuracy: <span>100%</span>
        </li>
        <div className="separator"></div>
        <li>
          Time: <span>0:60</span>
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
