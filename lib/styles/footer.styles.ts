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
  },
  logo: {
    width: "200px",
    // border: `1px solid ${theme.colorScheme === "dark" ? "#58D37F" : ""}`,
    padding: "9px",
    borderRadius: "4px",
    // margin: "0 auto",
  },
  icon_and_social: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25px",
      alignItems: "center",
    },
  },
  appIcon: {
    width: "130px",
    height: "50px",
    // border: "1px solid red",
    cursor: "pointer",
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
    color: theme.colorScheme === "dark" ? theme.colors.gray[1] : "white",
    fontSize: "21px",
    marginTop: "4px",
  },
  copyRight: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
