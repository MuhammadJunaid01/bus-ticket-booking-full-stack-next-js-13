import React from "react";

import { Container } from "@mantine/core";
import {
  AvailableBuss,
  BusRoutes,
  Header,
  Navbar,
  SomeFacts,
  Stories,
} from "@/ui";
import { busRouteData, someFactsData, storiesData } from "@/libs/data";
import { bussData } from "@/libs/data/bus-data";

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
        <Stories title="OUR FEATURED STORIES" data={storiesData} />
        <AvailableBuss title="AvailableBuss" data={bussData} />
      </Container>
    </div>
  );
};

export default HomePage;
