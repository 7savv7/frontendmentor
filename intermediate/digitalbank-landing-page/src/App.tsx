import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Pros from "./Components/Pros";

function App() {
  return (
    <div className="min-h-svh md:min-h-screen md:overflow-hidden">
      <Header />

      <Intro />

      <Pros />
    </div>
  );
}

export default App;
