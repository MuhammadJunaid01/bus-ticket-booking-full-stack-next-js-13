import { connectDB } from "@/lib/db";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (request: NextRequest) => {
  return new NextResponse(JSON.stringify({ message: "hello check api" }));
};
export const POST = async (req: NextRequest) => {
  try {
    connectDB();
    const body = await req.json();
    const { ticketId } = body;
    // console.log("ticketId", ticketId);
    const authHeader = req.headers.get("authorization");
    console.log("authHeader", authHeader);
    if (ticketId === "" || ticketId == undefined) {
      return new NextResponse(
        JSON.stringify({ message: "Please input a valid ticket id." }),
        {
          status: 404,
        }
      );
    }
    const ticket = await Ticket.findById(ticketId);
    // console.log("TICKET", ticket);
    if (!ticket) {
      return new NextResponse(
        JSON.stringify({ message: "something wrong! please  try again!" }),
        {
          status: 404,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "your ticket status", data: ticket }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log("error", error.message);
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
