import { createStyles } from "@mantine/core";

export const checkTicketStyles = createStyles((theme) => ({
  container: {
    height: "85vh",
    width: "100%",
    overflow: "hidden",
  },
  content: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? "#25262B" : theme.colors.gray[4]
    }`,

    [theme.fn.largerThan("sm")]: {
      width: "50%",
      margin: "0 auto",
    },
    // padd
  },
  imgStyle: {
    height: "60vh",
    width: "50%",
  },
  inputStyle: {
    width: "100%",
    padding: "9px 4px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[7]
        : theme.colors.gray[4],
    borderRadius: theme.radius.sm,

    "&::placeholder": {
      color: "blue", // Replace this with your desired placeholder color
      fontStyle: "italic",
      /* Additional styles for the placeholder can be added here */
    },
  },
  searchInputBox: {
    position: "relative",
  },
  serchIcon: {
    position: "absolute",
    right: "10px",
    top: "16px",
    cursor: "pointer",
  },
  searchBtn: {
    display: "block",
    width: "40%",
    margin: "0 auto",
    position: "absolute",
    bottom: "6px",
    padding: "10px 6px",
    left: "50%" /* Move the left edge of the div to the horizontal center of the parent */,
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: theme.fontSizes.xl,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[4]
    }`,
    "&:hover": {
      boxShadow:
        theme.colorScheme == "dark"
          ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    },
  },
}));
