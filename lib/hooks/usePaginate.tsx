import React from "react";

// Define the generic types
type PaginateDataTypes<T> = T[];
type PaginatePropsTypes<T> = {
  data: T[];
  itemsPerPage: number;
};
type PaginateReturnType<T> = {
  handlePageChange: (page: number) => void;
  paginateData: PaginateDataTypes<T>;
  totalPage: number;
};

// Define the generic custom hook
type UsePaginateType = <T>(
  props: PaginatePropsTypes<T>
) => PaginateReturnType<T>;

const usePaginate: UsePaginateType = <T,>({
  data,
  itemsPerPage,
}: PaginatePropsTypes<T>) => {
  const [paginateData, setPaginateData] = React.useState<PaginateDataTypes<T>>(
    []
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil((data.length || 0) / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  React.useEffect(() => {
    if (data) {
      const result = data.slice(indexOfFirst, indexOfLast);
      setPaginateData(result);
    }
  }, [data, indexOfFirst, indexOfLast]);

  return {
    handlePageChange,
    paginateData,
    totalPage,
  };
};

export default usePaginate;
