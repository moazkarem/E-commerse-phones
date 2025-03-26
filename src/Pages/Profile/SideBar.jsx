import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-4 w-full ">
        <div className=" mb-5 bg-[#161819] p-4 rounded-md">
          <NavLink
            to={"/profile/orders"}
            className="flex justify-between items-center gap-2  pb-4  w-full cursor-pointer "
          >
            <h1 className="text-[16px] ">Orders</h1>
            <span>
              <TbTruckDelivery size={20}/>
            </span>
          </NavLink>
          <NavLink
            to={"/profile/whishlist"}
            className="flex justify-between items-center gap-2  py-4  w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Whishlist</h1>
            <span>
              <FaRegHeart size={20} />
            </span>
          </NavLink>
          <NavLink to={"/profile/addresses"}
            
            className="flex justify-between items-center gap-2  py-4  w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">Addresses</h1>
            <span>
              <CiLocationOn size={24}/>
            </span>
          </NavLink>

          {/* <NavLink to={"/profile"}
           
            className="flex justify-between items-center gap-2  pt-4 w-full cursor-pointer"
          >
            <h1 className="text-[16px] ">My Account</h1>
            <span>
              <FaRegHeart />
            </span>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
