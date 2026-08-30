import type { Dispatch, SetStateAction } from "react";
import type { Info } from "../App";

interface Props {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
  errors: Record<string, string>;
}

function Step1({ info, setInfo, errors }: Props) {
  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Personal info</h1>
      <p className="mt-2 text-grey500">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col item-start">
          <div className="flex items-center justify-between">
            <label htmlFor="name">Name</label>

            {errors.name && (
              <p className="text-red500 font-[700] text-[0.9em]">
                {errors.name}
              </p>
            )}
          </div>

          <input
            className={`border ${errors.name ? "border-red500" : "border-grey500"} 
            text-blue950 font-[500] p-2 px-4 rounded-sm outline-none`}
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
          <div className="flex items-center justify-between">
            <label htmlFor="email">Email Address</label>

            {errors.email && (
              <p className="text-red500 font-[700] text-[0.9em]">
                {errors.email}
              </p>
            )}
          </div>

          <input
            className={`border ${errors.email ? "border-red500" : "border-grey500"} 
            text-blue950 font-[500] p-2 px-4 rounded-sm outline-none`}
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
          <div className="flex items-center justify-between">
            <label htmlFor="phone">Phone Number</label>

            {errors.phone && (
              <p className="text-red500 font-[700] text-[0.9em]">
                {errors.phone}
              </p>
            )}
          </div>

          <input
            className={`border ${errors.phone ? "border-red500" : "border-grey500"} 
            text-blue950 font-[500] p-2 px-4 rounded-sm outline-none`}
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
