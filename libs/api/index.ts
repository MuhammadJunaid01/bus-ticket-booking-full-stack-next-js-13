import { cache } from "react";
import config from "@/config";
const { url } = config;
/* The `export const getProdcutByID` is a function that is being exported from the module. It is using
the `cache` function from the `react` library to cache the result of the function call. */
export const getProdcutByID = cache(async (url: string) => {
  try {
    const res = await fetch(url, {
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
export const getProducts = async () => {
  try {
    const res = await fetch(
      `${url.BASE_URL}/api/buss`,

      { cache: "force-cache" }
    );
    if (!res.ok) undefined;
    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
