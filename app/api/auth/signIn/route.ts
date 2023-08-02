import User, { IUser } from "@/lib/models/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
const generateTokens = (id: any) => {
  const accessToken = jwt.sign({ id }, process.env.AUTH_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id }, process.env.AUTH_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
export const POST = async (req: NextRequest) => {
  connectDB();
  try {
    const body = await req.json();

    const { email, password: pass } = body;
    // Find the user in the database
    const user: IUser | null = await User.findOne({ email });
    if (user) {
      // Verify the password
      const isPasswordValid = await bcrypt.compare(pass, user.password);

      if (!isPasswordValid) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid credentials" }),
          { status: 410 }
        );
      }
      const { password, ...userInfo } = user;
      // Generate tokens
      const { accessToken, refreshToken } = generateTokens(user._id);
      const refreshTokenTokenWithInfo = {
        refreshToken,
        isAdmin: user.isAdmin,
      };
      const response = NextResponse.json(
        {
          message: "login success",
          accessToken,
          refreshToken,
          userInfo,
        },
        { status: 200 }
      );
      const refreshTokenSerialized = JSON.stringify(refreshTokenTokenWithInfo);

      response.cookies.set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        maxAge: 900,
        sameSite: "strict",
        path: "/",
      });
      response.cookies.set({
        name: "refreshToken",
        value: refreshTokenSerialized,
        httpOnly: true,
        maxAge: 604800,
        sameSite: "strict",
        path: "/",
      });
      return response;
    } else {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 500 }
    );
  }
};
