import { domain } from ".";

export interface checkTicketParam {
  endPoint: string;
  ticketId: string;
}
export const checkTicketByID = async (params: checkTicketParam) => {
  const { endPoint, ticketId } = params;
  let accessToken;
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("accessToken") ?? "";
  }
  try {
    const res = await fetch(`${domain}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ticketId: ticketId }),
    });

    if (!res.ok) {
      // Handle non-JSON responses here
      throw new Error("Error: Request failed with status " + res.status);
    }
    if (res.redirected) {
      return res.url;
    }

    return res.json();
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
