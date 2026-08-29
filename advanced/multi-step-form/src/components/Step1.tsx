import type { Dispatch, SetStateAction } from "react";
import type { Info } from "../App";

interface Props {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
}

function Step1({ info, setInfo }: Props) {
  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Personal info</h1>
      <p className="mt-2 text-grey500">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col item-start">
          <label htmlFor="name">Name</label>
          <input
            className="border border-grey500 text-grey500 font-[500] p-2 px-4 rounded-sm outline-none"
            id="name"
            value={info.name}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="flex flex-col item-start">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-grey500 text-grey500 font-[500] p-2 px-4 rounded-sm outline-none"
            id="email"
            value={info.email}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="flex flex-col item-start">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="border border-grey500 text-grey500 font-[500] p-2 px-4 rounded-sm outline-none"
            id="phone"
            value={info.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/[^\d+\s()-]/g, "");
              setInfo((prev) => ({ ...prev, phone: value }));
            }}
            type="tel"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
}

export default Step1;
