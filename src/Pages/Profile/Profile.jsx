import React from "react";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <BreadCrumb base={"Home"} page={"Profile"} />
      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-3    max-md:hidden">
          <SideBar />
        </div>
        <div className="col-span-9  max-md:col-span-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
