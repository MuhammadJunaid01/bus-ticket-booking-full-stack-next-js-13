import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import Ticket from "@/lib/models/ticket.models";
export function verifyToken(token: string) {
  try {
    const decodedToken = jwt.verify(token, process.env.AUTH_SECRET);
    return decodedToken;
  } catch (error) {
    return null;
  }
}
export const GET = async (request: NextRequest, { params }: any) => {
  connectDB();
  const userID = params.ticketID;
  const authHeader = request.headers.get("authorization");
  const token = authHeader
    ? authHeader.replace(/^Bearer\s+/i, "").replace(/"/g, "")
    : "";
  try {
    const decodedToken = verifyToken(token);
    if (!decodedToken) {
      return new NextResponse(
        JSON.stringify({
          message: "token is expired",
        }),
        {
          status: 401,
        }
      );
    }
    // return new NextResponse(
    //   JSON.stringify({ message: "hello check api", decodedToken })
    // );
    const ticket = await Ticket.find({
      user: userID,
    });
    if (!ticket) {
      return new NextResponse(JSON.stringify({ message: "something wrong!" }), {
        status: 400,
      });
    }
    return new NextResponse(JSON.stringify({ message: "your ticket", ticket }));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: "something wrong!" }), {
      status: 500,
    });
  }
};
