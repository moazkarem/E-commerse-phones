"use client";
import img1 from "../../../public/images/sony1000xm4-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import { FiArrowRight } from "react-icons/fi";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogsData } from "../../store/actions";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import NullScreen from "../../Components/NullScreen/NullScreen";
import { formatDate } from "../../helpers/validDate";
const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  const { blogsData, loading, error } = useSelector((state) => state.blogsRed);

  //============================HBLOGS RENDERING  ===========
  const renderBlogs = blogsData?.data?.map(
    ({ title, description, image, documentId, createdAt }, idx) => (
      <div
        key={idx}
        className="bg-[#161819] rounded-[10px] p-5 flex flex-col gap-4 h-full w-full transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer"
      >
        <img
          src={`${import.meta.env.VITE_IMAGE_DOMAIN}${image?.url}` || img1}
          alt={title}
          className="w-full h-[180px]  object-contain rounded-[10px] border border-1 border-[#a9afc355]  px-2 py-3"
        />

        <div className="flex items-center gap-4 text-[#a9afc3] text-[14px]">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>

        <h3 className="text-white text-[18px] ">{title}</h3>

        <p
          className="text-[#a9afc3] text-[16px] leading-snug line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.trim(),
          }}
        />
        <Link
          to={`/blogs/${documentId}`}
          className="text-[#ed1d24] text-[16px] font-medium inline-flex items-center gap-1 mt-auto"
        >
          Read More <FiArrowRight size={16} />
        </Link>
      </div>
    )
  );
  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL ERROR ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );

  return (
    <div className="">
      <Seo currentPage={"Blogs"} />
      <div>
        <BreadCrumb base={"Home"} page={"Blogs"} />
      </div>
      <div className="pb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogsData?.data?.length > 0 ? (
             renderBlogs 
          ) : (
            <div className="w-full h-[100vh] flex justify-center items-center">
              <NullScreen msg="Sorry, there are no products now." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
