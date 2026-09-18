import Editor from "./components/Editor";
import Intro from "./components/Intro";
import Phones from "./components/Phones";

function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <Intro />

      <Editor />

      <Phones />
    </div>
  );
}

export default App;
