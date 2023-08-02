import jwt_decode from "jwt-decode";

export const isTokenExpired = (token: string): boolean => {
  if (token) {
    let decodedToken = jwt_decode<any>(token);
    let currentDate = new Date();

    // JWT exp is in seconds, so convert it to milliseconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // console.log("Token expired.");
      return false;
    } else {
      // console.log("Valid token");

      return true;
      // You can return or set a flag here if you need to use the result somewhere else
    }
  } else {
    console.log("Token not found.");
    return false;
  }
  return false;
};

// Usage
