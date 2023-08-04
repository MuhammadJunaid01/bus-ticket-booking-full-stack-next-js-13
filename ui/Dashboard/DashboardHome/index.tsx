import { Box, Grid, Text } from "@mantine/core";
import React from "react";
import DashboardCard from "../DashboardCard";
import PercentageBox from "../percentageBox";
import { IconUsers } from "@tabler/icons-react";
import CustomLineChart from "@/ui/Chart/LineChart";
const DashboardHome = () => {
  return (
    <Box>
      <Text mt={11} size={19} fw={700}>
        Welcome back, Junaid
      </Text>

      {/* Dashboard card */}

      <Grid>
        <Grid.Col span={12} md={3.5}>
          <DashboardCard
            title="Target is incomplete"
            chart={<PercentageBox percentage={48} />}
            btnText="Click here"
            info="this month 48% have completed of the given target,  check target"
            isHighlighted
            percentage={0}
          />
        </Grid.Col>
        <Grid.Col span={12} md={8.5}>
          <Grid>
            <Grid.Col span={12} md={6}>
              <DashboardCard
                isHighlighted={false}
                title="Total Passengers"
                chart={<CustomLineChart />}
                btnText="View All"
                info={5500}
                icon={<IconUsers color="white" />}
                percentage={48}
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}></Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
