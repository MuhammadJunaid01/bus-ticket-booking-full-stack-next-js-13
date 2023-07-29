/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Box, Button, Container } from "@mantine/core";
import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  console.log(process.env.NODE_ENV);
  return (
    <Container size={"lg"}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ margin: "2px 0px", padding: "0px" }}>
          Error Message: {error.message}
        </h1>
        <h1 style={{ margin: "2px 0px", padding: "0px" }}>
          Error Name:
          {process.env.NODE_ENV === "development" ? error.name : ""}
        </h1>
        <h1 style={{ margin: "2px 0px", padding: "0px" }}>
          {" "}
          Error Stack:
          {process.env.NODE_ENV === "development"
            ? error.stack?.slice(0, 64)
            : ""}
        </h1>

        <Box style={{ flexDirection: "row", marginBottom: "17px" }}>
          <Button
            style={{ marginRight: "20px" }}
            size="md"
            onClick={reset}
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 90 }}
          >
            Try
          </Button>

          <Button
            style={{
              backgroundImage: "linear-gradient(94deg,#ee5154,#fb7100);",
            }}
            onClick={() => router.push("/")}
            size="md"
          >
            Go Back Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default error;
