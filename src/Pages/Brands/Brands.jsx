import img1 from "../../../public/images/sonyXb910n-2.png";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Brands = () => {
  return (
    <div>
      <div>
        <BreadCrumb base={"Home"} page={"Brands"} />
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {Array.from({ length: 12 }, (_, idx) => (
          <div
            key={idx}
            className="brand-logo flex flex-col justify-center items-center gap-6 mb-10 cursor-pointer"
          >
            <div className="bg-[#222] p-3 rounded-[10px] group overflow-hidden">
              <img
                src={img1}
                alt="brand"
                className="w-full h-auto max-h-[500px] object-cover transform transition-all duration-300 group-hover:scale-105 "
              />
            </div>
            <h5 className=" text-center text-[18px] text-[#a9afc3]  pt-4">
              Brand Name
            </h5>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-5">
        <span className="border border-[#ed1d24] p-1 rounded-full cursor-pointer">
          <IoIosArrowBack className=" text-[30px]" />
        </span>
        <div className="flex justify-center items-center gap-4">
          <span className="text-[16px] font-bold text-[#a9afc3] cursor-pointer">
            1
          </span>
          <span className="text-[16px] font-bold text-[#a9afc3] cursor-pointer">
            2
          </span>
          <span className="text-[16px] font-bold text-[#ed1d24] cursor-pointer">
            3
          </span>
          <span className="text-[16px] font-bold text-[#a9afc3] cursor-pointer">
            4
          </span>
          <span className="text-[16px] font-bold text-[#a9afc3] cursor-pointer">
            5
          </span>
        </div>
        <span className="border border-[#ed1d24] p-1 rounded-full cursor-pointer">
          <IoIosArrowForward className=" text-[30px]" />
        </span>
      </div>
    </div>
  );
};

export default Brands;
