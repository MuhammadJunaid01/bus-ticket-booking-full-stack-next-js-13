import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
const domain =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.BASE_URL;
import User, { IUser } from "@/lib/models/user.models";
export const GET = async (req: NextRequest) => {
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
      const { password, ...userWithoutPassword } = user;
      const response = NextResponse.json(
        {
          userWithoutPassword,
        },
        { status: 200 }
      );
      setCookie("jwt", userWithoutPassword, {
        maxAge: 60 * 6 * 24,
        path: "/",
        domain: domain,
        httpOnly: true,
      });

      // response.cookies.set({
      //   name: "jwt",
      //   value: token,
      //   httpOnly: true,
      //   maxAge: 60 * 60,
      // });
      return response;
    } else {
      // return res.status(400).json({ message: "Invalid verification token" });
      return new NextResponse(
        JSON.stringify({ message: "Invalid verification token" }),
        { status: 400 }
      );
    }
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid verification token" }),
      { status: 500 }
    );
  }
};
