import React from "react";
import Filter from "./Filter/Filter";
import SingleCard from "./SingleCard/SingleCard";
import Seo from "../../Components/Seo/Seo";

const SingleBrand = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pt-24">
      <Seo currentPage={'Single Brand'}/>
      <div className="col-span-3    max-md:hidden">
        <Filter />
      </div>
      <div className="col-span-9  max-md:col-span-12">
        <SingleCard />
      </div>
    </div>
  );
};

export default SingleBrand;
