import { SomeFactsProps } from "@/libs/interfaces";
import { factsStyles } from "@/libs/styles";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const SomeFacts: React.FC<SomeFactsProps> = ({ data, title }) => {
  const { classes, theme } = factsStyles();
  const {
    constainer,
    title: titleStyl,
    factsConatiner,
    factBox,
    counter,
    description,
  } = classes;
  return (
    <Box className={constainer}>
      <Text className={titleStyl}>{title}</Text>
      <Box className={factsConatiner}>
        {data.map((data, index) => {
          return (
            <Box className={factBox} key={index}>
              <Box className={classes.imageBox}>
                <Image
                  className={classes.image}
                  width={30}
                  height={30}
                  src={data.icon}
                  alt=""
                />
              </Box>
              <Text className={counter}>
                <CountUp end={data.dataNumber} /> +
              </Text>
              <Text className={description}>{data.desc}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SomeFacts;
