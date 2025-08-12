import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { imageClean } from "./../../helpers/imageClean";

export default function ProductGallery({ product }) {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setCurrentImage(imageClean(product.images[0]));
    }
  }, [product]);

  if (!product?.images?.length) return null;

  return (
    <section className="flex lg:flex-row flex-col-reverse gap-4 w-full lg:w-3/5 items-center h-[500px]">
      <ul className="gap-2 lg:gap-0 flex flex-row lg:flex-col w-full lg:w-1/5 justify-center lg:justify-between items-center lg:items-start h-1/5 lg:h-full">
        {product.images.map((image, index) => (
          <li key={index}>
            <Fade delay={100 * index} triggerOnce={true}>
              <img
                src={imageClean(image)}
                alt="image alternative"
                className={`w-[80px] h-[80px] p-2 border cursor-pointer ${
                  currentImage === imageClean(image)
                    ? "border-[#ed1d24]"
                    : "border-gray-300"
                }`}
                onClick={() => setCurrentImage(imageClean(image))}
              />
            </Fade>
          </li>
        ))}
      </ul>

      <Fade triggerOnce={true} className="w-full lg:w-4/5 h-4/5 lg:h-full">
        <img
          src={currentImage}
          alt="img alternative"
          className="object-contain w-full h-full"
        />
      </Fade>
    </section>
  );
}
