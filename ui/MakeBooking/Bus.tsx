import { BussesTypes } from "@/lib/types";
import { Button, Modal, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export interface BusPropsTypes {
  opend: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  bus: BussesTypes | null;
  dest: string;
  date: string;
}
const Bus: React.FC<BusPropsTypes> = ({
  opend,
  closeModal,
  bus,
  dest,
  date,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Modal
      opened={opend}
      onClose={() => closeModal(false)}
      mt={33}
      size="lg"
      centered
    >
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
            <td>{bus?.roadName}</td>
            <td>{dest}</td>
            <td>{date}</td>
            <td>{bus?.totalSeats}</td>
            <td>{bus?.seatPrice}</td>
            <td>
              <Button>Action</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Button onClick={() => closeModal(false)}>Close Modal</Button>
    </Modal>
  );
};

export default Bus;
