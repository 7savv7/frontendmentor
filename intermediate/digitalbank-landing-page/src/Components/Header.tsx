import { useState } from "react";

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="relative bg-white flex justify-center">
      <div className="flex justify-between items-center p-5 w-full md:p-0 md:w-[100%] md:px-5 lg:w-[80%]">
        <img className="md:my-5" src="/images/logo-dark.svg" alt="logo-dark" />

        <nav
          className={`absolute top-full left-0 w-full p-5 ${open ? "flex" : "hidden"} items-center justify-center 
          md:flex md:static md:w-fit md:p-0 md:h-full`}
        >
          <ul
            className="flex flex-col items-center gap-2 text-blue950 w-full p-5 rounded-md shadow-2xl 
            md:flex-row md:h-full md:shadow-none md:p-0 md:gap-8 md:text-gray600 
            [&>li]:cursor-pointer [&>li]:hover:text-blue950 md:[&>li]:border-b md:[&>li]:border-transparent 
            md:[&>li]:border-b-4 md:[&>li]:h-full md:[&>li]:flex md:[&>li]:items-center md:[&>li]:hover:border-green500"
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>

        <button
          type="button"
          className="my-5 cursor-pointer hidden text-white text-[16px] font-semibold rounded-full px-8 py-3 
          bg-linear-to-tr from-cyan400 to-green500 md:block hover:opacity-60"
        >
          Request Invite
        </button>

        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex md:hidden"
        >
          {open ? (
            <img src="/images/icon-close.svg" alt="hamburger" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="hamburger" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
