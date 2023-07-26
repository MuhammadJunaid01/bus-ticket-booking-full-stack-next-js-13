import {
  Box,
  Button,
  Card,
  Checkbox,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

import handleAuth from "@/lib/utils/handleAuth";
import { useForm } from "@mantine/form";
const SignIn: React.FC<{
  isSignUp: () => void;
  isForgottenPassword: () => void;
}> = ({ isSignUp, isForgottenPassword }) => {
  const { hovered, ref } = useHover();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value: any, values: { password: any }) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  return (
    <Card>
      <Box mx="auto">
        <Text
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "#2D385E",
            textAlign: "center",
          }}
        >
          MultyShop
        </Text>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#2D385E",
            textAlign: "center",
          }}
        >
          Login to your account
        </Text>
        <Text
          onClick={isSignUp}
          style={{
            textAlign: "center",
            marginTop: "11px",
          }}
        >
          Don’t have an account?{" "}
          <span
            ref={ref}
            style={
              hovered
                ? {
                    cursor: "pointer",
                    color: "#6382FE",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Sign Up Free!
          </span>
        </Text>
      </Box>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(({ email, password }) => {
            handleAuth({ email, password, endPoint: "signIn" });
          })}
        >
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "11px",
            }}
          >
            <Checkbox sx={{ color: "#959595" }} label="Remember me" />
            <Text
              onClick={isForgottenPassword}
              style={{
                cursor: "pointer",
                color: "#549CF9",
                textDecoration: "underline",
              }}
            >
              Forgot password?
            </Text>
          </Box>
          <Button size="lg" fullWidth type="submit" mt="sm">
            Sign up{" "}
          </Button>
        </form>
      </Box>
    </Card>
  );
};

export default SignIn;
