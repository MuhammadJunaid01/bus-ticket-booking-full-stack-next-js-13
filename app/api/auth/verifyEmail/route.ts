import { NextRequest, NextResponse } from "next/server";
const domain =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.BASE_URL;
import User, { IUser } from "@/lib/models/user.models";
import { connectDB } from "@/lib/db";
import { cookies } from "next/headers";

const GET = async (req: NextRequest) => {
  const origin = req.headers.get("origin");
  return new NextResponse(JSON.stringify({ message: "cors test" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "text/plain",
    },
  });
};
export const POST = async (req: NextRequest, res: NextResponse) => {
  // const body=await
  connectDB();
  const body = await req.json();
  const { email, token } = body;

  try {
    const user: IUser | null = await User.findOneAndUpdate(
      { email, verificationToken: token },
      { $set: { isVerified: true }, $unset: { verificationToken: 1 } },
      { new: true }
    );

    // const {} = user;
    if (user) {
      // const { password, ...userWithoutPassword } = user;

      const { password, ...userInfo } = user;
      const response = NextResponse.json(
        {
          userInfo,
        },
        { status: 200 }
      );

      // console.log("USER INFO", userInfo);
      const userInfoString = JSON.stringify(userInfo);

      response.cookies.set({
        name: "jwt",
        value: userInfoString,
        httpOnly: true,
      });
      return response;
      // return new NextResponse(JSON.stringify(userInfo), {
      //   status: 200,
      // });
    } else {
      // return res.status(400).json({ message: "Invalid verification token" });
      return new NextResponse(
        JSON.stringify({ message: "Invalid verification token" }),
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Invalid verification token" }),
      { status: 500 }
    );
  }
};
