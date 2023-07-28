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

  // return new NextResponse(
  //   JSON.stringify({ message: "1111111111111Email already exists" }),
  //   { status: 200 }
  // );
  try {
    const user = await User.findOneAndUpdate(
      { email, verificationToken: token },
      { $set: { isVerified: true }, $unset: { verificationToken: 1 } },
      { new: true }
    );

    // const {} = user;
    if (user) {
      // const { password, ...userWithoutPassword } = user;
      const { _doc } = user;
      const { password, ...userInfo } = _doc;
      // const response = NextResponse.json(
      //   {
      //     others,
      //   },
      //   { status: 200 }
      // );
      // setCookie("jwt", _doc, {
      //   maxAge: 60 * 6 * 24,
      //   path: "/",
      //   domain: domain,
      //   httpOnly: true,
      // });
      // cookies().set({
      //   name: "jwt",
      //   value: _doc,
      //   httpOnly: true,
      //   path: "/",
      //   maxAge: 60 * 6 * 24,
      //   domain: domain,
      // });
      // cookies().set("jwt", userInfo, {
      //   secure: true,
      //   httpOnly: true,
      //   path: "/",
      //   domain: domain,
      // });
      cookies().set({
        name: "jwt",
        value: userInfo,
        httpOnly: true,
        path: "/",
        secure: true,
        domain: domain,
      });
      // return response;
      return new NextResponse(JSON.stringify(userInfo), {
        status: 200,
      });
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
