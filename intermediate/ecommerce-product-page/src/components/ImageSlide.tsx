import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";

function ImageSlide() {
  const [currentImage, setCurrentImage] = useState(0);
  const [popUpImage, setPopUpImage] = useState(0);
  const [popUp, setPopUp] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(media.matches);

    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="relative lg:w-1/2 lg:flex lg:flex-col lg:gap-8">
      <div
        onClick={() =>
          setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="rounded-full flex items-center justify-center pr-1 w-10 h-10 bg-white 
        absolute left-5 top-1/2 -translate-y-1/2 lg:hidden"
      >
        <img src="/images/icon-previous.svg" alt="previous" />
      </div>

      <img
        onClick={() => setPopUp(true)}
        className="cursor-pointer lg:rounded-2xl"
        src={images[currentImage]}
        alt="product"
      />

      <div className="hidden lg:flex items-center gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`cursor-pointer relative rounded-2xl overflow-hidden 
            ${index === currentImage && "outline-3"} outline-orange`}
          >
            <div
              className={`absolute w-full h-full bg-white/75 
              ${index === currentImage ? "opacity-100" : "opacity-0 hover:opacity-100"}`}
            />
            <img src={image} alt="product" />
          </div>
        ))}
      </div>

      <div
        onClick={() =>
          setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="rounded-full flex items-center justify-center pl-1 w-10 h-10 bg-white 
        absolute right-5 top-1/2 -translate-y-1/2 lg:hidden"
      >
        <img src="/images/icon-next.svg" alt="next" />
      </div>

      {isDesktop &&
        popUp &&
        createPortal(
          <PopUp
            images={images}
            setPopUp={setPopUp}
            popUpImage={popUpImage}
            setPopUpImage={setPopUpImage}
          />,
          document.body,
        )}
    </div>
  );
}

interface PopUpProps {
  images: string[];
  setPopUp: Dispatch<SetStateAction<boolean>>;
  popUpImage: number;
  setPopUpImage: Dispatch<SetStateAction<number>>;
}

function PopUp({ images, setPopUp, popUpImage, setPopUpImage }: PopUpProps) {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setPopUp(false);
        }
      }}
      className="fixed top-0 left-0 z-11 p-5 bg-black/75 h-full w-full flex justify-center items-center"
    >
      <div className="flex flex-col w-1/3 justify-center items-center gap-8 h-full">
        <div className="flex flex-col gap-4">
          <svg
            onClick={() => setPopUp(false)}
            width="14"
            height="15"
            className="group cursor-pointer self-end"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-orange"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="white"
              fillRule="evenodd"
            />
          </svg>

          <div className="relative">
            <div
              onClick={() =>
                setPopUpImage((prev: number) =>
                  prev === 0 ? images.length - 1 : prev - 1,
                )
              }
              className="group cursor-pointer rounded-full flex items-center justify-center pr-1 w-10 h-10 bg-white 
                  absolute left-0 top-1/2 -translate-1/2"
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:stroke-orange"
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <img
              className="w-full rounded-2xl"
              src={images[popUpImage]}
              alt="product"
            />

            <div
              onClick={() =>
                setPopUpImage((prev: number) =>
                  prev === images.length - 1 ? 0 : prev + 1,
                )
              }
              className="group cursor-pointer rounded-full flex items-center justify-center pl-1 w-10 h-10 bg-white 
                  absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:stroke-orange"
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full px-8 gap-8">
          {images.map((image: string, index: number) => (
            <div
              key={index}
              onClick={() => setPopUpImage(index)}
              className={`cursor-pointer relative rounded-2xl overflow-hidden 
                    ${index === popUpImage && "outline-3"} outline-orange`}
            >
              <div
                className={`absolute w-full h-full bg-white/75 
                  ${index === popUpImage ? "opacity-100" : "opacity-0 hover:opacity-100"}`}
              />
              <img src={image} alt="product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
