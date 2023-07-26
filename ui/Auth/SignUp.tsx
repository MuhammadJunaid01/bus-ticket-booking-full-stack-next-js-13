"use client";
import React from "react";

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
interface User extends IUser {
  createdAt: string;
  updatedAt: string;
  _v: number;
  _id: string;
}

const SignUp: React.FC<SignUpProps> = ({ onClick, state }) => {
  const [user, setUser] = React.useState<User | undefined>();
  const [role, setRole] = React.useState("user");

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
  React.useEffect(() => {
    redirect();
    console.log(user?.email);
  }, [redirect, user]);
  return (
    <Card>
      <Box mx="auto">
        <Text
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "white",
            textAlign: "center",
            marginTop: "-20px",
          }}
        >
          AR Poribohon
        </Text>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
          }}
        >
          Sign up
        </Text>
      </Box>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(async ({ name, email, password }) => {
            const response = handleAuth({
              name,
              email,
              password,
              endPoint: "signUp",
              role,
            });
            const data = await response;
            setUser(data.user);
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
              href="https://multishop-ecommerce-pduj.vercel.app/"
              target="_blank"
            >
              privacy policy
            </a>{" "}
            and terms of{" "}
            <a
              style={{ color: "#6382FE" }}
              href="https://multishop-ecommerce-pduj.vercel.app/"
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
          <Button size="lg" fullWidth type="submit" mt="sm">
            Sign up{" "}
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
