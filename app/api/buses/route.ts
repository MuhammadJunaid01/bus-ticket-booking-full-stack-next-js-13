import { connectDB } from "@/lib/db";
import { default as Bus, default as Busses } from "@/lib/models/buss.models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  connectDB();
  // function getRandomNumber(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // const totalBuses = 32;
  // const busTypes = ["AC", "Non-AC", "Coach-Bus"];
  // const minSeatPrice = 50;
  // const maxSeatPrice = 100;

  // // Loop through all the buses and create one for each road
  // for (let i = 1; i <= totalBuses; i++) {
  //   const randomRoute =
  //     busRouteData[getRandomNumber(0, busRouteData.length - 1)];
  //   const randomBusType = busTypes[getRandomNumber(0, busTypes.length - 1)];
  //   const randomSeatPrice = getRandomNumber(minSeatPrice, maxSeatPrice); // Randomly choose a seat price

  //   const busData = {
  //     busNumber: getRandomNumber(10000, 99999),
  //     totalSeats: 70,
  //     availableSeats: 70,
  //     roadName: randomRoute,
  //     busType: randomBusType,
  //     seatPrice: randomSeatPrice, // Assign the seat price
  //     // Add other relevant bus information here
  //   };

  //   await Bus.create(busData);
  // }
  try {
    const res = await Busses.find({});
    if (!res) {
      return new NextResponse(
        JSON.stringify({ OK: false, msg: "something wrong!", data: null })
      );
    }
    return new NextResponse(
      JSON.stringify({
        OK: true,
        msg: "sucessfully data retrive from mongoDB",
        data: res,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ OK: false, msg: error.message, data: null }),
      {
        status: 400,
      }
    );
  }
};

export const POST = async (request: NextRequest) => {
  connectDB();

  const body = await request.json();
  try {
    const { busId, seatNumber, boardingPlace, destination } = body;
    const bus = await Bus.findById(busId);

    if (!bus) {
      // res.status(404).json({ message: 'Bus not found' });
      // return;
      return new NextResponse(JSON.stringify({ message: "Bus not found" }), {
        status: 404,
      });
    }

    // Check if the seat is available
    if (bus.availableSeats === 0 || bus.availableSeats < seatNumber) {
      // res.status(400).json({ message: "Seat not available" });
      // return;
      return new NextResponse(
        JSON.stringify({ message: "Seat not available" }),
        {
          status: 400,
        }
      );
    }

    // Update seat availability and save the user's information
    bus.availableSeats--;
    bus.passengers.push({
      seatNumber,
      user: "64bc548c90adcc77caed0e89", // Replace with the authenticated user's ID
      boardingPlace,
      destination,
    });

    const seat = await bus.save();

    // res.status(200).json({ message: "Seat booked successfully" });
    return new NextResponse(
      JSON.stringify({ message: "Seat booked successfully", data: seat }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error booking seat:", error);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 404,
    });
  }
};
