import { RoadsPropsType } from "@/lib/interfaces";
import { Box, Pagination, Text, Title } from "@mantine/core";
import { IconRoad } from "@tabler/icons-react";
import React from "react";
const Roads: React.FC<RoadsPropsType> = ({
  title,
  data,
  totalPage,
  onClick,
}) => {
  return (
    <Box style={{ width: "100%" }}>
      <Title align="center" mb={11}>
        {title}
      </Title>
      {data.map((road, index) => {
        return (
          <Box
            key={index}
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              border: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.green[1]
              }`,
              padding: "6px 3px",
              width: "70%",
              margin: "0 auto",
              marginBottom: "7px",
              borderRadius: theme.radius.sm,
              cursor: "pointer",
            })}
          >
            <Text>{road}</Text>
            <IconRoad />
          </Box>
        );
      })}

      <Pagination
        total={totalPage}
        onChange={onClick}
        radius="xs"
        sx={{ justifyContent: "center", marginTop: "22px" }}
      />
    </Box>
  );
};

export default Roads;
