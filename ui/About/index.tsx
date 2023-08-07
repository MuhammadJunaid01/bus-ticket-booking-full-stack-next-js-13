import React from "react";
import { Box, Grid, MediaQuery, Text } from "@mantine/core";
import AboutUsImage from "@/public/about-us.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box pos="relative" py={20} px={11}>
      <Grid>
        <Grid.Col span={12} md={6}>
          <Text
            sx={(theme) => ({
              [theme.fn.largerThan("sm")]: {
                fontsize: 15,
                fontWeight: 400,
                marginTop: 12,
              },
            })}
          >
            Welcome to AR Poribohon, your one-stop destination for hassle-free
            and convenient bus ticket bookings. We are an innovative online
            platform that aims to redefine the way you travel by providing
            booked bus tickets and exceptional customer service. Our Mission is
            revolutionize the way you book bus tickets and make your travel
            experience smooth, enjoyable, and affordable.
          </Text>
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box
              sx={(theme) => ({
                width: "100%",
                height: "40vh",
              })}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                width={200}
                height={100}
                src={AboutUsImage}
                alt="about image"
              />
            </Box>
          </MediaQuery>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AboutUs;
