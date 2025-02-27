import React, { useState } from 'react';

interface ListWrapperProps<T> {
  data: T[];
  pageSize?: number;
  next?: () => void;
  viewMoreButton: React.ReactElement;
  children: (items: T[]) => React.ReactNode;
}

const ListWrapper = <T,>({
  data,
  pageSize = 10,
  next,
  viewMoreButton,
  children,
}: ListWrapperProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsToShow = data.slice(0, currentPage * pageSize);

  const handleViewMore = () => {
    if (next) {
      next();
    }
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      {children(itemsToShow)}
      {itemsToShow.length < data.length && (
        <div onClick={handleViewMore}>{viewMoreButton}</div>
      )}
    </div>
  );
};

export default ListWrapper;
