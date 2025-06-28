import React from "react";
import side1 from "../../../public/images/brands/img2.png";
import side2 from "../../../public/images/brands/img3.png";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
const RecentlyBlogs = ({ blogs }) => {
  const renderBlogs = blogs?.slice(0,4)?.map(({ image, date, title }, idx) => (
    <div
      key={idx}
      className="flex gap-3 md:gap-4 bg-[#161819] p-3 rounded-[8px] items-start"
    >
      <img
        src={image}
        alt={title}
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[8px] object-contain flex-shrink-0 p-2"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-[14px] md:text-[16px] text-white mb-1 leading-tight line-clamp-2">
          {title}
        </h4>
        <div className="flex items-center gap-1 text-[#a9afc3] text-[12px] md:text-[14px]">
          <FaCalendarAlt className="flex-shrink-0" />
          <span className="truncate">{date}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="lg:col-span-4 col-span-12 w-full box-border mt-8 lg:mt-0">
      <div className="mb-6 w-full">
        <h3
          style={{ letterSpacing: "2px" }}
          className="text-[16px] md:text-[18px] font-semibold mb-3"
        >
          Search
        </h3>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full h-[45px] md:h-[55px] px-3 md:px-4 pl-10 md:pl-12 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          />
          <FaSearch className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 text-white text-[14px] md:text-[16px]" />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="space-y-3 md:space-y-4">
        <h3
          style={{ letterSpacing: "2px" }}
          className="text-[16px] md:text-[18px] font-semibold mb-3"
        >
          Recent Blogs
        </h3>
        {renderBlogs}
      </div>
    </div>
  );
};

export default RecentlyBlogs;
