import { RoadsPropsType } from "@/lib/interfaces";
import { Box, Title, Text, Pagination } from "@mantine/core";
import React from "react";
import { IconRoad } from "@tabler/icons-react";
const Roads: React.FC<RoadsPropsType> = ({
  title,
  data,
  totalPage,
  onClick,
}) => {
  return (
    <Box>
      <Title>{title}</Title>
      {data.map((road, index) => {
        return (
          <Box key={index}>
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
