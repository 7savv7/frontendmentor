function Step3() {
  return (
    <div className="text-blue950">
      <h1 className="text-[1.5em] font-bold">Pick add-ons</h1>
      <p className="mt-2 text-grey500">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 border border-grey500 rounded-lg p-3 py-2">
          <div className="flex items-center gap-2">
            <label className="flex items-center w-5 h-5 mx-1 gap-2 cursor-pointer">
              <input type="checkbox" className="peer hidden" />

              <div
                className="w-full h-full rounded border border-grey500 
                peer-checked:bg-purple600 peer-checked:border-transparent
                flex items-center justify-center transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="m1 4 3.433 3.433L10.866 1"
                  />
                </svg>
              </div>
            </label>

            <div>
              <p className="font-[500]">Online service</p>
              <p className="text-[0.9em] text-grey500">
                Access to multiplayer games
              </p>
            </div>
          </div>

          <p className="text-[0.9em] text-purple600">+$1/mo</p>
        </div>

        <div className="flex items-center justify-between gap-2 border border-grey500 rounded-lg p-3 py-2">
          <div className="flex items-center gap-2">
            <label className="flex items-center w-5 h-5 mx-1 gap-2 cursor-pointer">
              <input type="checkbox" className="peer hidden" />

              <div
                className="w-full h-full rounded border border-grey500 
                peer-checked:bg-purple600 peer-checked:border-transparent
                flex items-center justify-center transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="m1 4 3.433 3.433L10.866 1"
                  />
                </svg>
              </div>
            </label>

            <div>
              <p className="font-[500]">Larger storage</p>
              <p className="text-[0.9em] text-grey500">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>

          <p className="text-[0.9em] text-purple600">+$2/mo</p>
        </div>

        <div className="flex items-center justify-between gap-2 border border-grey500 rounded-lg p-3 py-2">
          <div className="flex items-center gap-2">
            <label className="flex items-center w-5 h-5 mx-1 gap-2 cursor-pointer">
              <input type="checkbox" className="peer hidden" />

              <div
                className="w-full h-full rounded border border-grey500 
                peer-checked:bg-purple600 peer-checked:border-transparent
                flex items-center justify-center transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="m1 4 3.433 3.433L10.866 1"
                  />
                </svg>
              </div>
            </label>

            <div>
              <p className="font-[500]">Customizable Profile</p>
              <p className="text-[0.9em] text-grey500">
                Custom theme on your profile
              </p>
            </div>
          </div>

          <p className="text-[0.9em] text-purple600">+$2/mo</p>
        </div>
      </div>
    </div>
  );
}

export default Step3;
