import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 10;

    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = currentPage === i;
      const isTenthPage = i % 10 === 0;

      if (
        i === 1 ||
        i === totalPages ||
        isTenthPage ||
        (i >= currentPage - 5 && i <= currentPage + 5)
      ) {
        pages.push(
          <span
            key={i}
            className={`px-3 py-1 mx-1 border cursor-pointer ${
              isCurrentPage ? "bg-blue-500 text-white" : ""
            } ${isTenthPage ? "text-black" : ""}`}
            onClick={() => onPageChange(i)}
            style={{ borderWidth: "1px" }}
          >
            {i}
          </span>
        );
      } else if (i === 2 && i !== totalPages) {
        // Show ellipsis after the second page if there are more pages
        pages.push(
          <span key="ellipsis-start" className="mx-1">
            ...
          </span>
        );
      } else if (i === totalPages - 1 && i !== 1) {
        // Show ellipsis before the second-to-last page if there are more pages
        pages.push(
          <span key="ellipsis-end" className="mx-1">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <span
        className={`px-3 py-1 mx-1 border cursor-pointer flex ${
          currentPage === 1 ? "text-gray-500" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ borderWidth: "1px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </span>
      {renderPageNumbers()}
      <span
        className={`px-3 py-1 mx-1 border cursor-pointer flex ${
          currentPage === totalPages ? "text-gray-500" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ borderWidth: "1px" }}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </div>
  );
};

export default Pagination;
