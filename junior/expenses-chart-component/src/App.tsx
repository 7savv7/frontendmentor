function App() {
  return (
    <div className="min-h-svh lg:min-h-screen bg-red-100 p-5 flex justify-center items-center">
      <div className="w-full">
        <div className="bg-red-500 rounded-xl p-5 flex justify-between">
          <div className="text-white flex flex-col justify-between gap-1">
            <p>My balance</p>

            <p className="font-bold text-[1.5em]">$921.48</p>
          </div>

          <img src="/images/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
