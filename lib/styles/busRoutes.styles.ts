import { createStyles } from "@mantine/core";
export const busRoutesStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    // overflow: "hidden",
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      // height: "85vh",
      padding: "20px 0px",
    },
  },
  title: {
    fontSize: "35px",
    fontWeight: "bold",
  },

  busRouteBox: {
    display: "block",
    [theme.fn.largerThan("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      // gridRowGap: "10px",
      width: "100%",
      margin: "0 auto",
      marginTop: "15px",
      gridGap: "10px",
    },
  },
  route: {
    display: "flex",
    gap: "10px",
    cursor: "pointer",
    // color: "unset",
    textDecoration: "none",
    padding: "12px 5px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[7]
        : theme.colors.cyan[2],
    borderRadius: "4px",
    color: theme.colorScheme === "dark" ? theme.colors.gray[1] : "",
  },
}));
