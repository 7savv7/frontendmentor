import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-transparent flex justify-between items-center">
      <img
        className="relative z-10 md:static"
        src="/images/logo.svg"
        alt="logo"
      />

      <nav
        className={`
            text-grey200 flex items-center overflow-hidden fixed top-0 left-0 bg-black 
            h-full w-full transition-all ${open ? "max-w-full" : "max-w-0"} 
            md:static md:bg-transparent md:max-w-fit md:text-white`}
      >
        <ul className="flex flex-col items-start uppercase gap-8 md:flex-row md:normal-case">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>

      <div className="relative z-10 md:hidden">
        {open ? (
          <img
            onClick={() => setOpen(false)}
            src="images/icon-close.svg"
            alt="close"
          />
        ) : (
          <img
            onClick={() => setOpen(true)}
            src="images/icon-hamburger.svg"
            alt="hamburger"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
