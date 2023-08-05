import React from "react";
import { footerStyles } from "@/lib/styles";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BusImage from "@/public/bus.png";
const FooterLogo = () => {
  const router = useRouter();

  const { classes } = footerStyles();

  return (
    <Box
      className={classes.logo}
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/")}
    >
      <Text
        size={26}
        fw={900}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? "white" : "black",
        })}
      >
        AR Poribohon
      </Text>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ marginTop: "3px", letterSpacing: "2px" }}
          ff={"cursive"}
          size={12}
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? "white" : "black",
          })}
        >
          SAFE JOURNY
        </Text>
        <Image
          style={{ cursor: "pointer", marginTop: "-8px" }}
          src={BusImage}
          width={70}
          height={44}
          alt="main-logohbhjbjbkjnkjnkjnkj"
        />
      </Box>
    </Box>
  );
};

export default FooterLogo;
