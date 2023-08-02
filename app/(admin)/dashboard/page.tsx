/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useCustomHover } from "@/redux/features/dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DashboardTopbar, SideBar } from "@/ui/Dashboard";
import { Box, Divider, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const AdminPage = () => {
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div style={{ padding: "0px 7px" }}>
      <Grid>
        {isDesktop ? (
          <Grid.Col span={12} md={open ? 0.8 : 2}>
            <Box
              sx={(theme) => ({
                position: open && isHover ? "absolute" : "relative",
                width: open && isHover ? "300px" : "100%",
                // backgroundColor: open && isHover ? "red" : "green",
                // // overflow: "hidden",
              })}
              onMouseEnter={() => dispatch(useCustomHover())}
              onMouseLeave={() => dispatch(useCustomHover())}
              style={{ position: "relative" }}
            >
              <SideBar />
            </Box>

            {/* <Divider size="xl" orientation="vertical" /> */}
          </Grid.Col>
        ) : null}
        <Grid.Col span={12} md={open ? 11.2 : 10}>
          <DashboardTopbar />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AdminPage;
