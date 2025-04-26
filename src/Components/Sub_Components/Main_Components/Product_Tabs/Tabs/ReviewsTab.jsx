import { useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { Fade } from "react-awesome-reveal";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "rc-rate/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllReviewsAction } from "../../../../../store/actions";
import AddReview from "./AddReview";
import Loading from "../../../../Loading/Loading";
import { formatDate } from "../../../../../helpers/validDate";
import DelReview from "./DelReview";
import EditReview from "./EditReview";
export default function ReviewsTab() {
  const { id } = useParams();
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const loggedUser = userData?.data?.data?._id;
  const { getReviews, loading } = useSelector((state) => state.reviewsRed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReviewsAction(id));
  }, [dispatch]);

  const reviews = getReviews?.data?.data;
 //============================HANDEL EDIT REVIEW  ===========
  const [deltedReview, setDeletedReview] = useState("");
  const delReviewHandeler = (reviewId) => {
    document.getElementById("delete_review_modal").showModal();
    setDeletedReview(reviewId);
  };

   //============================HANDEL DELETE REVIEW  ===========
   const [editedReview , setEditedReview] = useState('')
   const editReviewHandeler = (review)=>{
    document.getElementById("edit_review_modal").showModal()
    setEditedReview(review)
   }
  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-12 gap-8 w-full">
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews?.map((review, idx) => (
            <div
              key={review?._id}
              className="col-span-12 max-[400px]:col-span-10 flex items-start gap-3"
            >
              <Fade delay={idx * 50} className="w-full">
                <div className="bg-[#111] flrx flex-col gap-4 w-full rounded-[30px] max-[400px]:rounded-[15px]">
                  <div className="flex justify-between items-center pt-7 pb-5 px-8 max-[400px]:flex-col max-[400px]:gap-2 max-[400px]:px-4 max-[400px]:items-start">
                    <div className="flex items-center gap-5">
                      <FaRegCircleUser className="text-red-600" size={35} />
                      <div>
                        <h1 className="text-white text-[16px] capitalize">
                          {review?.user?.name}
                        </h1>
                        <span className="text-[#596268]">
                          {formatDate(review?.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1 max-[400px]:ps-[53px]">
                      {Array.from({ length: Math.ceil(review?.rating) }).map(
                        (item, idx) => (
                          <LiaStarSolid key={idx} color="#ed1d24" />
                        )
                      )}
                    </div>
                  </div>

                  <div className="ps-[91px] max-[400px]:ps-[68px] pe-10 pb-8">
                    <h4 className="text-[14px] text-[#a9afc3] capitalize max-[400px]:line-clamp-4">
                      {review?.review}
                    </h4>
                  </div>
                  {loggedUser === review?.user?._id && (
                    <div className="flex justify-end pe-10 pb-5 gap-4">
                      <button>
                        <FaRegEdit
                        onClick={()=>editReviewHandeler(review)}
                          className="text-[#a9afc3] hover:text-[#008000]"
                          size={18}
                        />
                      </button>
                      <button onClick={() => delReviewHandeler(review?._id)}>
                        <MdDeleteOutline
                          className="text-[#a9afc3] hover:text-red-500"
                          size={20}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </Fade>
            </div>
          ))
        ) : (
          <h4 className="text-[16px] ps-3 text-[#a9afc3] w-full col-span-8">
            No comments exist for this product. Be the first to comment!
          </h4>
        )}

        <AddReview />
        <DelReview deltedReview={deltedReview} />
        <EditReview editedReview={editedReview}/>
      </div>
    </>
  );
}
