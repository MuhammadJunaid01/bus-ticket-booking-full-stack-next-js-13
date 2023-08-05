import { BusProps } from "@/lib/interfaces";
import React from "react";
import BusImage from "@/public/bus.png";
import { Box, Card, Text } from "@mantine/core";
import { Table } from "@mantine/core";
import Image from "next/image";

const Bus: React.FC<BusProps> = ({ bus }) => {
  console.log("bus", bus);
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        [theme.fn.largerThan("sm")]: {
          width: "50%",
          margin: "0 auto",
          marginTop: "20px",
          //   textAlign: "center",
        },
      })}
    >
      <Card>
        <Image
          style={{ height: "200px", width: "400px" }}
          src={BusImage}
          alt="bus image"
        />
        <Table>
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Bus Type</th>
              <th>Total Seats</th>
              <th>seat Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bus.busNumber}</td>
              <td>{bus.busType}</td>
              <td>{bus.totalSeats}</td>
              <td>{bus.seatPrice}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Box>
  );
};

export default Bus;
