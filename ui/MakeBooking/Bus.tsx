import { BussesTypes } from "@/lib/types";
import { loadUi } from "@/lib/utils";
import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Modal,
  Stepper,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArmchair } from "@tabler/icons-react";
import React from "react";
import BookingForm from "./BookingForm";
import SimpleBusTable from "./BusTable";
export interface BusPropsTypes {
  opend: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  bus: BussesTypes | null;
  dest: string;
  date: string;
  origin: string;
  road: string;
}
const Bus: React.FC<BusPropsTypes> = ({
  opend,
  closeModal,
  bus,
  dest,
  date,
  origin,
  road,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [isTableShow, setIsTableShow] = React.useState<boolean>(true);
  const [seatNumber, setSeatNumber] = React.useState<number[]>([]);
  const [active, setActive] = React.useState(1);
  const [name, setName] = React.useState<string>("");
  const [id, setId] = React.useState<number>(0);
  const [email, setEmail] = React.useState<string>("");
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleSelect = async () => {
    setVisible(true);
    await loadUi(1000);
    setVisible(false);
    setIsTableShow(false);
    nextStep();
  };
  const handleSeatSelect = (index: number) => {
    // Check if the seat is already selected
    if (seatNumber.includes(index)) {
      setSeatNumber((prevSelect) =>
        prevSelect.filter((seatIndex) => seatIndex !== index)
      );
    } else {
      if (seatNumber.length >= 4) {
        notifications.show({
          title: "You can only select up to 4 seats.",
          message: "Hey there, You can only select up to 4 seats.! 🤥",
        });
      } else {
        setSeatNumber((prevSelect) => [...prevSelect, index]);
      }
    }
  };
  // console.log(bus);
  return (
    <>
      <Modal
        opened={opend}
        onClose={() => closeModal(false)}
        mt={33}
        size="xl"
        centered
        // title="m,fakmfjk"
      >
        <LoadingOverlay visible={visible} overlayBlur={2} />

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Select Bus">
            Step 1 Select Bus
            {/* <Table>
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
                    <Button onClick={handleSelect} variant="outline">
                      Select
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table> */}
            <SimpleBusTable
              roadName={bus?.roadName}
              dest={dest}
              date={date}
              totalSeats={bus?.totalSeats}
              seatPrice={bus?.seatPrice}
              handleSelect={handleSelect}
            />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Select Seat ">
            Step 2 Select Seat:
            <Box
              sx={(theme) => ({
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: theme.spacing.lg,
                height: "300px",
                overflowY: "scroll",
                // Adjust the gap between the grid items as needed
              })}
            >
              {Array.from({ length: bus?.totalSeats ?? 0 }).map((_, index) => {
                return (
                  <Box
                    onClick={() => handleSeatSelect(index)}
                    style={{
                      display: "flex",
                      gap: "11px",
                      cursor: "pointer",
                    }}
                    key={index}
                  >
                    <IconArmchair
                      color={seatNumber.includes(index) ? "red" : "white"}
                    />
                    <Text color={seatNumber.includes(index) ? "red" : "unset"}>
                      {index}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="fill information box">
            <BookingForm setId={setId} setName={setName} setEmail={setEmail} />
          </Stepper.Step>
          <Stepper.Completed>
            <Box
              sx={(theme) => ({
                textAlign: "center",
              })}
            >
              <Text>ID: {id}</Text>
              <Text>Name: {name}</Text>
              <Text>Email: {email}</Text>
              <Text>Date: {date}</Text>
              <Text>Origin: {origin}</Text>
              <Text>Destination: {dest}</Text>
              <Text>Road: {road}</Text>
              <Text>BusNumber: {bus?._id}</Text>
              {seatNumber.map((seat, index) => {
                return <Text key={index}>Seatnumber: {seat}</Text>;
              })}

              <Button my={11}>By a ticket</Button>
            </Box>
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>

        {/* <Button onClick={() => closeModal(false)}>Close Modal</Button> */}
      </Modal>
    </>
  );
};

export default Bus;
