import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
}

function Header({ cartQuantity, setCartQuantity }: Props) {
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
          <div
            onClick={() => setCart((prev) => !prev)}
            className="group cursor-pointer relative"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:fill-black"
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>

            {cartQuantity > 0 && (
              <div
                className="absolute bottom-full bg-orange rounded-xl text-white text-[0.6em] 
                px-[6px] font-bold -mb-2 ml-2"
              >
                <p>{cartQuantity}</p>
              </div>
            )}
          </div>

          {cart && (
            <div
              className="absolute z-8 top-[100%] p-2 w-full right-0 bg-transparent 
            lg:w-90 lg:left-1/5 lg:-translate-x-1/2 lg:mt-2"
            >
              <div className="bg-white rounded-xl shadow-xl">
                <div className="p-4 border-b border-gblue/80">
                  <p className="font-bold">Cart</p>
                </div>

                <div className="p-4">
                  {cartQuantity === 0 ? (
                    <p className="w-full my-20 text-center text-dgblue font-bold">
                      Your cart is empty.
                    </p>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            className="h-12 rounded-md"
                            src="/images/image-product-1-thumbnail.jpg"
                            alt="product"
                          />

                          <div className="flex flex-col justify-between text-dgblue">
                            <p>Fall Limited Edition Sneakers</p>
                            <p>
                              $125.00 × {cartQuantity}{" "}
                              <span className="text-vdblue font-bold">
                                ${(125 * cartQuantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setCartQuantity(0)}
                          type="button"
                          className="group"
                        >
                          <img
                            className="cursor-pointer group-hover:brightness-100 group-hover:invert"
                            src="/images/icon-delete.svg"
                            alt="delete"
                          />
                        </button>
                      </div>

                      <button
                        onClick={() => setCartQuantity(0)}
                        type="button"
                        className="cursor-pointer w-full bg-orange rounded-lg p-3 font-bold hover:bg-orange/50"
                      >
                        Checkout
                      </button>
                    </div>
                  )}
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
