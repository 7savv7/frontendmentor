import data from "./data.json";
import Dessert from "./Dessert";

function App() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold">Desserts</h1>
        <section>
          {data.map((dessert) => (
            <Dessert dessert={dessert} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
