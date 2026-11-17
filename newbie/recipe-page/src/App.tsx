function App() {
  return (
    <div className="min-h-svh lg:min-h-screen bg-stone-100 flex justify-center items-center lg:p-20">
      <div className="lg:p-6 lg:max-w-1/2 bg-white lg:rounded-2xl">
        <img
          className="w-full lg:rounded-lg lg:mb-5"
          src="/images/image-omelette.jpeg"
          alt="omelette"
        />

        <div className="p-5 flex flex-col gap-5 lg:p-0">
          <h1 className="text-[2em] font-[Young_Serif] text-stone-900">
            Simple Omelette Recipe
          </h1>

          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="bg-rose-50 rounded-xl p-5">
            <p className="text-rose-800 font-semibold mb-2">Preparation time</p>

            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>
                <strong>Total</strong>: Approximately 10 minutes
              </li>
              <li>
                <strong>Preparation</strong>: 5 minutes
              </li>
              <li>
                <strong>Cooking</strong>: 5 minutes
              </li>
            </ul>
          </div>

          <div className="border-b border-stone-150 pb-5">
            <p className="text-brown-800 font-[Young_Serif] mb-2 lg:text-[1.4em]">
              Ingredients
            </p>

            <ul className="list-disc pl-5 flex flex-col gap-1 [&>li::marker]:text-rose-800">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <div className="border-b border-stone-150 pb-5">
            <p className="text-brown-800 font-[Young_Serif] mb-2 lg:text-[1.4em]">
              Instructions
            </p>

            <ol
              className="list-decimal pl-5 flex flex-col gap-1 [&>li]:pl-2
           [&>li::marker]:text-rose-800 [&>li::marker]:font-semibold"
            >
              <li>
                <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <strong>Heat the pan</strong>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <strong>Cook the omelette</strong>: Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <strong>Add fillings (optional)</strong>: When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <strong>Fold and serve</strong>: As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <strong>Enjoy</strong>: Serve hot, with additional salt and
                pepper if needed.
              </li>
            </ol>
          </div>

          <div>
            <p className="text-brown-800 font-[Young_Serif] mb-2 lg:text-[1.4em]">Nutrition</p>

            <p className="mb-2">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table className="w-full border-collapse [&_tr:not(:last-child)]:border-stone-150 [&_tr:not(:last-child)]:border-b">
              <tbody className="[&_td]:p-2 [&_td]:pl-8 [&_strong]:text-rose-800">
                <tr>
                  <td>Calories</td>
                  <td>
                    <strong>277kcal</strong>
                  </td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td>
                    <strong>0g</strong>
                  </td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>
                    <strong>20g</strong>
                  </td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>
                    <strong>22g</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
