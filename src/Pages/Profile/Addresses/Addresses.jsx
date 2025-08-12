import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../../store/Addresses/actions";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
import NullScreen from "../../../Components/NullScreen/NullScreen";
const Addresses = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [delAddress, setdeletedAddress] = useState(null);
  const { getAddresses, loading, error } = useSelector(
    (state) => state.addressesRed
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAddresses());
  }, [dispatch]);
  const { data } = getAddresses || [];
  //================  EDIT MODAL HANDELER ==============
  const edutHandeler = (address) => {
    const current_address = localStorage.setItem(
      "currentAddressId",
      address._id
    );
    setSelectedAddress(address);
    document.getElementById("edit_modal").showModal();
  };
  //================  DEL MODAL HANDELER ==============

  const delHandeler = (address) => {
    document.getElementById("delete_modal").showModal();
    setdeletedAddress(address);
  };
  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL ERROR ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );

  //============================HANDEL NULL SCREEN ===========
  if (!data?.data || data?.data === 0)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <NullScreen msg="Sorry, there are no categories now." />
      </div>
    );
  return (
    <>
      <div className="text-end mb-6">
        <button
          onClick={() => document.getElementById("add_modal").showModal()}
          className="py-2 px-12 rounded-[10px] border border-[#ff0000cc] text-[16px] font-light text-white hover:bg-[#ff0000cc] hover:border-[#6c757d]"
        >
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {data?.data?.map((address) => (
          <div
            key={address._id}
            className="col-span-12 flex flex-col gap-5 bg-[#111] p-4 border border-[#6c757d] rounded-md"
          >
            <div className="flex justify-between items-center gap-3">
              <div className="text-[18px] flex gap-2">
                <h1 className="text-[#ed1d24] text-[16px] m-0">Address :</h1>
                <span className="text-white text-[14px] m-0">
                  {address.alias}
                </span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span
                  className="hover:scale-125 p-2  rounded-sm  hover:bg-[#111] transition-all duration-300 cursor-pointer"
                  onClick={() => edutHandeler(address)}
                >
                  <FaRegEdit />
                </span>
                <span
                  className="hover:scale-125 p-2  rounded-sm  hover:bg-[#111] transition-all duration-300 cursor-pointer"
                  onClick={() => delHandeler(address)}
                >
                  <MdDeleteOutline />
                </span>
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
      <EditModal address={selectedAddress} />
      <DeleteModal delAddress={delAddress} />
    </>
  );
};

export default Addresses;
