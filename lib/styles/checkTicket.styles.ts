import { createStyles } from "@mantine/core";

export const checkTicketStyles = createStyles((theme) => ({
  container: {
    height: "85vh",
    width: "100%",
    overflow: "hidden",
  },
  content: {
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
      // Define placeholder styles here
      color: theme.colors.red,
      fontStyle: "italic",
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
}));
