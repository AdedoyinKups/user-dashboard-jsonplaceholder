import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4" aria-label="Pagination controls">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`px-4 py-2 mx-1 border rounded ${
          currentPage === index + 1 ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"
        } hover:bg-indigo-500 hover:text-white transition-colors duration-200`}
        onClick={() => onPageChange(index + 1)}
        aria-label={`Go to page ${index + 1}`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;