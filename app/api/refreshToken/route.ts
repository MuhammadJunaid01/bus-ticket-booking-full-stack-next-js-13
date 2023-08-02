import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { refreshToken } = body;
  const decoded = jwt.verify(refreshToken, process.env.AUTH_SECRET);
  try {
    if (typeof decoded !== "string" && "id" in decoded) {
      // Now TypeScript knows that 'decoded' is of type JwtPayload
      // and you can access the 'id' property without any errors
      const newAccessToken = jwt.sign(
        { id: decoded.id },
        process.env.AUTH_SECRET,
        {
          expiresIn: "15m", // Set the expiration time for the new access token as desired
        }
      );
      const response = NextResponse.json(
        {
          message: "successfully generate access token",
          token: newAccessToken,
        },
        { status: 200 }
      );

      response.cookies.set({
        name: "accessToken",
        value: newAccessToken,
        httpOnly: true,
        maxAge: 900,
        sameSite: "strict",
        path: "/",
      });
      return response;
    } else {
      // Handle the case when the decoded value is not of type JwtPayload
      console.error("Invalid decoded token.");
      return new NextResponse(
        JSON.stringify({ message: "Invalid decoded token." }),
        {
          status: 400,
        }
      );
      // Handle the error or redirect to the authentication page as needed
    }
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
