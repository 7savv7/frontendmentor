import Editor from "./components/Editor";
import Intro from "./components/Intro";
import Laptop from "./components/Laptop";
import Phones from "./components/Phones";

function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <Intro />

      <Editor />

      <Phones />

      <Laptop />
    </div>
  );
}

export default App;
