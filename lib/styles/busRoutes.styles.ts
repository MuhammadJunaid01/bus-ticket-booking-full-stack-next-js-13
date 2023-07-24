import { createStyles } from "@mantine/core";
export const busRoutesStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      height: "85vh",
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
      gridRowGap: "10px",
      width: "90%",
      margin: "0 auto",
      marginTop: "15px",
    },
  },
  route: {
    display: "flex",
    gap: "10px",
    cursor: "pointer",
    color: "unset",
    textDecoration: "none",
  },
}));
