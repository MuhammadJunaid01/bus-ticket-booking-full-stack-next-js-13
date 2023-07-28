import { cache } from "react";
const url =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.NEXT_PUBLIC_BASE_URL;
/* The `export const getProdcutByID` is a function that is being exported from the module. It is using
the `cache` function from the `react` library to cache the result of the function call. */
export const getBusByID = cache(async (endPoint: string) => {
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

/**
 * The function `getProducts` is an asynchronous function that fetches data from a specified API
 * endpoint and returns the response as JSON.
 * @returns The function `getProducts` returns a promise that resolves to the JSON data fetched from
 * the specified URL.
 */
export const getAllBus = async () => {
  try {
    const res = await fetch(
      `${url}/api/buses`,

      { cache: "force-cache" }
    );
    if (!res.ok) undefined;
    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export interface BuyTicketParams {
  userId: string;
  busId: string | undefined;
  seatNumber: number[];
  boardingPlace: string;
  destination: string;
  date: string;
  email: string;
  id: string;
  name: string;
}
export const buyTicket = async ({
  userId,
  busId,
  seatNumber,
  boardingPlace,
  destination,
  date,
  email,
  id,
  name,
}: BuyTicketParams) => {
  const data = {
    userId,
    busId,
    seatNumber,
    boardingPlace,
    destination,
    date,
    email,
    id,
    name,
  };
  try {
    // if (Array.isArray(seatNumber)) {
    //   console.log("CCCCCCCCCCCCCCCCCCCCCC");
    //   console.log(seatNumber);
    // }
    const res = await fetch(`${url}/api/buyTicket`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error: any) {
    console.log("error", error.message);
  }
};
