import { useDispatch, useSelector } from "react-redux";
import img1 from "../../../public/images/sonyXb910n-2.png";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";
import { getAllCategories } from "../../store/Categories/actions";
const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categoriesRed);
  console.log(categories.products , 'test data')
  useEffect(() => {
    dispatch(getAllCategories()); 
  }, [dispatch]);
  return (
    <div className="pb-20">
      <div>
        <BreadCrumb base={"Home"} page={"Categories"} />
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 mb-16">
        {Array.from({ length: 16 }, (_, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center gap-6 mb-10"
          >
            <div className="border border-[#596268] p-3 rounded-[10px] overflow-hidden group">
              <img
                src={img1}
                alt="brand"
                className="w-full h-auto max-h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
            </div>
            <h5 className="text-center text-[18px] text-[#a9afc3]">
              Category Name
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

export default Categories;
