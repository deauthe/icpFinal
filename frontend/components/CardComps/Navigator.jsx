import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Button from "./Button";
const Navigator = ({ handlePageChange, currentPage, totalPages }) => {
  return (
    <div className="glassmorphism py-3 px-2.5 shadow gap-7 items-center text-gray-800  ">
      <div>
        <button
          title="Previous"
          className="bg-white px-2.5 py-0.5 rounded-xl shadow-lg text-center"
          onClick={() => {
            if (currentPage - 1 > 0) {
              handlePageChange(currentPage - 1);
            }
          }}
        >
          <BiLeftArrowAlt />
        </button>

        {[...Array(totalPages).keys()].map((page) => (
          <Button
            key={page}
            page={page}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        ))}
        <button
          title="Next"
          className="bg-white px-2.5 py-0.5 rounded-xl shadow-lg text-center"
          onClick={() => {
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
        >
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Navigator;
