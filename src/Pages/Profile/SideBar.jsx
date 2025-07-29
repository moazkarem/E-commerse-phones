import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
const Slider = () => {
  const navigate = useNavigate();
  const logoutHandeler = () => {
    localStorage.removeItem("userData");
    toast.success("You Are Logged Out Successfuly");
 
  };
  return (
    <div>
      <div className="  bg-[#111] px-4 py-12 max-lg:py-6 rounded-md max-lg:flex max-lg:items-center max-lg:justify-between max-lg:overflow-x-scroll max-lg:gap-6">
        <NavLink
          to={"/profile"}
          end
          className="flex justify-between items-center gap-2  pb-12 max-lg:pb-0  w-full cursor-pointer "
        >
          <h1 className="text-[16px] whitespace-nowrap ">My Profile</h1>
          <span>
            <TbTruckDelivery className="w-6 h-6" />
          </span>
        </NavLink>
        <NavLink
          to={"/profile/orders"}
          className="flex justify-between items-center gap-2  pb-12 max-lg:pb-0  w-full cursor-pointer "
        >
          <h1 className="text-[16px] whitespace-nowrap ">Orders</h1>
          <span>
            <TbTruckDelivery className="w-6 h-6" />
          </span>
        </NavLink>
        <NavLink
          to={"/profile/whishlist"}
          className="flex justify-between items-center gap-2  pb-12 max-lg:pb-0  w-full cursor-pointer"
        >
          <h1 className="text-[16px] whitespace-nowrap ">Whishlist</h1>
          <span>
            <FaRegHeart className="w-6 h-6" />
          </span>
        </NavLink>
        <NavLink
          to={"/profile/addresses"}
          className="flex justify-between items-center gap-2  pb-12 max-lg:pb-0  w-full cursor-pointer"
        >
          <h1 className="text-[16px] whitespace-nowrap ">Addresses</h1>
          <span>
            <CiLocationOn className="w-6 h-6" />
          </span>
        </NavLink>

        <NavLink
          to={"/profile/changepassword"}
          className="flex justify-between items-center gap-2  pb-12 max-lg:pb-0 w-full cursor-pointer"
        >
          <h1 className="text-[16px]  whitespace-nowrap">Change Password</h1>
          <span>
            <FaUserEdit className="w-6 h-6" />
          </span>
        </NavLink>
        <NavLink
          to={"/login"}
          className="flex justify-between items-center gap-2   w-full cursor-pointer"
        >
          <div
            className="flex justify-between items-center gap-2   w-full cursor-pointer"
            onClick={logoutHandeler}
          >
            <h1 className="text-[16px] whitespace-nowrap ">Logout</h1>
            <span>
              <CiLogout className="w-6 h-6" />
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Slider;
