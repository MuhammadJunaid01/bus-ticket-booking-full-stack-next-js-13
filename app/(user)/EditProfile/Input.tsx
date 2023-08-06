import { userProfileStyles } from "@/lib/styles";
import { Box, Text } from "@mantine/core";
import React from "react";

export interface InputProps {
  icon?: React.ReactNode;
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
  type: "text" | "email" | "password";
}
const Input: React.FC<InputProps> = ({
  icon,
  label,
  setState,
  placeHolder,
  type,
}) => {
  const { classes } = userProfileStyles({ Icon: icon });

  return (
    <Box style={{ position: "relative" }}>
      <Text className={classes.label}>{label}</Text>
      <Text className={classes.icon}>{icon}</Text>
      <input
        className={classes.input}
        type={type}
        placeholder={placeHolder}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
      />
    </Box>
  );
};

export default Input;
