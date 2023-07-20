import { createStyles } from "@mantine/core";

export const ourBusesStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    [theme.fn.largerThan("sm")]: {
      height: "fit-content",
      // overflow: "hidden",
    },

    [theme.fn.smallerThan("sm")]: {
      overflowX: "hidden",
    },
  },
  titileStle: {
    position: "relative",
    [theme.fn.largerThan("sm")]: {
      fontSize: "35px",
      fontWeight: "bold",
      marginTop: "50px ",
    },

    [theme.fn.smallerThan("sm")]: {},
    // "&::before": {
    //   position: "absolute",
    //   top: "9px",
    //   content: '""',
    //   height: "2px",
    //   width: "30px",
    //   backgroundColor: "red",
    // },
  },
  busContainer: {
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      border: `1px solid ${theme.colorScheme === "dark" ? "#d6cee7" : "unset"}`,
      padding: "7px",
      marginTop: "11px",
      borderRadius: theme.radius.sm,
      cursor: "pointer",
    },
  },
  busImg: {
    height: "70px",
    width: "120px",
    borderRadius: theme.radius.sm,
  },
  paginateStyle: {
    position: "absolute",
    bottom: "-38px",
    right: "15%",
  },
}));
