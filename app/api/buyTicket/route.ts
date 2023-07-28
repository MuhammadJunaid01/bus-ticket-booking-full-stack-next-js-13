import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  connectDB();

  const body = await req.json();
  const {
    userId,
    busId,
    seatNumber,
    boardingPlace,
    destination,
    date,
    email,
    id,
    name,
  } = body;
  const bus = await Bus.findById(busId);
  console.log(body);

  if (!bus) {
    throw new Error("Bus not found");
  }

  // Check if the seat is available
  if (bus.availableSeats <= 0) {
    throw new Error("No available seats");
  }

  // Check if the seat is already taken
  const isSeatTaken = bus.passengers.some(
    (passenger: {
      // seatNumber: number[];
      purchaseDate: Date;
      destination: string;
    }) =>
      // passenger.seatNumber.includes(
      //   seatNumber.map((number: number) => number)
      // ) &&
      passenger.purchaseDate.getTime() === new Date(date).getTime() &&
      passenger.destination === destination
  );

  if (isSeatTaken) {
    throw new Error("Seat is already taken");
  }

  // Check payment verification status

  // Add the ticket details to the bus
  bus.passengers.push({
    seatNumber: [0, 1],
    user: userId,
    boardingPlace,
    destination,
    purchaseDate: new Date(),
  });

  // Decrement the availableSeats count
  bus.availableSeats--;

  // Save the updated bus document
  await bus.save();

  const newTicketData = {
    seatNumber: [1, 2, 3], // An array of seat numbers [1, 2, 3]
    user: userId,
    boardingPlace,
    destination,
    purchaseDate: new Date(),
    isPayment: false,
    date: "klmanfianhfiua",
    busNumber: 24321423,
  };

  // Convert seatNumber to an array of numbers and use the spread operator to clone newTicketData
  const newTicket = new Ticket(newTicketData);

  console.log(newTicket); // Output the newTicket object to check the seatNumber format

  // Save the new ticket
  await newTicket.save();
};
