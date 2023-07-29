import { cache } from "react";
const url =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.NEXT_PUBLIC_BASE_URL;
export const checkTicketByID = cache(async (endPoint: string) => {
  try {
    const res = await fetch(`${url}/${endPoint}`, {
      next: { revalidate: 60 },
    });

    // console.log("CONSOLE FROM", data.status);
    if (!res.ok) undefined;
    return res.json();
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
});
