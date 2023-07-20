import { connectDB } from "@/libs/db";
import Busses from "@/libs/models/buss.models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  connectDB();
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
