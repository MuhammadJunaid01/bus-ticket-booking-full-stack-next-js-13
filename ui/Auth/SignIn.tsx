/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRouter, useSearchParams } from "next/navigation";
import { loadUi } from "@/lib/utils";
import { notifications } from "@mantine/notifications";
const SignIn: React.FC<{
  isSignUp: () => void;
  isForgottenPassword: () => void;
}> = ({ isSignUp, isForgottenPassword }) => {
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const pass = params.get("password") ?? "";
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isRedirectSign, setIsRedirectSign] = React.useState<boolean>(false);
  const { hovered, ref } = useHover();
  const router = useRouter();

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
  const handleClearQuery = async () => {
    // await loadUi(5000);

    router.push("/auth");
  };
  const SignByRedirect = React.useCallback(() => {
    const signIn = async () => {
      if (email !== "" || pass !== "") {
        setLoading(true);
        setIsRedirectSign(true);
        await loadUi(5000);
        handleAuth({
          email: email,
          password: pass,
          endPoint: "signIn",
        });
        setLoading(false);
      }
    };
    return signIn;
  }, [email, pass]); // Update the dependencies here

  React.useEffect(() => {
    try {
      if (params) {
        // Check if params exist
        SignByRedirect();
        setTimeout(() => {
          handleClearQuery();
        }, 8000);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [params, SignByRedirect]);
  React.useEffect(() => {
    try {
      if (params) {
        SignByRedirect();

        setTimeout(() => {
          handleClearQuery();
        }, 8000);
      }
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <Card
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? "#25262B" : theme.colors.gray[3],
        height: "85vh",
      })}
    >
      <Box mx="auto">
        <Text
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? "white" : "black",
          })}
          style={{
            fontSize: "50px",
            fontWeight: "800",
            // color: "white",
            textAlign: "center",
          }}
        >
          Ar Poribohon
        </Text>
        <Text
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? "white" : "black",
          })}
          style={{
            fontSize: "30px",
            fontWeight: "600",
            // color: "white",
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
          onSubmit={form.onSubmit(async ({ email, password }) => {
            setLoading(true);
            const response = handleAuth({
              email,
              password,
              endPoint: "signIn",
            });
            const data = await response;
            console.log("data", data);
            if (data) {
              notifications.show({
                title: "successfully signIn",
                message: "Hey there, your code is awesome! 🤥",
              });
              localStorage.setItem(
                "accessToken",
                JSON.stringify(data.accessToken)
              );
              localStorage.setItem(
                "refreshToken",
                JSON.stringify(data.refreshToken)
              );
              localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
              setLoading(false);
            }
          })}
        >
          <TextInput
            mt="sm"
            label="Email"
            placeholder={isRedirectSign ? email : "Email"}
            // value={}
            disabled={isRedirectSign ? true : false}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder={isRedirectSign ? pass : "Password"}
            disabled={isRedirectSign ? true : false}
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
          <Button
            loading={loading ? true : false}
            size="lg"
            fullWidth
            type="submit"
            mt="sm"
          >
            Sign up{" "}
          </Button>
        </form>
      </Box>
    </Card>
  );
};

export default SignIn;
