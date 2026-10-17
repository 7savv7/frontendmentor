function App() {
  return (
    <div className="min-h-svh lg:min-h-screen bg-pale-blue flex justify-center items-center flex-col">
      <div className="w-full h-full flex-1 bg-white lg:h-fit lg:w-fit lg:flex-none">
        <div className="text-center bg-light-slate-blue text-white rounded-bl-3xl rounded-br-3xl p-5">
          <p>Your Result</p>

          <div>
            <p>76</p>
            <p>of 100</p>
          </div>

          <p>Great</p>

          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
