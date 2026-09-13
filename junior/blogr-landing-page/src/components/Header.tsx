import { useState } from "react";

function Header() {
  const [drop, setDrop] = useState(false);
  const [subDrop, setSubdrop] = useState(-1);

  const links = [
    {
      title: "Product",
      pages: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      title: "Company",
      pages: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      pages: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <header className="flex items-center justify-between relative border-b p-5">
      <img src="/images/logo.svg" alt="logo" />

      <div
        className={` flex-col items-center text-center absolute top-full p-5 left-[5%] w-[90%] mt-5 rounded-md bg-white
        ${drop ? "flex" : "hidden"} shadow-lg`}
      >
        <nav className="flex flex-col items-center gap-4 w-full text-gray900">
          {links.map((link, index) => (
            <div
              key={link.title}
              className="flex flex-col gap-4 items-center w-full"
            >
              <button
                onClick={() =>
                  setSubdrop((prev) => (prev === index ? -1 : index))
                }
                type="button"
                className={`flex items-center gap-2 font-medium ${subDrop === index && "text-gray600"}`}
              >
                {link.title}
                <svg
                  className={`${subDrop === index && "rotate-180"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                className={`flex flex-col items-center gap-4 rounded-md p-4 bg-gray600/10 w-full
                   text-gray600 font-medium ${subDrop === index ? "flex" : "hidden"}`}
              >
                {link.pages.map((page) => (
                  <li key={page}>
                    <button type="button">{page}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 border-t w-full pt-6 pb-3 mt-6 border-gray600/20 font-medium">
          <button type="button">Login</button>
          <button
            type="button"
            className="bg-linear-to-r from-orange300 to-red550 rounded-full p-3 px-8 text-white"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="cursor-pointer">
        {!drop ? (
          <img
            onClick={() => setDrop(true)}
            src="/images/icon-hamburger.svg"
            alt="hamburger"
          />
        ) : (
          <img
            onClick={() => {
              setDrop(false);
              setSubdrop(-1);
            }}
            src="/images/icon-close.svg"
            alt="close"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
