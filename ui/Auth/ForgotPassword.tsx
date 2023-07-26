import React from "react";
import { Box, Button, Text, TextInput } from "@mantine/core";
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
    <div>
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
          textAlign: "center",
          marginTop: "11px",
          color: "#2D385E",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Recover your password
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: "11px",
          color: "#2D385E",
          fontSize: "18px",
        }}
      >
        Fill in your e-mail address below and we will send you an email with
        further instructions.
      </Text>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(({ email }) =>
            handleAuth({ email, endPoint: "forgotPassword" })
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
    </div>
  );
};

export default ForgotPassword;
