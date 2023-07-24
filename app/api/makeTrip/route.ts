import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Trip from "@/lib/models/trip.models";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  connectDB();
  const body = await request.json();
  try {
    const { tripId, seatNumber, boardingPlace, destination } = body;
    const trip = await Trip.findById(tripId);

    if (!trip) {
      // res.status(404).json({ message: "Trip not found" });
      // return;
      return new NextResponse(JSON.stringify({ message: "Trip not found" }), {
        status: 404,
      });
    }

    // Check if the seat is available
    if (trip.availableSeats === 0 || trip.availableSeats < seatNumber) {
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
    trip.availableSeats--;
    trip.passengers.push({
      seatNumber,
      user: "user_id_goes_here", // Replace with the authenticated user's ID
      boardingPlace,
      destination,
    });

    const book = await trip.save();

    // res.status(200).json({ message: "Seat booked successfully" });
    return new NextResponse(
      JSON.stringify({ message: "Seat booked successfully", seat: book }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error booking seat:", error);
    // res.status(500).json({ message: "Internal server error" });
    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
};
