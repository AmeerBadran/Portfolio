/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex 2md:flex-row flex-col items-center justify-between gap-4 max-w-[1300px] mx-auto px-20">

      <div className='flex gap-6'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`w-16 h-16 flex items-center justify-center border-2 font-medium shadow-box hover:shadow-hoverbox transition-all duration-300 ${currentPage === page
              ? 'bg-red-500 text-white hover:bg-red-600 border-none'
              : 'hover:bg-gray-200 border-black'
              }`}
            onClick={() => handlePageClick(page)}
          >
            {page < 10 ? `0${page}` : page}
          </button>
        ))}
      </div>
      <div className='flex gap-6'>
        <button
          className={`w-16 h-16 flex items-center justify-center shadow-box hover:shadow-hoverbox transition-all duration-300 border-2 border-black ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
            }`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack className='text-2xl' />
        </button>
        <button
          className={`w-16 h-16 flex items-center justify-center border-2 shadow-box hover:shadow-hoverbox transition-all duration-300 border-black ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
            }`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
