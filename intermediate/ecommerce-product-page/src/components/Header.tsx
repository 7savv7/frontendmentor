import { useState } from "react";

function Header() {
  const [side, setSide] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);

  const openSideBar = () => {
    setSide(true);
    setTimeout(() => {
      setAnimation(true);
    }, 0);
  };

  const closeSideBar = () => {
    setAnimation(false);
    setTimeout(() => {
      setSide(false);
    }, 300);
  };

  return (
    <header className="relative flex items-center justify-between p-5 lg:border-b lg:p-0 lg:border-gblue/50">
      <div className="flex items-center gap-5 lg:gap-10">
        <img
          onClick={openSideBar}
          className="lg:hidden"
          src="/images/icon-menu.svg"
          alt="menu"
        />
        <img src="/images/logo.svg" alt="logo" />

        <nav
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeSideBar();
            }
          }}
          className={`fixed z-10 top-0 left-0 h-full w-full transition-all duration-[0.3s] 
            ${side ? "flex" : "hidden"} ${animation ? "bg-black/75" : "bg-transparent"} 
            lg:flex lg:static lg:w-fit lg:bg-transparent`}
        >
          <ul
            className={`bg-white h-full overflow-hidden w-[60%] flex flex-col gap-5 [&>li]:font-bold
            transition-all duration-[0.3s] ${animation ? "max-w-[60%] p-6" : "max-w-0 p-0"}
            lg:max-w-fit lg:w-fit lg:flex-row lg:items-center lg:[&>li]:font-normal lg:text-dgblue
            lg:[&>li]:cursor-pointer lg:[&>li]:h-full lg:[&>li]:py-8 lg:[&>li]:border-b-4 
            lg:[&>li]:border-transparent lg:[&>li:hover]:border-orange lg:[&>li:hover]:text-black`}
          >
            <img
              onClick={closeSideBar}
              className="w-[14px] h-[15px] mb-6 lg:hidden"
              src="/images/icon-close.svg"
              alt="close"
            />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5 lg:gap-8">
        <div className="lg:relative">
          <div onClick={() => setCart((prev) => !prev)}>
            <img src="/images/icon-cart.svg" alt="cart" />
            <div>
              <p></p>
            </div>
          </div>

          {cart && (
            <div className="absolute top-[100%] p-2 w-full right-0 bg-transparent lg:w-100">
              <div className="bg-white rounded-xl shadow-xl">
                <div className="p-4 border-b border-gblue/80">
                  <p className="font-bold">Cart</p>
                </div>

                <div className="p-4">
                  <p className="w-full my-20 text-center text-dgblue font-bold">
                    Your cart is empty.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <img
          className="cursor-pointer border-2 border-transparent w-8 h-8 rounded-full 
          lg:w-12 lg:h-12 hover:border-orange"
          src="/images/image-avatar.png"
          alt="avatar"
        />
      </div>
    </header>
  );
}

export default Header;
