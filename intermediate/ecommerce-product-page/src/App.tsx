import { useState } from "react";
import Header from "./components/Header";
import ImageSlide from "./components/ImageSlide";
import Info from "./components/Info";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div className="min-h-svh lg:min-h-screen lg:px-40">
      <Header cartQuantity={cart} setCartQuantity={setCart} />

      <div className="flex flex-col lg:flex-row lg:p-10 lg:py-20 lg:gap-20">
        <ImageSlide />

        <Info setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
