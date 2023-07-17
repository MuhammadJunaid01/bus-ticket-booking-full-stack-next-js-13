import { NextResponse } from "next/server";

export async function GET() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  console.log("users", data);
  return NextResponse.json({ users: data });
}
