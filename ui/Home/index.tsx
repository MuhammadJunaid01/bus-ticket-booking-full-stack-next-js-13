/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { busRouteData, someFactsData, storiesData } from "@/lib/data";
import { BusesApiResponseType } from "@/lib/types";
import { getAllBussData } from "@/redux/features/busses";
import { useAppDispatch } from "@/redux/hooks";
import { BusRoutes, Header, Navbar, SomeFacts, Stories } from "@/ui";
import { Container } from "@mantine/core";
const url =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.NEXT_PUBLIC_BASE_URL;
const fetchAllBuss = async () => {
  try {
    const res = await fetch(`${url}/api/buses`);
    const data: BusesApiResponseType = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message); // Rethrow the error to be handled in the useEffect
  }
};
const HomePage = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = React.useState<BusesApiResponseType | null>(null);
  console.log("URL ", url);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const bussData = await fetchAllBuss();
        setData(bussData);
        if (bussData.OK) {
          dispatch(getAllBussData(bussData.data)); // Assuming you have an action called `getAllBussData` to dispatch
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
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
        {/* <Suspense
          fallback={<p>waite Please! Loading buses Data from database...</p>}
        >
          <OurBuses title="Our Available Buss" />
        </Suspense> */}
      </Container>
    </div>
  );
};

export default HomePage;
