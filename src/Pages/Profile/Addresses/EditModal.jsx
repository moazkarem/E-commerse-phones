import React from "react";
import Modal from "../../../Ui/Modal";

const EditModal = () => {
  return (
    <div>
      <Modal id="edit_modal" title="Edit Address">
        <form>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 mt-2">
              <label className="text-sm ">Address:</label>
              <input
                type="text"
                placeholder="Enter new address"
                className="col-span-12 mt-2 w-full border rounded-md border-1 border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
              />
            </div>
            <div className="col-span-12 mt-2">
              <label className="text-sm ">Details:</label>
              <textarea
                type="text"
                placeholder="Enter phone number"
                className="col-span-12 mt-2 w-full border rounded-md border-1 border-[#6c757d] px-3 py-3 h-24 focus:outline-none bg-transparent text-white"
              />
            </div>

            <div className="col-span-6">
              <label className="text-sm ">City :</label>
              <input
                type="text"
                placeholder="Enter new address"
                className="col-span-12 mt-2  w-full border rounded-md border-1 border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
              />
            </div>
            <div className="col-span-6">
              <label className="text-sm ">Postal Code :</label>
              <input
                type="text"
                placeholder="Enter new address"
                className=" w-full mt-2 border rounded-md border-1 border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
              />
            </div>
            <div className="col-span-12 mt-2">
              <label className="text-sm ">phone:</label>
              <input
                type="text"
                placeholder="Enter new address"
                className="col-span-12 mt-2 w-full border rounded-md border-1 border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
              />
            </div>
          </div>
          <div className="flex space-x-2 mt-10">
            <button className="w-1/2 py-2 border border-[#454a4d] rounded-[10px]">
              Cancel
            </button>
            <button
              className=" w-1/2 py-2   rounded-[10px] bg-[#ff0000cc] text-[16px] font-light text-white"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
