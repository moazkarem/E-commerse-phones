import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const Comments = ({ blogData }) => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.data?.data.name;

  const [comments, setComments] = useState([]);
  const id = blogData?.id;

  useEffect(() => {
    const storedComments = localStorage.getItem(`comment-${id}`);
    const blogComments = storedComments ? JSON.parse(storedComments) : [];
    setComments(blogComments);
  }, [id]);

  const removeCommentHandeler = (removedId) => {
    const filterdBlogs = comments?.filter((_, idx) => idx !== removedId);
    setComments(filterdBlogs);
    localStorage.setItem(`comment-${id}`, JSON.stringify(filterdBlogs));
    toast.success("Comment removed successfully");
  };
  return (
    <div className="mt-20">
      <h1 className="text-[20px] text-[#fff] mb-5">Comments</h1>

      {comments?.length === 0 ? (
        <p className="text-[#aaa]">No comments yet.</p>
      ) : (
        <div className="space-y-4">
          {comments?.map(({ comment, name }, idx) => (
            <div
              key={idx}
              className="bg-[#161819]  p-4 md:p-5 rounded-[10px] border border-[#2b2b2b] text-white relative"
            >
              {name === userName ? (
                <button
                  onClick={() => removeCommentHandeler(idx)}
                  className="absolute top-3 right-3 text-[#888] hover:text-[#ed1d24] transition duration-300"
                >
                  <FaTrash className="text-[14px] md:text-[16px]" />
                </button>
              ) : (
                ""
              )}

              <h4 className="capitalize  text-[16px] font-medium text-[#ed1d24] mb-2">
                {name}
              </h4>

              <p className="text-[15px] md:text-[16px] text-[#a9afc3] leading-relaxed">
                {comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
