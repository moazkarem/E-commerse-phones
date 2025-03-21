import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-end ">
      <BounceLoader color="#d63636" margin={3} size={60} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
