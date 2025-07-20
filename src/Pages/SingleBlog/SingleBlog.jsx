import React from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Services from "../../Components/Layout/Services/Services";
import ContactForm from "./ContactForm";
import RecentlyBlogs from "./RecentlyBlogs";
import BlogContent from "./BlogContent";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import Comments from "./Comments";
import Seo from "../../Components/Seo/Seo";
const SingleBlog = () => {
  const { id } = useParams();
  const blogData = blogs?.find((blog) => blog?.id === parseInt(id));

  return (
    <div>
      <Seo currentPage={blogData?.title} />
      <div>
        <BreadCrumb base={"Home"} page={"Blogs / Single Blog"} />
      </div>
      <div className="bg-[#111] text-white py-8 md:py-12 mb-20 md:mb-40 px-8 box-border">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 box-border">
          <div className="lg:col-span-8 col-span-12 w-full box-border">
            <BlogContent blogData={blogData} />
            <Comments blogData={blogData} />
            <ContactForm blogData={blogData} />
          </div>
          <RecentlyBlogs blogs={blogs} />
        </div>
      </div>
      {/* <Services /> */}
    </div>
  );
};

export default SingleBlog;
