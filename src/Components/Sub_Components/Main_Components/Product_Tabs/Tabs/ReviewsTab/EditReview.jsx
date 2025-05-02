import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "../../../../../../Ui/Modal";
import { LiaStarSolid } from "react-icons/lia";
import { updateProductReviewAction } from "../../../../../../store/actions";

const EditReview = ({ editedReview }) => {
  const [hoverValue, setHoverValue] = useState(undefined);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setRating(editedReview?.rating);
  }, [editedReview]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finalData = { ...data, rating };
    dispatch(updateProductReviewAction(finalData, editedReview._id));
    document.getElementById("edit_review_modal").close();
  };
  return (
    <div>
      <Modal id="edit_review_modal" title="Edit Review">
        <div className="col-span-12">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <textarea
                placeholder={"Edit Your Review"}
                className="mt-2 w-full border rounded-md border-[rgb(108,117,125)] px-3 py-3 h-24 focus:outline-none bg-transparent text-white"
                defaultValue={editedReview ? editedReview?.review : ""}
                {...(editedReview
                  ? {
                      ...register("review", {
                        required: `Review Field  is required`,
                      }),
                    }
                  : null)}
              />
            </div>
          </div>

          <div className="flex space-x-2 mt-10">
            <button
              onClick={() =>
                document.getElementById("edit_review_modal").close()
              }
              className="w-1/2 py-2 border border-[#454a4d] rounded-[10px]"
            >
              Cancel
            </button>
            <button
              className="w-1/2 py-2 rounded-[10px] bg-[#ff0000cc] text-[16px] font-light text-white"
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditReview;
