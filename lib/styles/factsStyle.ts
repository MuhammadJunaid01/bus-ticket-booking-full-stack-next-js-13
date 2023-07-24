import { createStyles } from "@mantine/core";

export const factsStyles = createStyles((theme) => ({
  constainer: {
    height: "",
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      marginTop: "40px",
      padding: "20px 0px",
      height: "75vh",
    },
  },
  title: {
    fontWeight: "bold",
    [theme.fn.smallerThan("sm")]: {
      marginTop: "30px",
    },
    color: theme.colorScheme === "dark" ? "unset" : "#5B2192",
    [theme.fn.largerThan("sm")]: {
      fontSize: "44px",
    },
  },
  factsConatiner: {
    textAlign: "center",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "90px",
      gap: "30px",
    },
  },
  factBox: {
    width: "30%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    backgroundColor: theme.colorScheme === "dark" ? "#A37CF0" : "",
    [theme.fn.largerThan("sm")]: {
      borderRadius: theme.radius.sm,
      paddingBottom: "11px",
    },
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      marginTop: "55px",
    },
  },
  lighModeShadow: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  image: {
    height: "50px",
    width: "50px",
  },
  imageBox: {
    textAlign: "center",
    height: "110px",
    width: "110px",
    borderRadius: "50%",
    backgroundColor: "#A37CF0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "34%",
    top: "-35px",
    "&::before": {
      position: "absolute",
      content: '""',
      height: "120px",
      width: "120px",
      borderRadius: "50%",
      background: "transparent",
      border: "2px solid #72bf44",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  counter: {
    fontWeight: "bold",
    [theme.fn.largerThan("sm")]: {
      fontSize: "22px",
      color: theme.colorScheme === "dark" ? "white" : "#5b2192",
      margin: "15px 0px",
    },
  },
  description: {
    [theme.fn.largerThan("sm")]: {
      fontSize: "22px",
      color: theme.colorScheme === "dark" ? "white" : "",
    },
  },
}));
