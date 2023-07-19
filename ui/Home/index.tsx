import React from "react";

import { Container } from "@mantine/core";
import { BusRoutes, Header, Navbar, SomeFacts } from "@/ui";
import { busRouteData, someFactsData } from "@/libs/data";

const HomePage = () => {
  return (
    <div className="main-bg">
      <Navbar isHomePage />
      <Container fluid>
        <Header
          title="More Routes, More Tickets"
          sub_title="No 1 online Ticketing Platform"
        />
        <SomeFacts title={"SOME FACTS"} data={someFactsData} />
        <BusRoutes title={"AVAILABLE BUS ROUTES"} data={busRouteData} />
      </Container>
    </div>
  );
};

export default HomePage;
