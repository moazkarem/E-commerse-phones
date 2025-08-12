import React from "react";
import Lottie from "lottie-react";
import profileAnimation from "./../../../Components/animation/Profile.json";
const MyProfile = () => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.data?.data.name;
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h3 className="capitalize text-[18px] text-[#fff] font-light text-center">
        Hello <b className="text-[#ed1d24] font-light">{userName} </b> , your
        account dashboard lets you check your recent orders, update your account
        information, and change your password whenever you need.
      </h3>
      <div>
        <Lottie style={{ height: 380 }} animationData={profileAnimation} />
      </div>
    </div>
  );
};

export default MyProfile;
