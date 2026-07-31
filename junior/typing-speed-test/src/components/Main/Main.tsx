import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import data from "./../../data.json";
import "./Main.css";

interface Props {
  difficulty: string;
  setTries: Dispatch<SetStateAction<number>>;
  setCorrect: (val: number) => void;
  start: boolean;
  setStart: (val: boolean) => void;
  setFinished: (val: boolean) => void;
  setChars: (val: number) => void;
}

interface Data {
  id: string;
  text: string;
}

function Main({
  difficulty,
  setTries,
  setCorrect,
  start,
  setStart,
  setFinished,
  setChars,
}: Props) {
  const [challenge, setChallenge] = useState<Data>(data.hard[9]);
  const [typed, setTyped] = useState<string>("");

  const ref = useRef<HTMLDivElement>(null);

  const handleRestart = () => {
    setStart(false);
    setTyped("");
  };

  const correctLetters = (): number => {
    let correct: number = 0;
    for (let i = 0; i < challenge.text.length; i++) {
      if (challenge.text[i] === typed[i]) correct++;
    }

    return correct;
  };

  useEffect(() => {
    if (start) {
      setTries(0);
      setCorrect(0);
    }
  }, [start]);

  useEffect(() => {
    if (start) setCorrect(correctLetters());
    if (typed.length >= challenge.text.length) {
      setStart(false);
      setFinished(true);
    }

    if (!ref.current) return;

    const current = ref.current.querySelector(".current-letter");
    if (!current) return;

    current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [typed]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);

    switch (difficulty) {
      case "Easy":
        setChallenge(data.easy[random]);
        break;
      case "Medium":
        setChallenge(data.medium[random]);
        break;
      case "Hard":
        setChallenge(data.hard[random]);
        break;
    }

    setTyped("");
  }, [difficulty, start]);

  useEffect(() => {
    setChars(challenge.text.length);
  }, [challenge]);

  useEffect(() => {
    if (!start) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setTyped((prev) => prev.slice(0, -1));
      }

      if (e.key.length === 1) {
        setTyped((prev) => prev + e.key);
        setTries((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [start]);

  return (
    <main>
      {!start && (
        <div className="modal">
          <button onClick={() => setStart(true)}>Start Typing Test</button>
          <p onClick={() => setStart(true)}>
            Or click the text and start typing
          </p>
        </div>
      )}

      <div className="text" ref={ref}>
        {challenge.text.split("").map((letter, index) => (
          <span
            key={index}
            className={`${index == typed.length && "current-letter"} 
            ${index < typed.length ? (letter == typed[index] ? "correct-letter" : "wrong-letter") : ""}`}
          >
            {letter}
          </span>
        ))}
      </div>

      {start && (
        <div className="restart">
          <button onClick={handleRestart}>
            <p>Restart Test</p>

            <img src="images/icon-restart.svg" alt="restart" />
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;
