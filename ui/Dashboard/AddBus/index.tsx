import { addBusStyles } from "@/lib/styles";
import Input from "@/ui/EditProfile/Input";
import { Box, Card, Text } from "@mantine/core";
import React from "react";
import AddBusLogo from "@/public/add-buss.gif";
import Image from "next/image";
const AddBuss = () => {
  const { classes } = addBusStyles();
  return (
    <Box className={classes.container}>
      <Text>Add Bus</Text>
      <Card>
        {/* <Input/> */}
        <Box className={classes.logoBox}>
          <Image
            className={classes.logo}
            src={AddBusLogo}
            height={130}
            width={130}
            alt="Add Bus Logo"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default AddBuss;
