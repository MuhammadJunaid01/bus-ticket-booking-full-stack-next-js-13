import { termsConditionData } from "@/lib/data/faq-data";
import { FAQ } from "@/ui";
import React from "react";

const TermsConditionsPage = () => {
  return (
    <div>
      <FAQ title="Terms And Conditions " data={termsConditionData} />
    </div>
  );
};

export default TermsConditionsPage;
