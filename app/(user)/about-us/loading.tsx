"use client";
import React from "react";
import { Box, Loader } from "@mantine/core";
const loading = () => {
  return (
    <div>
      <Loader
        style={{ fontSize: "250px", height: "400px", textAlign: "center" }}
        size="xl"
        variant="bars"
      />
    </div>
  );
};

export default loading;
