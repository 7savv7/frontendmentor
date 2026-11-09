function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <img src="/images/image-omelette.jpeg" alt="omelette" />

      <h1>Simple Omelette Recipe</h1>

      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div>
        <p>Preparation time</p>

        <ul>
          <li>Total: Approximately 10 minutes</li>
          <li>Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>

      <div>
        <p>Ingredients</p>

        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
