import React from "react";

const HeadSec = ({ title }) => {
  return (
    <div className="inline-block">
      <h3
        className="text-[28px] text-[#c7cbd8] text-start capitalize mb-1"
        style={{ letterSpacing: "4px" }}
      >
        {title}
      </h3>
      <div
        className="bg-[#ff0000cc] rounded-[2px]"
        style={{ width: "50%", height: "3px" }}
      ></div>
    </div>
  );
};

export default HeadSec;
