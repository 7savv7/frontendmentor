import { useEffect, useState } from "react";
import data from "./../../data.json";
import "./Main.css";

interface Props {
  difficulty: string;
}

function Main({ difficulty }: Props) {
  const [start, setStart] = useState<boolean>(false);
  const [challenge, setChallenge] = useState<{ id: string; text: string }>(data.hard[9]);

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
  }, [difficulty]);

  return (
    <main>
      {!start && (
        <div className="modal">
          <button onClick={() => setStart(true)}>Start Typing Test</button>
          <p>Or click the text and start typing</p>
        </div>
      )}

      <div className="text">{challenge.text}</div>

      {start && (
        <div className="restart">
          <button>
            <p>Restart Test</p>

            <img src="images/icon-restart.svg" alt="restart" />
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;
