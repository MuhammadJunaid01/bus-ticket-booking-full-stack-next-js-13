"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const pathName = usePathname();

  let modifiedString = pathName.replace(/\//g, "");
  return (
    <div>
      <h1>under maintenance {modifiedString} page</h1>
    </div>
  );
};

export default NotFoundPage;
