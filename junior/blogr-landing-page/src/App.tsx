import Editor from "./components/Editor";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="min-h-svh lg:min-h-screen">
      <Intro />

      <Editor />
    </div>
  );
}

export default App;
