import React from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Services from "../../Components/Layout/Services/Services";
import ContactForm from "./ContactForm";
import RecentlyBlogs from "./RecentlyBlogs";
import BlogContent from "./BlogContent";

const SingleBlog = () => {
  return (
    <div>
      <div>
        <BreadCrumb base={"Home"} page={"Blogs / Single Blog"} />
      </div>
      <div className="bg-[#111] text-white py-8 md:py-12 mb-20 md:mb-40 px-8 box-border">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 box-border">
          <div className="lg:col-span-8 col-span-12 w-full box-border">
            <BlogContent />
            <ContactForm />
          </div>
          <RecentlyBlogs />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default SingleBlog;
