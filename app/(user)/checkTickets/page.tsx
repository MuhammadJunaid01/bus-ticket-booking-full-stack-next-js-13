import { CheckTicket } from "@/ui";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Check Ticket Page",
  description: "this check ticket page of ar poribohon.",
};
const CheckTicketsPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CheckTicket title="Check Your Ticket" />
    </div>
  );
};

export default CheckTicketsPage;
