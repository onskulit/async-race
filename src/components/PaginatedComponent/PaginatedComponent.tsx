import React from 'react';
import { DecOrInc } from '../../types/enums';
import buttonStyles from '../Controls.module.css';

interface GarageProps {
  currentPage: number;
  maxPage: number;
  children: React.ReactNode;
  updatePage(operation: DecOrInc): void;
}

function PaginatedComponent({
  currentPage,
  maxPage,
  children,
  updatePage,
}: GarageProps) {
  return (
    <>
      <h4 className="text-lg flex justify-center mb-4">
        Page #
        {currentPage}
      </h4>
      {children}
      <div className="flex justify-center mt-4 gap-4">
        <button
          type="submit"
          className={`${buttonStyles.button} ${currentPage === 1 ? '' : buttonStyles.buttonLight} w-20`}
          onClick={() => {
            updatePage(DecOrInc.decrement);
          }}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="submit"
          className={`${buttonStyles.button} ${currentPage === maxPage ? '' : buttonStyles.buttonLight} w-20`}
          onClick={() => {
            updatePage!(DecOrInc.increment);
          }}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PaginatedComponent;
