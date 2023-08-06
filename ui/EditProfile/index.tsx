import { userProfileStyles } from "@/lib/styles";
import {
  Box,
  Card,
  Divider,
  Grid,
  Text,
  UnstyledButton,
  FileInput,
} from "@mantine/core";
import React from "react";
import Input from "./Input";

import {
  IconPhoneCall,
  IconBrandWhatsapp,
  IconBrandMailgun,
  IconCloudUpload,
} from "@tabler/icons-react";
import Image from "next/image";

const profilePic =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=120&q=120";
const EditUserProfile = () => {
  const { classes } = userProfileStyles({});
  const [fisrtName, setFisrtName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  React.useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user")!);
    // console.log("user", user);
    // setState(user._id);
  }, []);
  return (
    <Box className={classes.container}>
      <Grid>
        <Grid.Col span={12} md={9.5}>
          <Card className={classes.card}>
            <Box className={classes.cardHeader}>
              <Text className={classes.title}>Edit Profile</Text>
              <Box className={classes.btnBox}>
                <UnstyledButton className={classes.btnFilled}>
                  Cancle
                </UnstyledButton>
                <UnstyledButton className={classes.btnSave}>
                  Save Changes
                </UnstyledButton>
              </Box>
            </Box>
            <Box style={{ textAlign: "center", position: "relative" }}>
              <Image
                src={profilePic}
                width={100}
                height={100}
                className={classes.profilePic}
                alt="change Profile pic"
              />
              <FileInput
                className={classes.uploadFIle}
                label=""
                placeholder=""
                accept="image/png,image/jpeg"
                icon={<IconCloudUpload size={14} />}
                classNames={{ input: classes.rootFileInput }}
              />
            </Box>
            <Divider my="xs" label="General" />
            <Box className={classes.inputBox}>
              <Input type="text" label="First Name" setState={setFisrtName} />
              <Input type="text" label="Last Name" setState={setLastName} />
            </Box>
            <Box className={classes.inputBox}>
              <Input type="text" label="User Name" setState={setFisrtName} />
              <Input type="password" label="Password" setState={setLastName} />
              <Input
                type="password"
                label="Re-Type Password"
                setState={setLastName}
              />
            </Box>
            <Divider my="xs" label="Contact" />
            <Box className={classes.inputBox}>
              <Input
                type="text"
                icon={<IconPhoneCall size={14} />}
                label="Mobile Phone"
                setState={setFisrtName}
              />
              <Input
                type="text"
                icon={<IconBrandWhatsapp size={14} />}
                label="WhatsApp"
                setState={setLastName}
              />
              <Input
                type="email"
                icon={<IconBrandMailgun size={14} />}
                label="Email"
                setState={setLastName}
              />
            </Box>
            <Box className={classes.inputBox}>
              <Input type="text" label="Address" setState={setFisrtName} />
              <Input type="text" label="City" setState={setLastName} />
              <Input type="text" label="Country" setState={setLastName} />
            </Box>
          </Card>
        </Grid.Col>
        <Grid.Col span={12} md={2.5}>
          <Card className={classes.card}>
            <Box>
              <Text className={classes.ticketTitle}>My Ticket Info.</Text>
            </Box>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default EditUserProfile;
