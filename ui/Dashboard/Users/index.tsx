import usePaginate from "@/lib/hooks/usePaginate";
import { UsersPageProps } from "@/lib/interfaces";
import { Avatar, Box, Divider, Loader, Pagination, Text } from "@mantine/core";
import React from "react";

const Users: React.FC<UsersPageProps> = ({ users, title, loading }) => {
  const paginate = usePaginate({ data: users, itemsPerPage: 3 });
  const { handlePageChange, paginateData, totalPage } = paginate;
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? "#212529" : "#F1F3F5",
        width: "100%",
        padding: "7px 7px",
        marginTop: "35px",
        borderRadius: "5px",
      })}
    >
      <Text>Users </Text>
      <Divider mb={9} size="sm" />
      {loading ? (
        <Loader />
      ) : (
        paginateData.map(({ _id, name, email, createdAt }) => {
          return (
            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                marginTop: "9px",
                alignItems: "center",
              })}
              key={_id}
            >
              <Box style={{ marginBottom: "" }}>
                <Avatar color="cyan" radius="xl">
                  {name.toUpperCase().slice(0, 2)}
                </Avatar>
              </Box>
              <Box>
                <Text>{name}</Text>
                <Text size={13} style={{ marginTop: "-3px" }}>
                  {email.slice(0, 15)}..
                </Text>
              </Box>
              <Text>{createdAt.slice(0, 10)}</Text>
            </Box>
          );
        })
      )}

      <Pagination
        total={totalPage}
        onChange={handlePageChange}
        radius="xs"
        sx={{ justifyContent: "center", marginTop: "22px" }}
      />
    </Box>
  );
};

export default Users;
