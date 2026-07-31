import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Completed.css";

interface Props {
  wpm: number;
  accuracy: number;
  correct: number;
  chars: number;
  setFinished: (val: boolean) => void;
  setHighScore: (val: string) => void;
}

function Completed({
  wpm,
  accuracy,
  correct,
  chars,
  setFinished,
  setHighScore,
}: Props) {
  const highScore = Number(localStorage.getItem("high-score")) ?? 0;
  const isFirstAttempt = !Boolean(localStorage.getItem("isFirstAttempt"));
  const isNewHighScore = wpm > highScore;

  useEffect(() => {
    if (isFirstAttempt) localStorage.setItem("isFirstAttempt", "false");
    if (isNewHighScore) {
      localStorage.setItem("high-score", String(wpm));
      setHighScore(String(wpm));
    }
  }, []);

  return (
    <main className="finished">
      {isNewHighScore && !isFirstAttempt ? (
        <img className="high" src="images/icon-new-pb.svg" alt="high-score" />
      ) : (
        <div className="comp-1">
          <div className="comp-2">
            <img
              className="completed"
              src="images/icon-completed.svg"
              alt="completed"
            />
          </div>
        </div>
      )}

      <h1>
        {isFirstAttempt
          ? "Baseline Established!"
          : isNewHighScore
            ? "High Score Smashed!"
            : "Test Complete!"}
      </h1>

      <p>
        {isFirstAttempt
          ? "You've set the bar. Now the real challenge begins-time to beat it."
          : isNewHighScore
            ? "You're getting faster. That was incredible typing."
            : "Solid run. Keep pushing to beat your high score."}
      </p>

      <div className="final-stats">
        <div>
          WPM: <span>{wpm}</span>
        </div>
        <div>
          Accuracy: <span className="acc">{accuracy}%</span>
        </div>
        <div>
          Characters:{" "}
          <span className="chars">
            <span className="chars-green">{correct}</span>/
            <span className="chars-red">{chars - correct}</span>
          </span>
        </div>
      </div>

      <button className="retry" onClick={() => setFinished(false)}>
        <p>Beat This Score</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="hsl(0, 0%, 7%)"
            d="M1.563 1.281h.949c.246 0 .422.211.422.457l-.07 3.446a8.6 8.6 0 0 1 7.277-3.868c4.816 0 8.718 3.938 8.718 8.72-.035 4.816-3.937 8.683-8.718 8.683a8.86 8.86 0 0 1-5.871-2.215.446.446 0 0 1 0-.633l.703-.703c.14-.14.386-.14.562 0 1.23 1.09 2.813 1.723 4.606 1.723A6.88 6.88 0 0 0 17.03 10c0-3.797-3.093-6.89-6.89-6.89-2.813 0-5.203 1.687-6.293 4.078l4.43-.106c.245 0 .456.176.456.422v.95c0 .245-.21.421-.421.421h-6.75a.406.406 0 0 1-.422-.422v-6.75c0-.21.175-.422.422-.422"
          />
        </svg>
      </button>

      <Background highScore={isNewHighScore} />
    </main>
  );
}

function Background({ highScore }: { highScore: boolean }) {
  return createPortal(
    <div className={`background ${highScore ? "confetti" : "rest"}`}></div>,
    document.body,
  );
}

export default Completed;
