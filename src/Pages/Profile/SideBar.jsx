import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-4 w-full ">
        <div className=" mb-5 bg-[#161819] px-4 py-12 rounded-md">
        <NavLink
            to={"/profile"}
            end
            className="flex justify-between items-center gap-2  pb-12  w-full cursor-pointer "
          >
            <h1 className="text-[16px] ">My Profile</h1>
            <span>
              <TbTruckDelivery   className="w-6 h-6"/>
            </span>
          </NavLink>
          <NavLink
            to={"/profile/orders"}
            className="flex justify-between items-center gap-2  pb-12  w-full cursor-pointer "
          >
            <h1 className="text-[16px] ">Orders</h1>
            <span>
              <TbTruckDelivery   className="w-6 h-6"/>
            </span>
          </NavLink>
          <NavLink
            to={"/profile/whishlist"}
            className="flex justify-between items-center gap-2  pb-12  w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Whishlist</h1>
            <span>
              <FaRegHeart   className="w-6 h-6"/>
            </span>
          </NavLink>
          <NavLink
            to={"/profile/addresses"}
            className="flex justify-between items-center gap-2  pb-12  w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Addresses</h1>
            <span>
              <CiLocationOn   className="w-6 h-6"/>
            </span>
          </NavLink>

          <NavLink
            to={"/profile/changepassword"}
            className="flex justify-between items-center gap-2  pb-12 w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Change Password</h1>
            <span>
              <FaUserEdit  className="w-6 h-6"/>
            </span>
          </NavLink>
          <button
   
            className="flex justify-between items-center gap-2   w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Logout</h1>
            <span>
              <CiLogout className="w-6 h-6"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
