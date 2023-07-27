import { Button, Table } from "@mantine/core";
import React from "react";

export interface BusTableProps {
  roadName?: string;
  dest: string;
  date: string;
  totalSeats?: number;
  seatPrice?: number;
  handleSelect: () => void;
}
const SimpleBusTable: React.FC<BusTableProps> = ({
  roadName,
  dest,
  date,
  handleSelect,
  totalSeats,
  seatPrice,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Route </th>
            <th>Destination</th>
            <th>Date </th>
            <th>Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{roadName}</td>
            <td>{dest}</td>
            <td>{date}</td>
            <td>{totalSeats}</td>
            <td>{seatPrice}</td>
            <td>
              <Button onClick={handleSelect} variant="outline">
                Select
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SimpleBusTable;
