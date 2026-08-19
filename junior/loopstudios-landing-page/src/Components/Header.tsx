import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-transparent flex justify-between items-center">
      <img
        className={`${open ? "fixed top-10" : "relative"} z-10 md:static`}
        src="/images/logo.svg"
        alt="logo"
      />

      <nav
        className={`
            text-grey200 text-[2rem] flex items-center overflow-hidden fixed top-0 left-0 bg-black 
            h-full w-full transition-all ${open ? "max-w-full" : "max-w-0"} 
            md:static md:bg-transparent md:max-w-fit md:text-white md:text-[1rem]`}
      >
        <ul
          className="flex flex-col items-start pl-10 uppercase gap-8 md:flex-row md:normal-case md:pl-0
          [&>li]:cursor-pointer [&>li:after]:content-[''] [&>li:after]:h-[2px] [&>li:after]:m-auto 
          [&>li:after]:bg-white [&>li:after]:block [&>li:after]:max-w-0 [&>li:hover:after]:max-w-[60%] 
          [&>li:after]:mt-2 [&>li:after]:transition-all"
        >
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>

      <div
        className={`flex justify-center items-center ${open ? "fixed top-10 right-10" : "relative"} z-10 md:hidden`}
      >
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
