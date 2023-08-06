import { createStyles } from "@mantine/core";
import React from "react";
interface userProfileStylesProps {
  Icon?: React.ReactNode;
}
export const userProfileStyles = createStyles(
  (theme, { Icon }: userProfileStylesProps) => ({
    container: {
      width: "100%",
      overflow: "hidden",
      boxSizing: "border-box",
      padding: "30px 20px",
      [theme.fn.smallerThan("sm")]: {
        padding: "10px 0xp",
      },
    },
    card: {
      backgroundColor: theme.colorScheme === "dark" ? "#1F1E2C" : "#E9ECEF",
      width: "100%",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.fn.smallerThan("sm")]: {
        width: "100%",
      },
    },
    title: {
      color: theme.colorScheme === "dark" ? "white" : "black",
      fontWeight: 500,
    },
    profilePic: {
      height: 100,
      width: 100,
      borderRadius: "50%",
      [theme.fn.smallerThan("sm")]: {
        margin: 12,
      },
    },
    uploadFIle: {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%,-50%)",
      // backgroundColor: "red",
      bottom: -18,
      border: "none",
      padding: "0px",
    },
    rootFileInput: {
      // backgroundColor: "red",
    },
    btnFilled: {
      padding: "8px 17px",
      borderRadius: "40px",
      border: `1px solid ${theme.colorScheme === "dark" ? "white" : "black"}`,
      marginRight: 19,
    },
    btnSave: {
      padding: "11px 21px",
      backgroundColor:
        theme.colorScheme === "dark" ? "#40189D" : theme.colors.gray[5],
      color: theme.colorScheme === "dark" ? "white" : "black",
      fontWeight: 600,
      borderRadius: 30,
      [theme.fn.smallerThan("sm")]: {
        padding: "11px 7px",
      },
    },
    btnBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inputBox: {
      [theme.fn.largerThan("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 26,
      },
    },
    input: {
      border: "none",
      width: "100%",
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.gray[7] : ""
      }`,
      backgroundColor: "inherit",

      padding: Icon === undefined ? "7px 9px" : "7px 21px",
      "&:focus": {
        outline: "none",
        borderBottomColor: theme.colors.blue[5],
      },
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.gray[3],
    },
    label: {
      fontSize: 14,
      // marginBottom: 16,
      color: theme.colorScheme === "dark" ? theme.colors.gray[7] : "black",
      marginBottom: Icon === undefined ? "0px" : " 10px",
    },
    icon: {
      position: "absolute",
    },
    ticketBox: {},
    ticketTitle: {
      textAlign: "center",
      color: theme.colorScheme === "dark" ? "white" : "black",
      fontWeight: 500,
    },
  })
);
