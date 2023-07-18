import { SomeFactsProps } from "@/libs/interfaces";
import { Box } from "@mantine/core";
import React from "react";

const SomeFacts: React.FC<SomeFactsProps> = ({ data, title }) => {
  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
      })}
    >
      <h1>{title}</h1>
    </Box>
  );
};

export default SomeFacts;
