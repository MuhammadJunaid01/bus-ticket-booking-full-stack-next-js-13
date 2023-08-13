"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import { SignUpProps } from "@/lib/types";
import handleAuth from "@/lib/utils/handleAuth";
import {
  Box,
  Button,
  Card,
  PasswordInput,
  TextInput,
  Text,
  Radio,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IUser } from "@/lib/models/user.models";
import { notifications } from "@mantine/notifications";
interface User extends IUser {
  createdAt: string;
  updatedAt: string;
  _v: number;
  _id: string;
}

const SignUp: React.FC<SignUpProps> = ({ onClick, state }) => {
  const [user, setUser] = React.useState<User | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value: any, values: { password: any }) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const redirect = React.useCallback(() => {
    if (user?.email) {
      state(false);
    }
  }, [state, user?.email]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    redirect();
  }, [redirect, user]);

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

            textAlign: "center",
            marginTop: "-20px",
          }}
        >
          AR Poribohon
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
          Sign up
        </Text>
      </Box>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(async ({ name, email, password }) => {
            setLoading(true);
            try {
              const response = handleAuth({
                name,
                email,
                password,
                endPoint: "signUp",
              });
              const data = await response;
              console.log("data", data);
              if (data.user) {
                notifications.show({
                  title: "successfully signUp",
                  message: "Hey there, your code is awesome! 🤥",
                });
                setLoading(false);
                setUser(data.user);
                // localStorage.setItem("user", JSON.stringify(data.user));
                router.push(`/auth?email=${email}&password=${password}`);
              }
            } catch (error: any) {
              notifications.show({
                title: "signUp Failed!",
                message: error.message,
              });
              setError(error.message);
              setLoading(false);
            }
          })}
        >
          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
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

          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
          <Text style={{ marginTop: "8px", color: "#A2A2A3" }}>
            I agree to the{" "}
            <a
              style={{ color: "#6382FE" }}
              href="https://etickets-bd.vercel.app/"
              target="_blank"
            >
              privacy policy
            </a>{" "}
            and terms of{" "}
            <a
              style={{ color: "#6382FE" }}
              href="https://etickets-bd.vercel.app/"
              target="_blank"
            >
              service
            </a>
            .
          </Text>
          {/* <Radio.Group
            style={{ textAlign: "center", marginTop: "4px" }}
            value={role}
            onChange={setRole}
            name="favoriteFramework"
            label="Select your role"
            withAsterisk
          >
            <Group
              mt="xs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Radio value="user" label="user" />
              <Radio value="merchant" label="merchant" />
            </Group>
          </Radio.Group> */}
          <Button
            size="lg"
            fullWidth
            type="submit"
            mt="sm"
            loading={loading ? true : false}
          >
            Sign up
          </Button>
        </form>

        <Text
          onClick={onClick}
          style={{
            color: "#6382FE",
            fontWeight: "600",
            cursor: "pointer",
            textAlign: "center",
            marginTop: "11px",
          }}
        >
          Already have an account?
        </Text>
      </Box>
    </Card>
  );
};

export default SignUp;
