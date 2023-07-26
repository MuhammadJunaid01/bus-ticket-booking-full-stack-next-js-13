"use client";
import { useSearchParams } from "next/navigation";
import { IconDatabase, IconAt } from "@tabler/icons-react";
import { Box, Button, Card, Input, Text } from "@mantine/core";
import React from "react";
const VerifyEmailPage = () => {
  const [error, setError] = React.useState<string>("");
  const searchParams = useSearchParams();
  //   const { token } = router.query;/
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  // Implement the logic for verifying the email using the token
  React.useEffect(() => {
    const verify = async () => {
      const response = await fetch(
        `${process.env.BASE_URL}/api/auth/verifyEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, token }), // Replace 'data' with your request payload
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const responseData = await response.json();
      return responseData;
    };
    const data = verify();
    console.log("data", data);
  }, [token, email]);
  return (
    <Box
      style={{
        width: "35%",
        margin: "0 auto",
        padding: "20px 0px",
        position: "relative",
      }}
    >
      {/* Add your email verification logic and UI components */}
      <Card
        // style={{ height: "40vh" }}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: "-15px",
            fontSize: "40px",
            fontWeight: "500",
          }}
        >
          Verify Email
        </Text>

        <Input.Wrapper
          id="input-demo"
          withAsterisk
          label="Wait for verification"
          error={error}
        >
          <Input
            id="input-demo"
            placeholder={email ? email : "email"}
            disabled
          />
          <Input
            style={{ margin: "8px 0px" }}
            id="input-demo"
            placeholder={token ? token : "token"}
            disabled
          />
        </Input.Wrapper>
        <Box style={{ textAlign: "center", marginTop: "10px" }}>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            size="md"
            leftIcon={<IconDatabase size="1rem" />}
            loading
          >
            Wait for verify
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default VerifyEmailPage;
