import Aside from "./Aside";
import Header from "./Header";

function App() {
  return (
    <div className="flex flex-col min-h-svh md:min-h-screen md:flex-row">
      <Aside />

      <main className="w-full bg-neutral100 p-5">
        <Header />
      </main>
    </div>
  );
}

export default App;
