import Header from "./components/Header";
import ImageSlide from "./components/ImageSlide";
import Info from "./components/Info";

function App() {
  return (
    <div className="min-h-svh lg:min-h-screen lg:px-25">
      <Header />

      <div className="flex flex-col lg:flex-row lg:p-10 lg:py-20 lg:gap-20">
        <ImageSlide />

        <Info />
      </div>
    </div>
  );
}

export default App;
