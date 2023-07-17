import React from "react";

import { Container } from "@mantine/core";
import { Header, Navbar } from "@/ui";
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
      </Container>
    </div>
  );
};

export default HomePage;
