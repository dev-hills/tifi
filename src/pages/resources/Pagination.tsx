import React, { useState, useEffect } from "react";

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    console.log(`handlePageChange called with page ${page}`);
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      onPageChange(page);
      console.log(`Page changed to ${page}`);
    }
  };

  return (
    <div>
      <div className="pagination font-noto-sans flex justify-between my-10 space-x-4">
        <div className="flex text-res-103 items-center" onClick={() => handlePageChange(currentPage - 1)}>
          <img src="/images/arrow-left.png" alt="arrow left" />
          <button  className="text-res-103 px-2 hidden md:block">
            Previous
          </button>
        </div>
        <div className="flex space-x-4 text-sm font-medium text-res-103 md:hidden">
          Page 1 of 10
        </div>
        <ul className="md:flex space-x-4 text-res-103 hidden">
          <li>
            <button onClick={() => handlePageChange(1)} className={1 === activePage ? "active" : ""}>
              1
            </button>
          </li>
          {activePage > 3 && <li>...</li>}
          {Array.from({ length: totalPages > 3 ? 3 : totalPages }, (_, index) => {
            const pageNumber = index + (activePage < 4 ? 2 : activePage - 1);
            return (
              <li key={pageNumber}>
                <button
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === activePage ? "active" : ""}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          {totalPages - activePage > 3 && <li>...</li>}
          {activePage < totalPages - 2 && (
            <li>
              <button
                onClick={() => handlePageChange(totalPages - 1)}
                className={totalPages - 1 === activePage ? "active" : ""}
              >
                {totalPages - 1}
              </button>
            </li>
          )}
          <li>
            <button onClick={() => handlePageChange(totalPages)} className={totalPages === activePage ? "active" : ""}>
              {totalPages}
            </button>
          </li>
        </ul>

        {currentPage < totalPages && (
          <div className="flex text-res-103 items-center"  onClick={() => handlePageChange(currentPage + 1)} >
            <button className="text-res-103 px-2 hidden md:block">
              Next
            </button>
            <img src="/images/arrow-right.png" alt="arrow right" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
