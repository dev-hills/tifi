import React from 'react';
import PaginationLeft from './Paginateleft';
import PaginationRight from './Paginateright';

type PaginationBarProps = {
  pageLength: number;
  currentPage: number;
  changeCurrentPage: (a: number) => void;
};

const PaginationBar: React.FC<PaginationBarProps> = ({
  pageLength,
  currentPage,
  changeCurrentPage,
}) => {
  const items = Array.from({ length: pageLength }, (_, i) => i + 1);

  const decreasePage = () => {
    if (currentPage > 1) {
      changeCurrentPage(currentPage - 1);
    }
  };

  const increasePage = () => {
    changeCurrentPage(currentPage + 1);
  };

  const showEllipsisStart = currentPage > 3; // Show ellipsis after number 3
 
  return (
    <nav className="mx-auto flex justify-between gap-4 p-2 rounded-[15px] mb-16">
      <div>
        {pageLength > 1 && <PaginationLeft active={currentPage > 0} OnClick={decreasePage} />}
      </div>
      <ul className=" md:flex  text-res-103 hidden">
        {items.map((paginate) => (
          <li
            key={paginate}
            className={`${
              paginate === currentPage + 1 ? 'text-res-102 bg-res-105 rounded-full ' : 'bg-white text-res-106'
            } px-[14px] py-2 rounded-lg flex place-items-center cursor-pointer`}
            onClick={() => {
              changeCurrentPage(paginate - 1);
            }}
          >
            {paginate}
          </li>
        ))}
        
       
        
      </ul>
      <div className="flex space-x-4 text-sm font-medium text-res-103 md:hidden">
          Page {currentPage} of {pageLength}
        </div>
      <div>
        {pageLength > 1 && <PaginationRight active={currentPage + 1 !== pageLength} OnClick={increasePage} />}
      </div>
    </nav>
  );
};

export default PaginationBar;
