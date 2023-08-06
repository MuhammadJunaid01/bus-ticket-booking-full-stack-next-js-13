import { faqData } from "@/lib/data/faq-data";
import { FAQ } from "@/ui";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "FAQ Page",
  description: "this is FAQ Page of AR Poribohon",
};
const FaqPage = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <FAQ title="FAQ's" data={faqData} />
    </div>
  );
};

export default FaqPage;
