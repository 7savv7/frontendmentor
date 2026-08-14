import Arrival from "./Arrival";
import Aside from "./Aside";
import Breakfast from "./Breakfast";
import Header from "./Header";
import Ticket from "./Ticket";
import Wifi from "./Wifi";

function App() {
  return (
    <div className="flex flex-col min-h-svh md:min-h-screen md:flex-row">
      <Aside />

      <main className="flex flex-col w-full bg-neutral100 p-5">
        <Header />

        <Ticket />

        <div className="flex mt-2 flex-col gap-5 md:flex-row">
          <Arrival />
          <Wifi />
          <Breakfast />
        </div>
      </main>
    </div>
  );
}

export default App;
