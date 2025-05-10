import React from "react";

const MyProfile = () => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.data?.data.name;
  return (
    <div className="w-full ">
      <h3 className="capitalize text-[18px] text-[#a9afc3] font-light">
        {" "}
        Hello <b className="text-[#ed1d24] font-light">{userName}</b>, from your account
        dashboard, you can view your recent orders, manage your account details,
        and change your password.
      </h3>
    </div>
  );
};

export default MyProfile;
