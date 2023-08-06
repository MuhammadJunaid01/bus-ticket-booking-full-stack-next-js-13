"use client";
import {
  Box,
  Button,
  Card,
  Loader,
  LoadingOverlay,
  MediaQuery,
  Modal,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import CheckTicketIMG from "@/public/checkTicket.svg";
import Image from "next/image";
import { checkTicketStyles } from "@/lib/styles/checkTicket.styles";
import { IconSearch } from "@tabler/icons-react";
import { isValidID } from "@/lib/utils";
import { checkTicketByID, checkTicketParam } from "@/lib/api/checkTicket";
import { TicketData } from "@/lib/interfaces";
import { domain } from "@/lib/api";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
// import { isValidID } from "@/lib/utils";
export interface CheckTicketProps {
  title: string;
}
const CheckTicket: React.FC<CheckTicketProps> = ({ title }) => {
  const { classes } = checkTicketStyles();
  const [id, setID] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [ticketId, setTicketId] = React.useState<string>("");
  const [data, setData] = React.useState<TicketData | undefined>(undefined);
  const [error, setError] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const {
    container,
    content,
    imgStyle,
    inputStyle,
    serchIcon,
    searchInputBox,
    searchBtn,
  } = classes;
  const router = useRouter();

  const handleChanegeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value);
    if (!isValidID(id)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleCheckTicket = async () => {
    if (ticketId === "" || error === true) {
      notifications.show({
        title: "input  your ticket id and your ticket id must be 24 character ",
        message: "Hey there, your code is awesome! 🤥",
      });
      return;
    }
    const endPoint: string = "/api/checkTicket";
    const params: checkTicketParam = {
      endPoint,
      ticketId,
    };
    setVisible(true);
    setLoading(true);
    const result = await checkTicketByID(params);
    console.log(result);
    if (result === `${domain}/auth`) {
      router.push(result);
    }
    if (result.data) {
      setData(result.data);
      // setLoading(false);
      setVisible(false);
    } else {
      setLoading(false);
    }
    // console.log(result);
  };

  return (
    <Box className={container}>
      <Text size={40} mt={20} fw={600} align="center">
        {title}
      </Text>
      <Box>
        <Card className={content}>
          <Box className={searchInputBox}>
            <TextInput
              className={inputStyle}
              placeholder="Your name"
              withAsterisk
              variant="unstyled"
              onChange={handleChanegeInput}
            />
            {error ? <Text color="red">Invalid ID</Text> : null}
            <Box className={serchIcon}>
              <IconSearch onClick={handleCheckTicket} />
            </Box>
          </Box>
          <Image
            className={imgStyle}
            src={CheckTicketIMG}
            width={200}
            height={180}
            alt="check ticket logo"
          />
          <UnstyledButton
            onClick={handleCheckTicket}
            style={{ cursor: error ? "not-allowed" : "pointer" }}
            className={searchBtn}
          >
            Search {loading ? <Loader mt={2} size="xs" /> : null}
          </UnstyledButton>
        </Card>
      </Box>
      <Modal
        opened={loading}
        onClose={() => setLoading(false)}
        title="Your Ticket Information"
        centered
      >
        <Box>
          <LoadingOverlay visible={visible} overlayBlur={2} />
          <Text>Boarding Place: {data?.boardingPlace}</Text>
          <Text>busNumber: {data?.busNumber}</Text>
          <Text>Date: {data?.date}</Text>
          <Text>Payment Status: {data?.isPayment ? "paid" : "unpaid"}</Text>
          <Text>Purchase Date: {data?.purchaseDate}</Text>
          <Text>Seats: {data?.seatNumber.map((seat, index) => seat)}</Text>
        </Box>
      </Modal>
    </Box>
  );
};

export default CheckTicket;
