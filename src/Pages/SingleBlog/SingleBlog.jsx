import React, { useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Services from "../../Components/Layout/Services/Services";
import ContactForm from "./ContactForm";
import RecentlyBlogs from "./RecentlyBlogs";
import BlogContent from "./BlogContent";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import Comments from "./Comments";
import Seo from "../../Components/Seo/Seo";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData, getSingleBlog } from "../../store/actions";
import Loading from "../../Components/Loading/Loading";
import Blogs from "../Blogs/Blogs";
import LatestBlogs from "../Home/Blogs/Blogs";
const SingleBlog = () => {
  const { id } = useParams();
  const { loading, singleBlog, blogsData } = useSelector(
    (state) => state.blogsRed
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlog(id));
    dispatch(getBlogsData());
  }, [dispatch, id]);

  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <div>
      <Seo currentPage={"single blog"} />
      <div>
        <BreadCrumb base={"Home"} page={"Blogs / Single Blog"} />
      </div>
      <div className="bg-[#111] text-white py-8 md:py-12 mb-20 md:mb-40 px-8 box-border">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 box-border">
          <div className="lg:col-span-8 col-span-12 w-full box-border">
            <BlogContent blogData={singleBlog?.data} />
            <Comments blogData={singleBlog?.data} />
            <ContactForm blogData={singleBlog?.data} />
          </div>
          <RecentlyBlogs blogs={blogsData?.data} />
        </div>
      </div>

      <LatestBlogs secTitle={"Related Blogs"} />
    </div>
  );
};

export default SingleBlog;
