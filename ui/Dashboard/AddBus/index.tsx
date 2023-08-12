import { addBusStyles, userProfileStyles } from "@/lib/styles";
import { Box, Button, Card, Select, Text } from "@mantine/core";
import React from "react";
import AddBusLogo from "@/public/add-buss.gif";
import Image from "next/image";
import Input from "@/ui/Input";
import { IconChevronDown } from "@tabler/icons-react";
const AddBuss = () => {
  const [busNumber, setBusNumber] = React.useState<string>("");
  const [totalSeats, setTotalSeats] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const { classes: input } = userProfileStyles({ Icon: null });

  const { classes } = addBusStyles();
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
          {/* <Input
            isSelect
            selectData={["AC", "Non-AC", "Coach-Bus"]}
            label="Seat Price"
            type="text"
            setState={setTotalSeats}
          /> */}
        </Box>
        <Box style={{ alignItems: "flex-end" }}>
          <Button>Save</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AddBuss;
