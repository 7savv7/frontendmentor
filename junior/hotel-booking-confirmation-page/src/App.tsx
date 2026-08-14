import Aside from "./Aside";

function App() {
  return (
    <div className="flex flex-col min-h-svh md:min-h-screen md:flex-row">
      <Aside />
      <div>Hey</div>
    </div>
  );
}

export default App;
