import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "@/lib/models/user.models";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "@/lib/email";
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
  //  `connectDB();` is a function that establishes a connection to the database.
  connectDB();
  /* `const origin = req.headers.get("origin");` is retrieving the value of the "Origin" header from
  the request. The "Origin" header specifies the URI of the resource from which the request
  originates. */
  const origin = req.headers.get("origin");

  /* `const body: UserDocument = await req.json();` is parsing the JSON data from the request body and
  assigning it to the `body` variable. The `UserDocument` type is used to define the structure of
  the user data. By using `await req.json()`, the code is waiting for the JSON data to be fully
  parsed before assigning it to the `body` variable. */
  const body: IUser = await req.json();

  const { name, email, password, role } = body;
  try {
    /* `const existingUser = await User.findOne({ email });` is querying the database to check if there
   is already a user with the specified email address. */
    const existingUser = await User.findOne({ email });

    /* This code block is checking if there is already a user with the specified email address in the
    database. If an existing user is found, it returns a response with a status code of 400 (Bad
    Request)*/
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "Email already exists" }),
        { status: 400 }
      );
    }

    /* `const verificationToken = uuidv4();` is generating a unique verification token using the
   `uuidv4` function from the `uuid` library. */
    const verificationToken = uuidv4();

    /* The line `const hashedPassword = await bcrypt.hash(password, 10);` is using the `bcrypt` library
  to hash the user's password. */
    const hashedPassword = await bcrypt.hash(password, 10);

    /* The code is creating a new instance of the `User` model with the provided user data. The `User`
   model represents a user in the database and has properties such as `name`, `email`, `password`,
   `role`, and `verificationToken`. */
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      verificationToken,
    });

    const user = await newUser.save();
    /* This code block is executed if the user registration is successful. */
    if (user) {
      /* The `sendVerificationEmail` function is being called with two arguments: `user.email` and
     `user.verificationToken`. This function is responsible for sending a verification email to the
     user's email address. */
      sendVerificationEmail(user.email, user.verificationToken);

      /* The code `return new NextResponse(...)` is creating a new response object to be returned by the
     server. */
      return new NextResponse(
        JSON.stringify({ message: "Registration successful", user }),
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error: any) {
    /* The `catch (error: any)` block is used to handle any errors that occur during the execution of
  the `POST` function. */
    return new NextResponse(
      JSON.stringify({
        message:
          process.env.NODE_ENV === "production"
            ? "Registration failed"
            : error.message,
      }),
      { status: 500 }
    );
  }
};
