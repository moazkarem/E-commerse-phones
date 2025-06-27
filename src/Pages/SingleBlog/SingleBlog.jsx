import React from "react";
import { FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import img1 from "./img1.jpg";
import side1 from "../../../public/images/brands/img2.png";
import side2 from "../../../public/images/brands/img3.png";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";

const SingleBlog = () => {
  return (
    <div>
   <div>
        <BreadCrumb base={"Home"} page={"Blogs / Single Blog"} />
      </div>
      <div className="bg-[#111] text-white py-8 md:py-12 mb-20 md:mb-40 px-3 md:px-4 box-border">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 box-border">
     
        <div className="lg:col-span-8 col-span-12 w-full box-border">
          <img
            src={img1}
            alt="blog"
            className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-cover rounded-[10px]"
          />

          <div className="flex items-center gap-3 md:gap-4 mt-4 text-[#a9afc3] text-[12px] md:text-[14px] flex-wrap">
            <div className="flex items-center gap-2">
              <FaUser className="text-[12px] md:text-[14px]" />
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[12px] md:text-[14px]" />
              <span>5 Oct 2025</span>
            </div>
          </div>

          <h2 style={{letterSpacing:'2px'}} className="text-[#ed1d24] text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-4 mb-2 leading-tight">
            Blog Post Title Goes Here
          </h2>

          <p className="text-[16px] md:text-[18px] leading-6 md:leading-8 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non sit impedit nemo tempore perferendis vero, repellendus modi repudiandae odio adipisci magnam tenetur quos quidem culpa, natus excepturi quas vel. Velit et hic nemo alias sapiente dignissimos veniam dolores officia id laudantium voluptatem totam ex quibusdam natus neque possimus, cupiditate autem, deserunt temporibus distinctio cum molestias. A rem eos quibusdam animi eum quo temporibus numquam veritatis facere praesentium voluptas quos maxime magni voluptatem, nemo ut doloribus unde similique tempora. Facilis officiis cum corrupti, expedita veritatis earum. Atque rem quidem molestias mollitia consectetur dignissimos, eos aspernatur sed laborum eveniet numquam? Animi!
          </p>
        </div>

 
        <div className="lg:col-span-4 col-span-12 w-full box-border mt-8 lg:mt-0">
     
          <div className="mb-6 w-full">
            <h3 style={{letterSpacing:'2px'}} className="text-[16px] md:text-[18px] font-semibold mb-3">Search</h3>
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
            <h3 style={{letterSpacing:'2px'}} className="text-[16px] md:text-[18px] font-semibold mb-3">Recent Posts</h3>
            {[
              { img:side1 , title: "Blog Title One", date: "3 Oct 2025" },
              { img: side2, title: "Blog Title Two", date: "1 Oct 2025" },
            ].map((post, idx) => (
              <div key={idx} className="flex gap-3 md:gap-4 bg-[#161819] p-3 rounded-[8px] items-start">
                <img
                  src={post.img }
                  alt={post.title}
                  className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[8px] object-contain flex-shrink-0 p-2"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] md:text-[16px] text-white mb-1 leading-tight line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[#a9afc3] text-[12px] md:text-[14px]">
                    <FaCalendarAlt className="flex-shrink-0" />
                    <span className="truncate">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default SingleBlog;
