import React from "react";
import { FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import img1 from "../../../public/images/brands/blogbg.jpg";
import { formatDate } from "../../helpers/validDate";
const BlogContent = ({ blogData }) => {
  // const { image, title, description, createdAt } = blogData;
  console.log(blogData?.image, "contey");
  return (
    <div>
      <img
        src={`${import.meta.env.VITE_IMAGE_DOMAIN + blogData?.image?.url}`}
        alt="blog"
        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-contain py-6 rounded-[10px] border border-1 border-[#a9afc3]"
      />

      <div className="flex items-center gap-3 md:gap-4 mt-4 text-[#a9afc3] text-[12px] md:text-[14px] flex-wrap">
        <div className="flex items-center gap-2">
          <FaUser className="text-[12px] md:text-[14px]" />
          <span>Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[12px] md:text-[14px]" />
          <span>{formatDate(blogData?.createdAt)}</span>
        </div>
      </div>

      <h2
        style={{ letterSpacing: "2px" }}
        className="text-[#ed1d24] text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-4 mb-2 leading-tight"
      >
        {blogData?.title}
      </h2>

      <p
        className="text-[16px] md:text-[18px] leading-6 md:leading-8 text-white text-start"
        dangerouslySetInnerHTML={{
          __html: blogData?.description,
        }}
      />
    </div>
  );
};

export default BlogContent;
