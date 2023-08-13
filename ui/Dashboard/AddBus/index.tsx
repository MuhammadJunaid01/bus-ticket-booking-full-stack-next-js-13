import { addBusStyles, userProfileStyles } from "@/lib/styles";
import { Box, Button, Card, Select, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import AddBusLogo from "@/public/add-buss.gif";
import Image from "next/image";
import Input from "@/ui/Input";
import { IconChevronDown } from "@tabler/icons-react";
import { domain } from "@/lib/api";
const AddBuss = () => {
  const [busNumber, setBusNumber] = React.useState<string>("");
  const [totalSeats, setTotalSeats] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const { classes: input } = userProfileStyles({ Icon: null });

  const { classes } = addBusStyles();
  const handleSaveBus = () => {
    const data = {};
    try {
      fetch(`${domain}/api/buses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json().then((responseData) => {
            if (!res.ok) {
              throw new Error(responseData.error || "An error occurred");
            }
            return responseData;
          });
        })
        .then((data) => {
          console.log("data");
        })
        .catch((error: any) => {
          console.log("error", error.message);
        });
    } catch (error) {}
  };
  return (
    <Box className={classes.container}>
      <Text>Add Bus</Text>
      <Card py={80}>
        <Box className={classes.busInput}>
          <Input label="Bus Number" type="text" setState={setBusNumber} />
          <Input label="Total Seats" type="text" setState={setTotalSeats} />
          <Input label="Road Name" type="text" setState={setTotalSeats} />
          <Select
            mt={18}
            rightSection={<IconChevronDown size="1rem" />}
            classNames={{ input: input.input }}
            value={value}
            onChange={setValue}
            data={["AC", "Non-AC", "Coach-Bus"]}
            placeholder="Select Bus type"
          />
          <Input label="Seat Price" type="text" setState={setTotalSeats} />
          <Input label="Departure Time" type="text" setState={setTotalSeats} />
        </Box>
        <Box
          sx={(theme) => ({
            marginTop: 15,
            [theme.fn.largerThan("sm")]: {
              display: "flex",
              // alignItems: "flex-end",
              justifyContent: "flex-end",
            },
          })}
        >
          <Button
            onClick={handleSaveBus}
            sx={(theme) => ({
              width: "100%",
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[8]
                  : theme.colors.gray[5],
              textAlign: "center",
              padding: "7px 3px",
              [theme.fn.largerThan("sm")]: {
                width: "10%",
                padding: "10px 3px",
              },
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "inherit",
                border: `1px solid ${
                  theme.colorScheme === "dark" ? "#51D784" : ""
                }`,
              },
            })}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AddBuss;
