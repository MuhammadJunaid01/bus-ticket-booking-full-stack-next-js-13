import React from "react";
import ContactUsImage from "@/public/contact-us.svg";
import { Box, Grid, MediaQuery, Text } from "@mantine/core";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Box
      sx={(theme) => ({
        [theme.fn.largerThan("sm")]: {
          padding: "45px 18px",
        },
      })}
    >
      <Grid>
        <Grid.Col span={12} md={6}>
          <Text>
            Thank you for choosing Your AR Poribohon for your bus ticketing
            needs. We value your trust and are committed to providing
            exceptional customer service. If you have any questions, concerns,
            or need assistance, our friendly and knowledgeable support team is
            here to help you.
            <br /> <br />
            Phone: 01835859540 Email: support@AR Poribohon.com Our customer
            support team is available 24/7 to address any inquiries or issues
            you may encounter.
            <br /> <br />
            Whether you need help with booking a ticket, have questions about
            our services, or require assistance during your journey, don t
            hesitate to reach out to us. we are passionate about providing you
            with the best travel experience. Your satisfaction is our priority,
            and we are dedicated to assisting you at every step of your journey.
            <br /> <br />
            Feel free to contact us anytime, and let us make your bus travel as
            smooth and enjoyable as possible. Thank you for choosing AR
            Poribohon Safe travels, AR Poribohon Team For book bus sit text :
            Each customer can book a maximum of four tickets.
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
                src={ContactUsImage}
                alt="Contact Us Image "
              />
            </Box>
          </MediaQuery>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default ContactUs;
