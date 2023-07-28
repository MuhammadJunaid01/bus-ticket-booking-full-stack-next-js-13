import { connectDB } from "@/lib/db";
import { limiter } from "@/lib/limiter";
import Buses from "@/lib/models/buss.models";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest, { params }: any) => {
  connectDB();

  req.headers.append("origin", req.nextUrl.pathname);
  const origin = req.headers.get("origin");
  const remaining = await limiter.removeTokens(1);
  const id = params.busID;
  console.log("id", id);
  console.log("remaining", remaining);
  if (remaining < 0) {
    return new NextResponse(JSON.stringify({ message: "Too many request" }), {
      status: 429,
      statusText: "Too many request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  try {
    const bus = await Buses.findOne({ busNumber: id });
    if (!bus) {
      return new NextResponse(
        JSON.stringify({
          OK: false,
          data: null,
          msg: "something wrong! try again!",
        })
      );
    }
    return new NextResponse(
      JSON.stringify({
        OK: true,
        msg: "sucessfully data retrive from mongoDB",
        data: bus,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ OK: false, msg: error.message }));
  }
};
