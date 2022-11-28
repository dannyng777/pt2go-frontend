import React from 'react';

    function Pagination({ exercisesPerPage, totalExercises, paginate, currentPage }) {
        const pageNumbers = [];
        for (let i=1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
            pageNumbers.push(i);
        }
    

    return (
        <div className="flex items-center bg-white px-4 py-3 sm:px-6 gap-0.5 dark:bg-gray-800 dark:text-gray-400">
            {pageNumbers.map(number => {
                return <span key={number}>
                    <a 
                    onClick={() => paginate(number)} 
                    href='#'
                    className={
                        currentPage === number
                            ? "bg-white border-gray-800 text-gray-500 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-gray-800 dark:border-2 dark:border-gray-300"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-gray-800" 
                        }
                    >
                        {number}
                    </a>
                </span>
            })}
        </div>
    );
}

export default Pagination;