function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <div>
        <div>
          <h1>Mortgage Calculator</h1>
          <button type="button">Clear All</button>
        </div>

        <div>
          <label htmlFor="">Mortgage Amount</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Mortgage Term</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Interest Rate</label>
          <input type="text" />
        </div>

        <div>
          <p>Mortgage Type</p>

          <input type="radio" value="Repayment" name="type" />
          <input type="radio" value="Interest Only" name="type" />
        </div>

        <button type="button">Calculate Repayments</button>
      </div>
    </div>
  );
}

export default App;
