import React from "react";
import { Box, Button, Card, Text, TextInput } from "@mantine/core";
import handleAuth from "@/lib/utils/handleAuth";
import { useForm } from "@mantine/form";
const ForgotPassword: React.FC<{
  haveAccount: () => void;
  dont_Haveaccount?: () => void;
}> = ({ haveAccount, dont_Haveaccount }) => {
  const form = useForm({
    initialValues: {
      email: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Card
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? "#25262B" : theme.colors.gray[3],
        height: "85vh",
      })}
    >
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
        AR Poribohon
      </Text>
      <Text
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? "white" : "black",
        })}
        style={{
          textAlign: "center",
          marginTop: "11px",
          // color: "white",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Recover your password
      </Text>
      <Text
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? "white" : "black",
        })}
        style={{
          textAlign: "center",
          marginTop: "11px",
          // color: "white",
          fontSize: "18px",
        }}
      >
        Fill in your e-mail address below and we will send you an email with
        further instructions.
      </Text>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(({ email }) =>
            handleAuth({
              email: email,
              endPoint: "forgotPass",
            })
          )}
        >
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />

          <Button size="lg" fullWidth type="submit" mt="sm">
            Recover your password
          </Button>
        </form>
        <Text
          onClick={haveAccount}
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
        <Text
          onClick={dont_Haveaccount}
          style={{
            color: "#6382FE",
            fontWeight: "600",
            cursor: "pointer",
            textAlign: "center",
            marginTop: "11px",
          }}
        >
          Don’t have an account?
        </Text>
      </Box>
    </Card>
  );
};

export default ForgotPassword;
