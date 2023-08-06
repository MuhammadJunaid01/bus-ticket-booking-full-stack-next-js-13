import { createStyles } from "@mantine/core";

export const footerStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      height: "70vh",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[9]
          : theme.colors.gray[2],
      marginTop: "60px",
      padding: "33px 44px",
    },
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      marginTop: "20px",
    },
  },
  logo: {
    width: "200px",
    // border: `1px solid ${theme.colorScheme === "dark" ? "#58D37F" : ""}`,
    padding: "9px",
    borderRadius: "4px",
    // margin: "0 auto",
    [theme.fn.smallerThan("sm")]: {
      margin: "0 auto",
      marginTop: "10px",
      marginBottom: "11px",
    },
  },
  socialIcoBox: {
    display: "flex",
    gap: "22px",
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      gap: "22px",
    },
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "space-around",
      marginTop: "22px",
    },
  },
  icon_and_social: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25px",
      alignItems: "center",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
      paddingBottom: "150px",
      marginBottom: "50px",
      textAlign: "center",
    },
  },
  appIconBox: {
    display: "flex",
    gap: "11px",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "space-around",
      marginTop: "11px",
    },
  },
  appIcon: {
    width: "130px",
    height: "50px",
    // border: "1px solid red",
    cursor: "pointer",
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },
  socialIcon: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.blue[3]
        : theme.colors.gray[6],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: theme.colorScheme === "dark" ? "#1C7ED6" : "white",
    fontSize: "21px",
    marginTop: "4px",
  },
  copyRight: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.fn.smallerThan("sm")]: {
      marginBottom: "2vh",
    },
  },
}));
