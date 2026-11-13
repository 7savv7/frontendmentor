function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <img
        className="w-full"
        src="/images/image-omelette.jpeg"
        alt="omelette"
      />

      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-[2em] font-[Young_Serif] text-stone-900">Simple Omelette Recipe</h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-rose-50 rounded-xl p-5">
          <p className="text-rose-800">Preparation time</p>

          <ul className="list-disc pl-5">
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
          </ul>
        </div>

        <div className="border-b pb-5">
          <p className="text-brown-800 font-[Young_Serif]">Ingredients</p>

          <ul className="list-disc pl-5">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div className="border-b pb-5">
          <p className="text-brown-800 font-[Young_Serif]">Instructions</p>

          <ol className="list-decimal pl-5 [&>li]:pl-2">
            <li>
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        <div>
          <p className="text-brown-800 font-[Young_Serif]">Nutrition</p>

          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="w-full border-collapse [&_tr:not(:last-child)]:border-b">
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
