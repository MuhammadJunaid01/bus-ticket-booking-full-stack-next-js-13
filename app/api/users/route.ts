import { connectDB } from "@/lib/db";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  connectDB();
  try {
    const users = await User.find({});
    if (!users) {
      return NextResponse.json(
        {
          users: null,
          message: "something went wrong!",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      { users: users },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        users: null,
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
};
