import { useState } from "react";
import data from "./data.json";
import Dessert from "./Dessert";

export interface Des {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

function App() {
  const [cart, setCart] = useState<(Des & { quantity: number })[]>([]);

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold mb-5">Desserts</h1>

        <section className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-3">
          {data.map((dessert) => (
            <Dessert
              key={dessert.name}
              dessert={dessert}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
