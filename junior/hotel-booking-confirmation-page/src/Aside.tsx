import { useEffect, useState } from "react";

function Aside() {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [open]);

  return (
    <aside
      className={`w-full bg-neutral100 ${open ? "p-4" : "p-0"} flex flex-col h-full 
      border-r border-neutral400 md:w-[320px] md:static md:min-h-screen md:p-4`}
    >
      <div
        className={`flex justify-between items-center border-b border-neutral400 ${open ? "pb-4" : "p-4"} md:pb-4 md:p-0`}
      >
        <img src="/images/logo.svg" alt="logo" />

        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer border border-neutral400 rounded-sm p-1 md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#2b2620"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                d="m5 5 10 10m0-10L5 15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#2b2620"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                d="M3.333 15.833h13.334M3.333 4.167h13.334M3.333 10h13.334"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`absolute flex left-0 bottom-0 bg-neutral100 px-4 top-19 md:px-0 md:static 
        overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-full" : "max-h-0"} 
        flex-col md:flex-1 w-full md:flex md:max-h-full md:overflow-visible`}
      >
        <div className="flex flex-col justify-between flex-1 py-4">
          <nav>
            <ul
              className="w-full flex flex-col items-center gap-2 [&>li]:w-full [&>li]:flex [&>li]:justify-between 
        [&>li]:items-center [&>.active]:bg-neutral0 [&>.active]:text-neutral900 [&>li]:p-2 [&>li]:rounded-lg 
        [&>li]:font-[500] [&>li]:text-neutral700 [&_div:first-child]:flex [&_div:first-child]:items-center 
        [&_div:first-child]:flex-1 [&_div:first-child]:gap-2 [&>li]:hover:bg-neutral0 [&>li]:cursor-pointer
        [&>li]:focus-visible:outline-terracotta600 [&>li]:focus-visible:bg-neutral0 [&>li]:focus-visible:outline-offset-4"
            >
              <li tabIndex={0} className="active">
                <div>
                  <img src="/images/icon-bed.svg" alt="bed" />
                  <p>Your stay</p>
                </div>

                <div className="bg-terracotta600 rounded-full px-1.5">
                  <p className="text-[10px] text-neutral0">1</p>
                </div>
              </li>
              <li tabIndex={0}>
                <div>
                  <img src="/images/icon-house.svg" alt="house" />
                  <p>The house</p>
                </div>
              </li>
              <li tabIndex={0}>
                <div>
                  <img src="/images/icon-pin.svg" alt="pin" />
                  <p>Around town</p>
                </div>
              </li>
              <li tabIndex={0}>
                <div>
                  <img
                    src="/images/icon-breakfast-outline.svg"
                    alt="breakfast"
                  />
                  <p>Breakfast</p>
                </div>
              </li>
              <li tabIndex={0}>
                <div>
                  <img src="/images/icon-mail.svg" alt="mail" />
                  <p>Messages</p>
                </div>
              </li>
            </ul>
          </nav>

          <div className="relative w-full rounded-xl bg-sun300 p-3 overflow-hidden">
            <img
              className="absolute top-[-30px] right-[-10px] w-[80px] h-[80px]"
              src="/images/icon-weather.svg"
              alt="weather"
            />
            <p className="uppercase text-[0.7em] text-neutral800 tracking-wider">
              Today in Cassis
            </p>

            <p className="font-[Fraunces] text-[2em] text-neutral900">27°</p>
            <p className="text-neutral700">Sunny · light breeze</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 uppercase text-[14px] text-neutral700 border-t border-neutral400 
        border-dashed pt-4"
        >
          <p>Est. 1987</p>
          <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
          <p>© 2026 Maison Soleil</p>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
