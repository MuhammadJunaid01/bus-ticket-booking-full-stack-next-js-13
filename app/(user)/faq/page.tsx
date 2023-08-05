import { faqData } from "@/lib/data/faq-data";
import { FAQ } from "@/ui";
import React from "react";

const FaqPage = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <FAQ title="FAQ's" data={faqData} />
    </div>
  );
};

export default FaqPage;
