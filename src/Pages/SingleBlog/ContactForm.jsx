import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const ContactForm = ({ blogData }) => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.data?.data.name;
  const [allComments, setAllComments] = useState([]);
  const id = blogData?.id;
  useEffect(() => {
    const storedComments = localStorage.getItem(`comment-${id}`);
    const blogComments = storedComments ? JSON.parse(storedComments) : [];
    setAllComments(blogComments);
  }, [id]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    try {
      const newComment = { ...data, name: userName };
      const updateComments = [...allComments, newComment];
      setAllComments(updateComments);
      localStorage.setItem(`comment-${id}`, JSON.stringify(updateComments));
      toast.success("Comment added successfully");
      reset();
      console.log(updateComments);
    } catch (err) {
      toast.error("Error: Comment could not be added");
      // console.log(err , 'errr');
    }
  };
  return (
    <>
      <div className="mt-12">
        <h1 className="text-[20px] text-[#fff] mb-5 ">Write Comment Here</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full grid grid-cols-1 md:grid-cols-12 gap-4"
      >
        <div className="col-span-12">
          <textarea
            {...register("comment")}
            placeholder="Your Message"
            className="w-full min-h-[150px] px-4 py-3 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          ></textarea>
        </div>

        <div className="col-span-12">
          <button className="w-[180px] h-[55px] bg-[#ff0000cc] text-white rounded-[10px] transition-all duration-300 hover:opacity-90">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
