import React from 'react'
import { FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import img1 from "./img1.jpg";
const BlogContent = () => {
  return (
    <div>
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

            <h2
              style={{ letterSpacing: "2px" }}
              className="text-[#ed1d24] text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-4 mb-2 leading-tight"
            >
              Blog Post Title Goes Here
            </h2>

            <p className="text-[16px] md:text-[18px] leading-6 md:leading-8 text-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
              sit impedit nemo tempore perferendis vero, repellendus modi
              repudiandae odio adipisci magnam tenetur quos quidem culpa, natus
              excepturi quas vel. Velit et hic nemo alias sapiente dignissimos
              veniam dolores officia id laudantium voluptatem totam ex quibusdam
              natus neque possimus, cupiditate autem, deserunt temporibus
              distinctio cum molestias. A rem eos quibusdam animi eum quo
              temporibus numquam veritatis facere praesentium voluptas quos
              maxime magni voluptatem, nemo ut doloribus unde similique tempora.
              Facilis officiis cum corrupti, expedita veritatis earum. Atque rem
              quidem molestias mollitia consectetur dignissimos, eos aspernatur
              sed laborum eveniet numquam? Animi!
            </p>
    </div>
  )
}

export default BlogContent