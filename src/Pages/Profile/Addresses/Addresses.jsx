import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Addresses = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 flex flex-col gap-5 bg-[#161819] p-4 border border-[#6c757d] rounded-md">
        <div className="flex justify-between items-center gap-3 ">
          <h1 className="text-[18px] "> Home Address </h1>
          <div className="flex justify-center items-center gap-4">
            <FaRegEdit
              size={20}
              className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
            />
            <MdDeleteOutline
              size={20}
              className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
        <h4 className="text-[14px] text-white">Second Address</h4>
        <h6 className="text-[14px] text-white">Phone : 01095652781</h6>
      </div>

      <div className="col-span-12 flex flex-col gap-5 bg-[#161819] p-4 border border-[#6c757d] rounded-md">
        <div className="flex justify-between items-center gap-3 ">
          <h1 className="text-[18px] "> Home Address </h1>
          <div className="flex justify-center items-center gap-4">
            <FaRegEdit
              size={20}
              className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
            <MdDeleteOutline
              size={20}
              className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
        <h4 className="text-[14px] text-white">Second Address</h4>
        <h6 className="text-[14px] text-white">Phone : 01095652781</h6>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Addresses;
