import "./Header.css";

function Header({ highScore }: { highScore: string }) {
  return (
    <header>
      <img className="desktop" src="images/logo-large.svg" alt="logo-desktop" />
      <img className="mobile" src="images/logo-small.svg" alt="logo-mobile" />

      <div className="high-score">
        <img src="images/icon-personal-best.svg" alt="personal-best-icon" />

        <p>
          <span className="desktop">Personal</span>{" "}
          <span className="best">Best</span>:{" "}
          <span className="wpm">{highScore} WPM</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
