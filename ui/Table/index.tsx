// import { BusesTypes } from "@/lib/types";
// import { Box, Button, Image, Menu, Text, Title } from "@mantine/core";
// import { IconDetails, IconUserCircle } from "@tabler/icons-react";
// import {
//   MantineReactTable,
//   useMantineReactTable,
//   type MRT_ColumnDef,
// } from "mantine-react-table";
// import Link from "next/link";
// import { useMemo } from "react";

// const BusTable = ({ data }: { data: BusesTypes[] }) => {
//   const columns = useMemo<MRT_ColumnDef<BusesTypes></BusesTypes>[]>(
//     () => [
//       {
//         id: "_id", //id used to define `group` column
//         header: "",
//         columns: [
//           {
//             accessorFn: (row) => `${row.bussNumber} `, //accessorFn used to join multiple data into a single cell
//             id: "Bus Number", //id is still required when using accessorFn instead of accessorKey
//             header: "Bus Number",
//             size: 250,
//             filterVariant: "autocomplete",
//             Cell: ({ renderedCellValue, row }) => (
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "16px",
//                 }}
//               >
//                 <Image
//                   alt="avatar"
//                   height={30}
//                   src={row.original.img}
//                   style={{ borderRadius: "50%", height: "50px", width: "50px" }}
//                 />
//                 <span>{renderedCellValue}</span>
//               </Box>
//             ),
//           },
//           {
//             accessorKey: "roadName",
//             enableClickToCopy: true,
//             header: "Road",
//             size: 300,
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const table = useMantineReactTable({
//     columns,
//     data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
//     enableColumnFilterModes: true,
//     enableColumnOrdering: true,
//     enableFacetedValues: true,
//     enableGrouping: true,
//     enablePinning: true,
//     enableRowActions: true,
//     enableRowSelection: true,
//     initialState: { showColumnFilters: true },
//     paginationDisplayMode: "pages",
//     positionToolbarAlertBanner: "bottom",
//     renderDetailPanel: ({ row }) => (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: "16px",
//           padding: "16px",
//         }}
//       >
//         <Image
//           alt="avatar"
//           height={200}
//           src={row.original.img}
//           style={{ borderRadius: "50%", height: "150px", width: "300px" }}
//         />
//         <Box
//           sx={{
//             textAlign: "center",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "70px",
//           }}
//         >
//           <Box>
//             <Title>Road:</Title>
//             <Text>{row.original.roadName}</Text>
//           </Box>
//           <Box>
//             <Title>Bus Type:</Title>
//             <Text>{row.original.category}</Text>
//           </Box>
//         </Box>
//         <Menu>
//           <Link href={`buses/${row.original._id}`}>
//             <Menu.Item icon={<IconDetails />}>View Details</Menu.Item>
//           </Link>
//         </Menu>
//       </Box>
//     ),
//     renderRowActionMenuItems: () => (
//       <>
//         <Menu.Item icon={<IconUserCircle />}>View Details </Menu.Item>
//       </>
//     ),
//     renderTopToolbarCustomActions: ({ table }) => {
//       const handleActivate = () => {
//         table.getSelectedRowModel().flatRows.map((row) => {
//           alert("activating " + row.original._id);
//         });
//       };

//       return (
//         <div style={{ display: "flex", gap: "8px" }}>
//           <Button
//             color="green"
//             disabled={!table.getIsSomeRowsSelected()}
//             onClick={handleActivate}
//             variant="filled"
//           >
//             Purchase Ticket
//           </Button>
//         </div>
//       );
//     },
//   });

//   return <MantineReactTable table={table} />;
// };

// export default BusTable;
