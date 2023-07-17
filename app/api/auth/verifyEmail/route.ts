import { NextRequest, NextResponse } from "next/server";
import User from "@/libs/models/user.models";
export const POST = async (req: NextRequest, res: NextResponse) => {
  /* The code `const body = await req.json();` is parsing the JSON data from the request body. It is
  used to extract the `email` and `verificationToken` properties from the parsed JSON data. These
  properties are then assigned to the variables `email` and `verificationToken` using destructuring
  assignment. */
  const body = await req.json();

  const { email, verificationToken } = body;
  //
  try {
    /* The code `const user = await User.findOneAndUpdate({ email, verificationToken }, { : {
    isVerified: true }, : { verificationToken: 1 } }, { new: true });` is updating a user
    document in the database. */
    const user = await User.findOneAndUpdate(
      { email, verificationToken },
      { $set: { isVerified: true }, $unset: { verificationToken: 1 } },
      { new: true }
    );
    /* The code block is checking if the `user` object exists. If it does, it means that the email
  verification was successful. In this case, it returns a `NextResponse` object with a JSON string
  containing a success message and the `user` object, along with a status code of 200 (OK). */
    if (user) {
      return new NextResponse(
        JSON.stringify({ message: "Email verified", user }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Invalid verification token" }),
        { status: 400 }
      );
    }
  } catch (error: any) {
    /* The code `return new NextResponse(JSON.stringify({ message: "Invalid verification token", error:
    error.message }), { status: 500 })` is creating a new `NextResponse` object with a JSON string
    as the response body and a status code of 500 (Internal Server Error). */
    return new NextResponse(
      JSON.stringify({
        message: "Invalid verification token",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
