import { connectDB } from "@/lib/db";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  connectDB();
  try {
    const tickets = await Ticket.find({});
    if (!tickets) {
      return new NextResponse(JSON.stringify({ message: "something wrong" }), {
        status: 400,
      });
    }
    return new NextResponse(JSON.stringify({ message: "tickets", tickets }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
