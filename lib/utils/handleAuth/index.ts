import { AuthTypes } from "@/lib/types";

/**
 * The function `handleAuth` is an asynchronous function that handles authentication by sending a POST
 * request to an API endpoint with the provided user data.
 * @param {AuthTypes}  - - `name`: The name of the user (optional)
 */
const handleAuth = async ({ name, email, password, endPoint }: AuthTypes) => {
  const BASEURL =
    process.env.NODE_ENV === "production"
      ? "https://multishop-ecommerce.vercel.app"
      : "http://localhost:3000";
  let data: any = {};
  if (name === undefined) {
    if (password === undefined) {
      data.email = email;
    } else {
      data.email = email;
      data.password = password;
    }
  } else if (password === undefined) {
    data.name = name;
    data.email = email;
  } else {
    data.name = name;
    data.email = email;
    data.password = password;
  }

  try {
    const response = await fetch(`${BASEURL}/api/auth/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};
export default handleAuth;
