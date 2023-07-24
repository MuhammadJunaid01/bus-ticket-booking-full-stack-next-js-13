import { createStyles } from "@mantine/core";

export const pleaseCallStyles = createStyles((theme) => ({
  container: {
    [theme.fn.largerThan("sm")]: {
      height: "110px",
      width: "45%",
      margin: "0 auto",
      marginTop: "17px",
      overflow: "hidden",
    },
    backgroundColor: theme.colorScheme === "dark" ? "white" : "#5B21A9",
    color: theme.colorScheme === "dark" ? "" : "white",
    boxShadow: theme.shadows.xl,
    borderRadius: theme.radius.sm,
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
    justifyContent: "space-between",
    [theme.fn.smallerThan("md")]: {
      marginTop: "22px",
    },
  },
  title: {
    color: theme.colorScheme === "dark" ? "black" : "white",
    fontSize: "35px",
    fontWeight: "bold",
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  numberBox: {
    fontSize: "35px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "11px",
    width: "50%",
    backgroundColor: theme.colorScheme === "dark" ? "#a37cf0" : "#F1F3F5",
    height: "130px",
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
}));
