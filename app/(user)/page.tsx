"use client";
import { getProducts } from "@/libs/api";
import { HomePage } from "@/ui";
import { notFound } from "next/navigation";
const Home = () => {
  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <HomePage />
    </main>
  );
};
export default Home;
