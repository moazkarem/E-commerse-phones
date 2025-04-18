import React from "react";
import Modal from "../../../Ui/Modal";
import { useForm } from "react-hook-form";
import { delAddressAction } from "../../../store/actions";
import { useDispatch } from "react-redux";
const DeleteModal = ({ delAddress }) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(delAddressAction( delAddress));
    document.getElementById("delete_modal").close();
  };

  return (
    <div>
      <Modal id="delete_modal" title="Delete  Address">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-[16px] text-white ">
            Are Yoy Sure From Delete This Address ( {delAddress?.alias} )
          </h1>
          <div className="flex space-x-2 mt-10">
            <button
              onClick={() => document.getElementById("delete_modal").close()}
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

export default DeleteModal;
