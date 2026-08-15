import Left from "./Left";
import Right from "./Right";

function Ticket() {
  return (
    <div className="group py-14 flex flex-col-reverse items-center md:flex-row md:justify-center gap-5 md:flex-1">
      <Left />

      <div className="hidden flex-col h-full items-center justify-between md:flex">
        <div className="cursor-pointer flex-1 flex item-center">
          <img src="/images/illustration-sun.svg" alt="sun" />
        </div>

        <div className="flex items-center gap-2 relative top-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              fill="#b7411b"
              d="M3.64 7.68q-.11-.65-.58-1.4-.47-.76-1.34-1.41Q.86 4.22 0 4.04v-.42a4.8 4.8 0 0 0 1.63-.74 5.2 5.2 0 0 0 1.32-1.32Q3.49.77 3.64 0h.42q.09.5.36 1.03.27.52.69 1 .43.47.96.85.79.56 1.61.74v.42a3.8 3.8 0 0 0-1.14.45 6 6 0 0 0-1.08.81 4.8 4.8 0 0 0-.82.97q-.47.75-.58 1.41z"
            />
          </svg>
          <p className="uppercase text-[14px] text-neutral700">Hover to fan</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              fill="#b7411b"
              d="M3.64 7.68q-.11-.65-.58-1.4-.47-.76-1.34-1.41Q.86 4.22 0 4.04v-.42a4.8 4.8 0 0 0 1.63-.74 5.2 5.2 0 0 0 1.32-1.32Q3.49.77 3.64 0h.42q.09.5.36 1.03.27.52.69 1 .43.47.96.85.79.56 1.61.74v.42a3.8 3.8 0 0 0-1.14.45 6 6 0 0 0-1.08.81 4.8 4.8 0 0 0-.82.97q-.47.75-.58 1.41z"
            />
          </svg>
        </div>
      </div>

      <Right />
    </div>
  );
}

export default Ticket;
