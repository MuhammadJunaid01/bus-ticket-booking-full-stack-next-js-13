import { SomeFactsProps } from "@/lib/interfaces";
import { factsStyles } from "@/lib/styles";
import { Box, Grid, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useMantineTheme } from "@mantine/core";
// import cx from "classnames";
import { useHover } from "@mantine/hooks";

const SomeFacts: React.FC<SomeFactsProps> = ({ data, title }) => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  const isLightMode = theme.colorScheme === "light";

  const { classes } = factsStyles();
  const {
    constainer,
    title: titleStyl,
    factsConatiner,
    factBox,
    counter,
    description,
    lighModeShadow,
  } = classes;
  return (
    <Box className={constainer}>
      <Text className={titleStyl}>{title}</Text>
      <Box ref={ref} className={factsConatiner}>
        {data.map((data, index) => {
          return (
            <Box
              className={`${factBox} ${
                isLightMode && index === 1 && hovered === false
                  ? lighModeShadow
                  : ""
              }`}
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
