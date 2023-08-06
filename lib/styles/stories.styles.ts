import { createStyles } from "@mantine/core";

export const storiesStyles = createStyles((theme) => ({
  container: {
    [theme.fn.largerThan("sm")]: {
      height: "70vh",
      textAlign: "center",
      padding: "20px 0px",
    },
    [theme.fn.smallerThan("sm")]: {
      marginTop: "20px",
      overflowX: "hidden",
    },
  },
  title: {
    color: theme.colorScheme === "dark" ? "white" : "unset",
    [theme.fn.largerThan("sm")]: {
      fontSize: "35px",
      fontWeight: "bold",
    },
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },
  story: {
    cursor: "pointer",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      padding: "30px 0px",
    },
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      margin: "11px 0px",
    },
    "&:hover": {
      boxShadow:
        theme.colorScheme === "dark"
          ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    },
    borderRadius: theme.radius.md,
  },
  highLightStory: {
    boxShadow:
      theme.colorScheme === "dark"
        ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  },
  userImg: {
    height: "90px",
    width: "90px",
    borderRadius: "50%",
  },
}));
