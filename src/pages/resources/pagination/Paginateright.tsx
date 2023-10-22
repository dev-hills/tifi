import React from 'react';

type PaginationRightProps = {
  active: boolean;
  OnClick: () => void;
};

const PaginationRight: React.FC<PaginationRightProps> = ({ active, OnClick }) => {
  return (
    <div
      onClick={() => {
        if (active) {
          OnClick();
        }
      }}
    >
      <div className="flex text-res-103 items-center"   >
            <button className="text-res-103 px-2 hidden md:block">
              Next
            </button>
            <img src="/images/arrow-right.png" alt="arrow right" />
          </div>
    </div>
  );
};

export default PaginationRight;
