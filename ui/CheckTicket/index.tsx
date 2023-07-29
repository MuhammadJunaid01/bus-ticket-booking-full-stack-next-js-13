"use client";
import { Box, Text } from "@mantine/core";
import React from "react";
export interface CheckTicketProps {
  title: string;
}
const CheckTicket: React.FC<CheckTicketProps> = ({ title }) => {
  return (
    <Box>
      <Text size={40} mt={20} fw={600} align="center">
        {title}
      </Text>
    </Box>
  );
};

export default CheckTicket;
