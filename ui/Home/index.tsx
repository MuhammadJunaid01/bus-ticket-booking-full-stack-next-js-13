import React from "react";

import { Container } from "@mantine/core";
import { Header, Navbar, SomeFacts } from "@/ui";
import { someFactsData } from "@/libs/data";
// import {} ''
const HomePage = () => {
  return (
    <div className="main-bg" style={{ position: "relative" }}>
      <Navbar isHomePage />
      <Container fluid>
        <Header
          title="More Routes, More Tickets"
          sub_title="No 1 online Ticketing Platform"
        />
        <SomeFacts title={"SOME FACTS"} data={someFactsData} />
      </Container>
    </div>
  );
};

export default HomePage;
