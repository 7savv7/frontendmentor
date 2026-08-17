import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Pros from "./Components/Pros";

function App() {
  return (
    <div className="min-h-svh md:min-h-screen md:overflow-hidden">
      <Header />

      <Intro />

      <Pros />

      <Articles />

      <Footer />
    </div>
  );
}

export default App;
