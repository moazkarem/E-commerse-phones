import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "../../../../../../Ui/Modal";
import { delProductReviewAction } from "../../../../../../store/actions";
const DelReview = ({ deltedReview }) => {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(delProductReviewAction(deltedReview));
    document.getElementById("delete_review_modal").close();
  };

  return (
    <div>
      <Modal id="delete_review_modal" title="Delete  Review">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-[16px] text-white ">
            Are you sure you want to delete your review ?
          </h1>
          <div className="flex space-x-2 mt-10">
            <button
              onClick={() =>
                document.getElementById("delete_review_modal").close()
              }
              className="w-1/2 py-2 border border-[#454a4d] rounded-[10px]"
            >
              Cancel
            </button>
            <button
              className="w-1/2 py-2 rounded-[10px] bg-[#ff0000cc] text-[16px] font-light text-white"
              type="submit"
            >
              Delete
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DelReview;
