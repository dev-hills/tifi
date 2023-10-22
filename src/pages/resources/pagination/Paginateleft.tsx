import React from 'react';

type PaginationLeftProps = {
  active: boolean;
  OnClick: () => void;
};

const PaginationLeft: React.FC<PaginationLeftProps> = ({ active, OnClick }) => {
  return (
    <div
      onClick={() => {
        if (active) {
          OnClick();
        }
      }}
    >
      <div className="flex text-res-103 items-center" >
          <img src="/images/arrow-left.png" alt="arrow left" />
          <button  className="text-res-103 px-2 hidden md:block">
            Previous
          </button>
        </div>
    </div>
  );
};

export default PaginationLeft;
