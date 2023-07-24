import { HowBuy, PleaseCall, SearchBox } from "@/ui";
import { Box, Grid, Text } from "@mantine/core";
import React from "react";

export interface HeaderProps {
  title: string;
  sub_title: string;
}
const Header: React.FC<HeaderProps> = ({ title, sub_title }) => {
  return (
    <Box>
      <Text
        sx={(theme) => ({
          textAlign: "center",
          [theme.fn.largerThan("sm")]: {
            fontSize: "54px",
            color: theme.colorScheme == "dark" ? "#ffffff" : "#ffffff",
          },
        })}
      >
        {title}
      </Text>
      <Text
        sx={(theme) => ({
          textAlign: "center",
          [theme.fn.largerThan("sm")]: {
            fontSize: "30px",
            color: theme.colorScheme == "dark" ? "#ffffff" : "#ffffff",
          },
        })}
      >
        {sub_title}
      </Text>
      <Grid align="center" justify="center">
        <Grid.Col span={12} md={1}></Grid.Col>
        <Grid.Col span={12} md={10}>
          <SearchBox />
        </Grid.Col>
        <Grid.Col span={12} md={1}></Grid.Col>
      </Grid>
      <HowBuy />
      <PleaseCall
        title="Please Call"
        sub_title="For Telephone booking service"
        number={16460}
      />
    </Box>
  );
};

export default Header;
