import { cache } from "react";

export const domain =
  process.env.NODE_ENV === "production"
    ? "https://etickets-bd.vercel.app"
    : process.env.NEXT_PUBLIC_BASE_URL;
/* The `export const getProdcutByID` is a function that is being exported from the module. It is using
the `cache` function from the `react` library to cache the result of the function call. */
export const getBusByID = cache(async (endPoint: string) => {
  try {
    const res = await fetch(`${domain}/${endPoint}`, {
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
      `${domain}/api/buses`,

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
  busNumber: number;
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
  busNumber,
}: BuyTicketParams): Promise<string> => {
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
    busNumber,
  };
  try {
    const res = await fetch(`${domain}/api/buyTicket`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Process the response here
      const pdfBlob = await res.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      // console.log("BUY TICKET RES", res);
      if (res.redirected) {
        return res.url;
      } else {
        return pdfUrl;
      }
      // Return the PDF URL to the caller
    } else {
      // Handle the error case when the response is not successful
      console.error("Failed to generate PDF:", res.status, res.statusText);
      throw new Error("Failed to generate PDF");
    }
  } catch (error: any) {
    console.error("Error generating PDF:", error.message);
    throw error;
  }
};
