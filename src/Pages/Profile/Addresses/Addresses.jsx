import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../../store/Addresses/actions";

const Addresses = () => {
  const { getAddresses, loading, error } = useSelector(
    (state) => state.addressesRed
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddresses());
  }, [dispatch]);

  const {data} = getAddresses || [];
console.log(data?.data , 'from comp')
  return (
    <>
      {/* Add Button */}
      <div className="text-end mb-6">
        <button
          onClick={() => document.getElementById("add_modal").showModal()}
          className="py-2 px-12 rounded-[10px] border border-[#ff0000cc] text-[16px] font-light text-white hover:bg-[#ff0000cc] hover:border-[#6c757d]"
        >
          Add New Address
        </button>
      </div>

      {/* Addresses List */}
      <div className="grid grid-cols-12 gap-5">
        {data?.data?.map((address) => (
          <div
            key={address.id}
            className="col-span-12 flex flex-col gap-5 bg-[#161819] p-4 border border-[#6c757d] rounded-md"
          >
            <div className="flex justify-between items-center gap-3">
              <div className="text-[18px] flex gap-2">
                <h1 className="text-[#ed1d24] text-[16px] m-0">Address :</h1>
                <span className="text-white text-[14px] m-0">
                  {address.alias}
                </span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <FaRegEdit
                  size={20}
                  className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("edit_modal").showModal()
                  }
                />
                <MdDeleteOutline
                  size={20}
                  className="hover:scale-125 hover:-translate-y-1 hover:text-[#ff0000cc] transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("delete_modal").showModal()
                  }
                />
              </div>
            </div>

            <div className="text-[18px] flex flex-col gap-2">
              <h1 className="text-[#ed1d24] text-[16px] m-0">Details :</h1>
              <span className="text-white text-[14px] m-0">
                {address.details || "No details provided."}
              </span>
            </div>

            <div className="text-[18px] flex items-center gap-2">
              <h1 className="text-[#ed1d24] text-[16px] m-0">Phone :</h1>
              <span className="text-white text-[14px] m-0">
                {address.phone || "N/A"}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-[18px] flex items-center gap-2">
                <h1 className="text-[#ed1d24] text-[16px] m-0">City :</h1>
                <span className="text-white text-[14px] m-0">
                  {address.city || "N/A"}
                </span>
              </div>
              <div className="text-[18px] flex items-center gap-2">
                <h1 className="text-[#ed1d24] text-[16px] m-0">
                  Postal Code :
                </h1>
                <span className="text-white text-[14px] m-0">
                  {address.postalCode || "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <AddModal />
      <EditModal />
      <DeleteModal />
    </>
  );
};

export default Addresses;
