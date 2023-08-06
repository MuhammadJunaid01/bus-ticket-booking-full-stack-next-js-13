import { EditUserProfile } from "@/ui";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Profile Page",
  description: "this is make Profile page of AR Poribohon",
};
const ProfilePage = () => {
  return (
    <div>
      <EditUserProfile />
    </div>
  );
};

export default ProfilePage;
