import React from "react";
const ChangePass = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <input
        type={"text"}
        placeholder={"Enter Current Password"}
        className="col-span-12 w-full border rounded-md border-1 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />

      <input
        type={"text"}
        placeholder={"Enter New Password"}
        className=" col-span-12 md:col-span-12 lg:col-span-6 w-full border rounded-md border-1 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />

      <input
        type={"text"}
        placeholder={"Enter New Password Again"}
        className="col-span-12 md:col-span-12 lg:col-span-6   w-full border rounded-md border-1 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />
      <button className="border-none outline-none bg-[#ff0000cc] text-white text-[16px] w-[210px] rounded-md py-2">
        Save
      </button>
    </div>
  );
};

export default ChangePass;
