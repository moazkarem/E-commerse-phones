// Hooks
import { useContext } from "react";
import useGallery from "../../../../Hooks/useGallery";
// Context
import { CurrentItemContext } from "../../../../Contexts/CurrentItemProvider";
// React Reveal
import { Fade } from "react-awesome-reveal";
import img1 from '../../../../../../public/images/jbl100-1.png'
import img2 from '../../../../../../public/images/jbl100-2.png'
import img3 from '../../../../../../public/images/jbl100-3.png'
import img4 from '../../../../../../public/images/jbl100-4.png'
export default function ProductGallery() {
  const images = [img1 , img2 , img3 , img4]
  // const currentItem = useContext(CurrentItemContext);
  const [currentImage, setCurrentImage] = useGallery(images[0]);
  return (
    <section className="flex flex-col lg:flex-row flex-col-reverse gap-4 w-full lg:w-3/5 items-center  h-[500px] ">
      <ul className="gap-2 lg:gap-0 flex flex-row lg:flex-col w-full lg:w-1/5 justify-center lg:justify-between items-center lg:items-start h-1/5 lg:h-full">
        {images?.map((image, index) => (
          <li key={index}>
            <Fade delay={100 * index} triggerOnce={true}>
              <img
                src={image}
                alt={'image alternative'}
                className={` w-[80px] h-[80px] p-2 border-[1px] cursor-pointer   `}
                onClick={() => {
                  setCurrentImage(image);
                }}
                data-active={image}
              />
            </Fade>
          </li>
        ))}
      </ul>
      <Fade
        // key={}
        triggerOnce={true}
        className=" w-full lg:w-4/5 h-4/5 lg:h-full"
      >
        <img
          src={img3}
          alt={'img alternative'}
        />
      </Fade>
    </section>
  );
}
