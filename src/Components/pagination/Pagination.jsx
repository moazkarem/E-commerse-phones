import React from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ pageCount, onPress , currentPage }) => {
  const handlePageClick = ({selected }) => {
    onPress(selected +1); // تمرير رقم الصفحة الجديدة
  };

  return (
    <ReactPaginate
    forcePage={currentPage - 1}
      breakLabel="..."
      nextLabel={
        <span className="flex items-center justify-center border border-[#ed1d24] p-2 rounded-full cursor-pointer">
          <IoIosArrowForward className="text-[24px] " />
        </span>
      }
      previousLabel={
        <span className="flex items-center justify-center border border-[#ed1d24] p-2 rounded-full cursor-pointer">
          <IoIosArrowBack className="text-[24px] " />
        </span>
      }
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      containerClassName="flex justify-center space-x-2 mt-6"
      pageClassName="px-2 py-2 rounded-md cursor-pointer"
      pageLinkClassName="block w-full h-full text-center"
      activeClassName=" text-[#ff0000] font-bold "
    />
  );
};

export default Pagination;
