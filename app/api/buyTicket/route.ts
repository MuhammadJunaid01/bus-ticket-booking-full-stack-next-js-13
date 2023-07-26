import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  connectDB();

  const body = await req.json();
  const { userId, busId, seatNumber, boardingPlace, destination } = body;
  const bus = await Bus.findById(busId);

  if (!bus) {
    throw new Error("Bus not found");
  }

  // Check if the seat is available
  if (bus.availableSeats <= 0) {
    throw new Error("No available seats");
  }

  // Check if the seat is already taken
  const isSeatTaken = bus.passengers.some(
    (passenger: { seatNumber: number }) => passenger.seatNumber === seatNumber
  );
  if (isSeatTaken) {
    throw new Error("Seat is already taken");
  }

  // Check payment verification status

  // Add the ticket details to the bus
  bus.passengers.push({
    seatNumber,
    user: userId,
    boardingPlace,
    destination,
    purchaseDate: new Date(),
  });

  // Decrement the availableSeats count
  bus.availableSeats--;

  // Save the updated bus document
  await bus.save();

  const ticket = new Ticket({
    seatNumber,
    user: userId,
    boardingPlace,
    destination,
    purchaseDate: new Date(),
    isPayment: false, // Set the payment status
  });

  await ticket.save();
};
