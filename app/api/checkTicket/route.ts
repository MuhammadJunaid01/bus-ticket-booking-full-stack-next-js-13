import { connectDB } from "@/lib/db";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    connectDB();
    const body = await req.json();
    const { ticketId } = body;
    if (ticketId === "" || ticketId == undefined) {
      return new NextResponse(
        JSON.stringify({ message: "Please input a valid ticket id." }),
        {
          status: 404,
        }
      );
    }
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return new NextResponse(
        JSON.stringify({ message: "something wrong! please  try again!" }),
        {
          status: 404,
        }
      );
    }
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message:
          process.env.NODE_ENV === "production"
            ? "something wrong."
            : error.message,
      }),
      {
        status: 500,
      }
    );
  }
};
