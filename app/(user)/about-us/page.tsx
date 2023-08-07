import { AboutUs } from "@/ui";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Us page",
  description: "this is About Us Page of AR Poribohon",
};
const AboutusPage = () => {
  return (
    <div>
      {/*  */}
      <AboutUs />
    </div>
  );
};

export default AboutusPage;
