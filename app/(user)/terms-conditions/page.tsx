import { termsConditionData } from "@/lib/data/faq-data";
import { FAQ } from "@/ui";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Terms and Condition Page",
  description: "this is Terms and Condition Page of AR Poribohon",
};
const TermsConditionsPage = () => {
  return (
    <div>
      <FAQ title="Terms And Conditions " data={termsConditionData} />
    </div>
  );
};

export default TermsConditionsPage;
