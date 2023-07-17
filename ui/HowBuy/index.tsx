import {
  Box,
  Button,
  Divider,
  Modal,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconArrowMoveRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const HowBuy = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        [theme.fn.largerThan("sm")]: {
          marginTop: "30px",
        },
      })}
    >
      <Modal
        opened={opened}
        onClose={close}
        title=" HOW TO BUY TICKETS"
        centered
        size="lg"
      >
        <Divider />
        <Text
          sx={(theme) => ({
            fontSize: theme.fontSizes.xl,
            fontWeight: "bold",
          })}
          my={30}
        >
          Steps For Buying Tickets
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: theme.fontSizes.md,
            fontWeight: "bolder",
            borderBottom: `1px solid ${
              theme.colorScheme === "dark" ? "#72BF44" : ""
            }`,
            width: "67px",
          })}
          my={30}
        >
          Step 01
        </Text>
        <Text style={{ display: "flex", gap: "8px" }}>
          <IconArrowMoveRight />
          <span>
            Select FROM location, TO location and JOURNEY DATE. Return Journey
            Date is optional.
          </span>
        </Text>
        <Text style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <IconArrowMoveRight />
          <span>Press SEARCH button.</span>
        </Text>
      </Modal>
      <UnstyledButton
        variant="white"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? "#72BF44" : "#DEE2E6",
          color: theme.colorScheme === "dark" ? "white" : "",
          padding: theme.spacing.md,
          borderRadius: theme.radius.sm,
          //   fontWeight: "600",
        })}
        onClick={open}
      >
        HOW TO BUY TICKETS
      </UnstyledButton>
    </Box>
  );
};

export default HowBuy;
