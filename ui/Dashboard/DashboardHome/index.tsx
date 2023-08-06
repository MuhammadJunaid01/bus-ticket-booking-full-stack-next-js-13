"use client";
import axios from "axios";
import { Box, Grid, Text } from "@mantine/core";
import React from "react";
import { DashboardCard, Users } from "@/ui/Dashboard";
import PercentageBox from "../percentageBox";
import {
  IconUsers,
  IconFileAnalytics,
  IconChartSankey,
} from "@tabler/icons-react";
import CustomLineChart from "@/ui/Chart/LineChart";
import { CircleChart } from "@/ui/Chart";
import {
  totalRevenueData,
  totalTicketSaleData,
  totalpassengersData,
} from "@/lib/data/dashboard-data";
import { domain } from "@/lib/api";
import { notFound } from "next/navigation";
import { User } from "@/lib/types";

const DashboardHome = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    axios
      .get(`${domain}/api/users`)
      .then((response) => {
        if (response.status === 200) {
          return response.data; // Assuming the response data contains the users.
        } else if (response.status === 404) {
          return notFound();
        } else {
          // Handle other status codes or unexpected responses here.
          // For example, you could return an error message or perform other actions.
        }
      })
      .then((users) => {
        // This block will be executed if the request was successful (status 200)
        // or if the notFound() function was called (status 404).
        // You can further process the 'users' data or return it here.
        setUsers(users.users);
        // console.log(users);
      })
      .catch((error) => {
        // Handle the error that occurred during the HTTP request.
        // For example, you could return an error message or log the error.
        console.error("Error fetching users:", error);
        // Return an error response or perform other actions if necessary.
      });
  }, []);
  return (
    <Box>
      <Text mt={11} size={19} fw={700}>
        Welcome back, Junaid
      </Text>

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
          <Users users={users} title={""} />
        </Grid.Col>
        <Grid.Col span={12} md={8.5}>
          <Grid>
            <Grid.Col span={12} md={6}>
              <DashboardCard
                isHighlighted={false}
                title="Total Passengers"
                chart={
                  <CustomLineChart
                    data={totalpassengersData}
                    color={"#8884d8"}
                  />
                }
                btnText="View All"
                info={5500}
                icon={<IconUsers color="white" />}
                percentage={48}
                iconBoxClor="#845ADF"
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
              <DashboardCard
                isHighlighted={false}
                title="Total Revenue"
                chart={
                  <CustomLineChart data={totalRevenueData} color="#2198BE" />
                }
                btnText="View All"
                info={48500}
                icon={<IconFileAnalytics color="white" />}
                percentage={25}
                iconBoxClor="#23B7E5"
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
              <DashboardCard
                isHighlighted={false}
                title="Total ticket sale"
                chart={
                  <CustomLineChart data={totalTicketSaleData} color="#2198BE" />
                }
                btnText="View All"
                info={95000}
                icon={<IconChartSankey color="white" />}
                percentage={30}
                iconBoxClor="#26BF94"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
