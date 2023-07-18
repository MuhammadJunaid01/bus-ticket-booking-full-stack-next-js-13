import { SomeFactsProps } from "@/libs/interfaces";
import { factsStyles } from "@/libs/styles";
import { Box, Card, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const SomeFacts: React.FC<SomeFactsProps> = ({ data, title }) => {
  const { classes, theme } = factsStyles();
  return (
    <Box
      sx={(theme) => ({
        height: "75vh",
        width: "100%",

        textAlign: "center",
        [theme.fn.largerThan("sm")]: {
          marginTop: "40px",
          padding: "20px 0px",
        },
      })}
    >
      <Text
        sx={(theme) => ({
          fontWeight: "bold",
          color: theme.colorScheme === "dark" ? "unset" : "#5B2192",
          [theme.fn.largerThan("sm")]: {
            fontSize: "44px",
          },
        })}
      >
        {title}
      </Text>
      <Box
        sx={(theme) => ({
          textAlign: "center",
          [theme.fn.largerThan("sm")]: {
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "90px",
            gap: "30px",
          },
        })}
      >
        {data.map((data, index) => {
          return (
            <Box
              sx={(theme) => ({
                width: "30%",
                margin: "0 auto",
                position: "relative",
                cursor: "pointer",
                [theme.fn.largerThan("sm")]: {
                  backgroundColor:
                    theme.colorScheme === "dark" ? "#A37CF0" : "",
                  borderRadius: theme.radius.sm,
                  paddingBottom: "11px",
                },
              })}
              key={index}
            >
              <Box className={classes.imageBox}>
                <Image
                  className={classes.image}
                  width={30}
                  height={30}
                  src={data.icon}
                  alt=""
                />
              </Box>
              <Text
                sx={(theme) => ({
                  fontWeight: "bold",
                  [theme.fn.largerThan("sm")]: {
                    fontSize: "22px",
                    color: theme.colorScheme === "dark" ? "white" : "#5b2192",
                    margin: "15px 0px",
                  },
                })}
              >
                <CountUp end={data.dataNumber} /> +
              </Text>
              <Text
                sx={(theme) => ({
                  [theme.fn.largerThan("sm")]: {
                    fontSize: "22px",
                    color: theme.colorScheme === "dark" ? "white" : "",
                  },
                })}
              >
                {data.desc}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SomeFacts;
