import Lottie from "lottie-react";
import React from "react";
import nullanimation from "./../../Components/animation/emptyscreen.json";

const NullScreen = ({ msg }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen gap-4">
      <div>
        <Lottie style={{ height: 380 }} animationData={nullanimation} />
      </div>
      <span className="text-[22px] text-[#fff]">{msg}</span>
    </div>
  );
};

export default NullScreen;
