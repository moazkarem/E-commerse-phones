
import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoIosGift } from "react-icons/io";

// import { HiWindow } from "react-icons/hi2";
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-28 px-4">
     
      <div className="flex flex-col w-full max-w-screen-lg bg-primary rounded-xl px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="relative -top-1/4">
              <div className="  shadow-inner w-full h-full text-center bg-[#161819]  p-5 py-10 rounded-2xl shadow-base flex flex-col gap-3 items-center justify-evenly">
            
                  <HiOutlineShoppingCart className="text-[20px] text-[#ed1d24]" />
             
                <h1 className="text-white text-[18px] ">
                  Fast Shipping
                </h1>
              
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Services;
