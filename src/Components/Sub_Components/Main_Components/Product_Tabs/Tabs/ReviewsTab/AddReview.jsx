import React, { useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";
import { addProductReviewAction } from "../../../../../../store/actions";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./../../../../../../Ui/Button";
import { getAllReviewsAction } from "./../../../../../../store/Reviews/actions";
const AddReview = () => {
  const { loading } = useSelector((state) => state.reviewsRed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoverValue, setHoverValue] = useState(undefined);
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm({});
  const { id } = useParams();
  const onSubmit = (data) => {
    const finalData = {
      ...data,
      rating: rating,
    };
    dispatch(addProductReviewAction(finalData, id));
    reset();
  };
  return (
    <div className="bg-[#111] rounded-[30px] p-6 mt-7 col-span-12 max-[400px]:col-span-10">
      <h2 className="text-white text-[18px]  mb-4 text-start">Add Comment</h2>

      <div className="flex items-center justify-start gap-3 mb-4">
        <span className="text-white">Rating : </span>
        <div className="flex items-center justify-end gap-1">
          <div className="flex items-center justify-end gap-1">
            {[0, 1, 2, 3, 4].map((index) => {
              const isFilled =
                hoverValue !== undefined ? index <= hoverValue : index < rating;

              return (
                <button
                  key={index}
                  onClick={() => {
                    if (rating === index + 1) {
                      setRating(0);
                    } else {
                      setRating(index + 1);
                    }
                  }}
                  onMouseEnter={() => setHoverValue(index)}
                  onMouseLeave={() => setHoverValue(undefined)}
                  className="focus:outline-none"
                >
                  <LiaStarSolid
                    size={20}
                    className="transition-colors duration-200"
                    color={isFilled ? "#ed1d24" : "#ffffff"}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          rows={5}
          name="review"
          placeholder="Add Your Comment Here"
          className="mt-2 w-full border rounded-md border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
          {...register("review", {
            required: `This Field is required`,
          })}
        />

        <div className="flex justify-end mt-4">
          <Button
            // loading={loading}
            style={
              "bg-[#ff0000cc] text-white px-10 py-2 rounded-sm  transition  flex justify-center items-center gap-2 "
            }
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
