import { domain } from "../api";

export const getReshToken = async (refreshToken: any) => {
  try {
    const response = await fetch(`${domain}/api/refreshToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    // // Handle the data as needed
    // console.log("DATA", data);
    if (data) {
      const { token } = data;
      localStorage.setItem("accessToken", JSON.stringify(token));
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
