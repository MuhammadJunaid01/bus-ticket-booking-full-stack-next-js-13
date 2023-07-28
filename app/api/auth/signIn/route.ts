import User from "@/lib/models/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const secretKey = "your-secret-key"; // Change this to a secure secret key

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();

    const { email, password } = body;
    console.log(body);
    // Find the user in the database
    const user = await User.findOne({ email });
    // console.log("user", user);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    const { _id: id } = user;

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 410 }
      );
    }

    // Generate access token
    const accessToken = jwt.sign(
      { id, role: user.role },
      process.env.AUTH_SECRET ?? "",
      {
        expiresIn: "15m",
      }
    );

    // Generate refresh token
    const refreshToken = jwt.sign({ id }, process.env.AUTH_SECRET ?? "", {
      expiresIn: "7d",
    });

    // Store the refresh token in the user document
    user.refreshToken = refreshToken;
    await user.save();

    // Set the access token as a cookie
    cookies().set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      path: "/",
    });
    // Return the access token as the response
    return new NextResponse(JSON.stringify({ message: "login success" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 500 }
    );
  }
};
