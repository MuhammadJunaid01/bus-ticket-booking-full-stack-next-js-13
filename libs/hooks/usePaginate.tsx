import React from "react";
import {
  PaginateDataTypes,
  PaginatePropsTypes,
  PaginateReturnType,
} from "../types";

type UsePaginateType = (props: PaginatePropsTypes) => PaginateReturnType;

/**
 * The `usePaginate` function is a custom hook in TypeScript React that handles pagination for a given
 * data array and number of items per page.
 * @param  - - `data`: An array of items to be paginated.
 * @returns The `usePaginate` function returns an object with the following properties:
 */
const usePaginate: UsePaginateType = ({ data, itemsPerPage }) => {
  const [paginateData, setPaginateData] = React.useState<PaginateDataTypes[]>(
    []
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil((data?.length || 0) / itemsPerPage);

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
