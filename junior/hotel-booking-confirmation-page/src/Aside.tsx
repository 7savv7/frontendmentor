function Aside() {
  return (
    <aside className="absolute p-4 w-[320px] flex flex-col h-full border-r bg-neutral100">
      <div className="flex justify-between items-center border-b pb-4">
        <img src="/images/logo.svg" alt="logo" />

        <div className="cursor-pointer border rounded-sm p-1">
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
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 py-4">
        <nav>
          <ul
            className="w-full flex flex-col items-center gap-2 [&>li]:w-full [&>li]:flex [&>li]:justify-between 
        [&>li]:items-center [&>.active]:bg-neutral0 [&>li]:p-2 [&>li]:rounded-lg [&>li]:font-semibold
        [&_div:first-child]:flex [&_div:first-child]:items-center [&_div:first-child]:flex-1 [&_div:first-child]:gap-2"
          >
            <li className="active">
              <div>
                <img src="/images/icon-bed.svg" alt="bed" />
                <p>Your stay</p>
              </div>

              <div className="bg-rose500 rounded-full px-1.5">
                <p className="text-[12px]">1</p>
              </div>
            </li>
            <li>
              <div>
                <img src="/images/icon-house.svg" alt="house" />
                <p>The house</p>
              </div>
            </li>
            <li>
              <div>
                <img src="/images/icon-pin.svg" alt="pin" />
                <p>Around town</p>
              </div>
            </li>
            <li>
              <div>
                <img src="/images/icon-breakfast-outline.svg" alt="breakfast" />
                <p>Breakfast</p>
              </div>
            </li>
            <li>
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
          <p>Today in Cassis</p>

          <p>27°</p>
          <p>Sunny · light breeze</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-dashed pt-4">
        <p>Est. 1987</p>
        <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
        <p>© 2026 Maison Soleil</p>
      </div>
    </aside>
  );
}

export default Aside;
