import "./Header.css";

function Header() {
  return (
    <header>
      <img className="desktop" src="images/logo-large.svg" alt="logo-desktop" />
      <img className="mobile" src="images/logo-small.svg" alt="logo-mobile" />

      <div className="high-score">
        <img src="images/icon-personal-best.svg" alt="personal-best-icon" />

        <p>
          <span className="desktop">Personal</span>{" "}
          <span className="best">best</span>:<span className="score"></span>
        </p>
      </div>
    </header>
  );
}

export default Header;
