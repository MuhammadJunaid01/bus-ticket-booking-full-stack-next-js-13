import usePaginate from "@/libs/hooks/usePaginate";
import { AvailableBussProps } from "@/libs/interfaces";
import { useAppSelector } from "@/redux/hooks";
import { Pagination } from "@mantine/core";
import React from "react";

const OurBusses: React.FC<AvailableBussProps> = ({ title }) => {
  // console.log(data);
  const { data } = useAppSelector((state) => state.bussData);
  const paginate = usePaginate({ data: data, itemsPerPage: 10 });
  const { handlePageChange, paginateData, totalPage } = paginate;
  return (
    <div>
      <h1>AVAILABLE BUS</h1>
      <Pagination
        total={totalPage}
        onChange={handlePageChange}
        radius="xs"
        sx={{ justifyContent: "center", marginTop: "22px" }}
      />
    </div>
  );
};

export default OurBusses;
