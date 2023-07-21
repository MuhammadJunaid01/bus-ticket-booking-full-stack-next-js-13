import { connectDB } from "@/libs/db";
import { limiter } from "@/libs/limiter";
import Buses from "@/libs/models/buss.models";
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
    const bus = await Buses.findById(id);
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
