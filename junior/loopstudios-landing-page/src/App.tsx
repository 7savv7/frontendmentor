import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="min-h-svh md:min-h-screen">
      <Intro />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
