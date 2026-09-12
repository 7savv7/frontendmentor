import { useState } from "react";

function Header() {
  const [drop, setDrop] = useState(false);
  return (
    <header className="flex items-center justify-between relative border-b p-5">
      <img src="/images/logo.svg" alt="logo" />

      <div
        className={` flex-col items-center text-center absolute top-full p-5 left-[5%] w-[90%] mt-5 rounded-md bg-white
        ${drop ? "flex" : "hidden"} shadow-lg`}
      >
        <nav className="flex flex-col items-center">
          <div>
            <button type="button">Product</button>

            <ul className="hidden">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <button type="button">Company</button>

            <ul className="hidden">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <button type="button">Connect</button>

            <ul className="hidden">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-col items-center">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      <div>
        {!drop ? (
          <img
            onClick={() => setDrop(true)}
            src="/images/icon-hamburger.svg"
            alt="hamburger"
          />
        ) : (
          <img
            onClick={() => setDrop(false)}
            src="/images/icon-close.svg"
            alt="close"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
