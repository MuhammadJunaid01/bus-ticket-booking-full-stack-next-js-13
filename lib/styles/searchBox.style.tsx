import { createStyles } from "@mantine/core";
export const seacrhBoxStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === "dark" ? "white" : "#5B21A9",
    width: "70%",
    margin: "0 auto",
    borderRadius: theme.radius.sm,
    [theme.fn.largerThan("sm")]: {
      height: "140px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: "6px",
      marginTop: "25px",
      padding: "0px 11px",
    },
    [theme.fn.smallerThan("md")]: {},
  },
  inputBox: {
    position: "relative",
    display: "flex",
    gap: "10px",
  },
  input: {
    width: "",
    padding: "6px 9px",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.md,
    ...theme.fn.focusStyles(""),
    backgroundColor:
      theme.colorScheme === "dark" ? "white" : theme.colors.gray[1],
  },
  changeValueBtn: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: "11px",
    left: "46%",
    boxShadow: theme.shadows.xl,
  },
  searchBtn: {
    height: "50px",
    width: "22%",
    textAlign: "center",
    borderRadius: theme.radius.sm,
    backgroundColor:
      theme.colorScheme === "dark" ? "#a37cf0" : theme.colors.gray[1],
    color: theme.colorScheme === "dark" ? "white" : "black",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      textAlign: "center",
      marginTop: "12px",
    },
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? "#a37cf0" : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? "white" : "black",
    },
  },
}));
