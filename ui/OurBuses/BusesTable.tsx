import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { Box, Button, Image, Menu, Text, Title } from "@mantine/core";
import { IconUserCircle, IconSend } from "@tabler/icons-react";
import { BussesTypes } from "@/libs/types";

const BusTable = ({ data }: { data: BussesTypes[] }) => {
  const columns = useMemo<MRT_ColumnDef<BussesTypes>[]>(
    () => [
      {
        id: "_id", //id used to define `group` column
        header: "Bus Number",
        columns: [
          {
            accessorFn: (row) => `${row.bussNumber} `, //accessorFn used to join multiple data into a single cell
            id: "Bus Number", //id is still required when using accessorFn instead of accessorKey
            header: "",
            size: 250,
            filterVariant: "autocomplete",
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Image
                  alt="avatar"
                  height={30}
                  src={row.original.img}
                  style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                />
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "road", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: "Road",
            size: 300,
          },
        ],
      },
      //   {
      //     id: "id",
      //     header: "Job Info",
      //     columns: [
      //       {
      //         accessorKey: "salary",
      //         header: "Salary",
      //         size: 200,
      //         filterVariant: "range-slider",
      //         mantineFilterRangeSliderProps: {
      //           color: "indigo",
      //           label: (value) =>
      //             value?.toLocaleString?.("en-US", {
      //               style: "currency",
      //               currency: "USD",
      //               minimumFractionDigits: 0,
      //               maximumFractionDigits: 0,
      //             }),
      //         },
      //         //custom conditional format and styling
      //         Cell: ({ cell }) => (
      //           <Box
      //             sx={(theme) => ({
      //               backgroundColor:
      //                 cell.getValue<number>() < 50_000
      //                   ? theme.colors.red[9]
      //                   : cell.getValue<number>() >= 50_000 &&
      //                     cell.getValue<number>() < 75_000
      //                   ? theme.colors.yellow[9]
      //                   : theme.colors.green[9],
      //               borderRadius: "4px",
      //               color: "#fff",
      //               maxWidth: "9ch",
      //               padding: "4px",
      //             })}
      //           >
      //             {cell.getValue<number>()?.toLocaleString?.("en-US", {
      //               style: "currency",
      //               currency: "USD",
      //               minimumFractionDigits: 0,
      //               maximumFractionDigits: 0,
      //             })}
      //           </Box>
      //         ),
      //       },
      //       {
      //         accessorKey: "jobTitle", //hey a simple column for once
      //         header: "Job Title",
      //         filterVariant: "multi-select",
      //         size: 350,
      //       },
      //       {
      //         accessorFn: (row) => {
      //           //convert to Date for sorting and filtering
      //           const sDay = new Date(row.startDate);
      //           sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
      //           return sDay;
      //         },
      //         id: "startDate",
      //         header: "Start Date",
      //         filterVariant: "date-range",
      //         sortingFn: "datetime",
      //         enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
      //         Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
      //         Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      //       },
      //     ],
      //   },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
        }}
      >
        <Image
          alt="avatar"
          height={200}
          src={row.original.img}
          style={{ borderRadius: "50%", height: "150px", width: "300px" }}
        />
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <Box>
            <Title>Road:</Title>
            <Text>&quot;{row.original.road}&quot;</Text>
          </Box>
          <Box>
            <Title>Bus Type:</Title>
            <Text>&quot;{row.original.category}&quot;</Text>
          </Box>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Details</Menu.Item>
      </>
    ),
    // renderTopToolbarCustomActions: ({ table }) => {
    //   const handleDeactivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("deactivating " + row.getValue("name"));
    //     });
    //   };

    //   const handleActivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("activating " + row.getValue("name"));
    //     });
    //   };

    //   const handleContact = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("contact " + row.getValue("name"));
    //     });
    //   };

    // //   return (
    // //     <div style={{ display: "flex", gap: "8px" }}>
    // //       <Button
    // //         color="red"
    // //         disabled={!table.getIsSomeRowsSelected()}
    // //         onClick={handleDeactivate}
    // //         variant="filled"
    // //       >
    // //         Deactivate
    // //       </Button>
    // //       <Button
    // //         color="green"
    // //         disabled={!table.getIsSomeRowsSelected()}
    // //         onClick={handleActivate}
    // //         variant="filled"
    // //       >
    // //         Activate
    // //       </Button>
    // //       <Button
    // //         color="blue"
    // //         disabled={!table.getIsSomeRowsSelected()}
    // //         onClick={handleContact}
    // //         variant="filled"
    // //       >
    // //         Contact
    // //       </Button>
    // //     </div>
    // //   );
    // },
  });

  return <MantineReactTable table={table} />;
};

export default BusTable;
