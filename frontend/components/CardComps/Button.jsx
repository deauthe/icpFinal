import React from "react";

const Button = ({ page, handlePageChange, currentPage }) => {
  return (
    <>
      <button
        key={page + 1}
        onClick={() => handlePageChange(page + 1)}
        className={`${
          currentPage === page + 1 ? "bg-purple-500" : " bg-white"
        }  px-2 mx-1 shadow-xl rounded-[10px] ease-in-out duration-300 transition-all `}
      >
        {page + 1}
      </button>
    </>
  );
};

export default Button;
