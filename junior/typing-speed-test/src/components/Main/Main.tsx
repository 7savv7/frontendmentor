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
  const InputRef = useRef<HTMLInputElement>(null);

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

  const handleStart = () => {
    InputRef.current?.focus();
    setStart(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!start) return;
    setTyped(e.target.value);

    if (e.target.value.length > typed.length) {
      setTries((prev) => prev + 1);
    }
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
      block: "nearest",
      inline: "nearest",
    });
  }, [typed]);

  useEffect(() => {
    const input = InputRef.current;
    if (!input) return;
    const len = input.value.length;
    input.setSelectionRange(len, len);
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

  return (
    <main>
      {!start && (
        <div className="modal">
          <button onClick={handleStart}>Start Typing Test</button>
          <p onClick={handleStart}>Or click the text and start typing</p>
        </div>
      )}

      <div className="text" ref={ref} onClick={() => InputRef.current?.focus()}>
        <input
          className="input-text"
          ref={InputRef}
          value={typed}
          onChange={handleInput}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          inputMode="text"
          name="typing-test-input"
        />
        {challenge.text.split("").map((letter, index) => (
          <span
            key={index}
            className={`${index === typed.length && "current-letter"} 
            ${index < typed.length ? (letter === typed[index] ? "correct-letter" : "wrong-letter") : ""}`}
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
