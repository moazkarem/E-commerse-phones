import React from "react";

const HeadSec = ({ title='' }) => {
  return (
    <>
    <p data-testid='subtitle-sec'>test</p>
      <h3
      data-testid='title-sec'
        className="text-[28px] text-[#a9afc3] text-start  capitalize  "
        style={{ letterSpacing: "4px" }}
      >
        {title}
      </h3>
    </>
  );
};

export default HeadSec;
