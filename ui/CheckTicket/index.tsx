"use client";
import { Box, Card, MediaQuery, Text, TextInput } from "@mantine/core";
import React from "react";
import CheckTicketIMG from "@/public/checkTicket.svg";
import Image from "next/image";
import { checkTicketStyles } from "@/lib/styles/checkTicket.styles";
import { IconSearch } from "@tabler/icons-react";
import { isValidID } from "@/lib/utils";
// import { isValidID } from "@/lib/utils";
export interface CheckTicketProps {
  title: string;
}
const CheckTicket: React.FC<CheckTicketProps> = ({ title }) => {
  const { classes } = checkTicketStyles();
  const [id, setID] = React.useState<string>("");

  const [error, setError] = React.useState<boolean>(false);
  const {
    container,
    content,
    imgStyle,
    inputStyle,
    serchIcon,
    searchInputBox,
  } = classes;
  //   const isValidID = (): boolean => {
  //     console.log("ID", id);
  //     let validId: boolean;
  //     if (id.length <= 24) {
  //       validId = false;
  //     } else {
  //       validId = true;
  //     }
  //     return validId;
  //   };
  const handleChanegeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value);
    if (!isValidID(id)) {
      setError(true);
    } else {
      setError(false);
    }
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
              //   error={error ? "Invalid email" : null}
              placeholder="Your name"
              // label="Full name"
              withAsterisk
              variant="unstyled"
              onBlur={handleChanegeInput}
            />
            {error ? <Text color="red">Invalid ID</Text> : null}
            <Box className={serchIcon}>
              <IconSearch />
            </Box>
          </Box>
          <Image
            className={imgStyle}
            src={CheckTicketIMG}
            width={200}
            height={180}
            alt="check ticket logo"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default CheckTicket;
